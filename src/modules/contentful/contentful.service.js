import React from 'react'
import * as contentful from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const options = {
  renderNode: {
    'embedded-asset-block': node => {
      const comp = `<img src="${node.data.target.fields.file.url}"/>`
      return <div dangerouslySetInnerHTML={{ __html: comp }} />
    },
  },
}

const client = contentful.createClient({
  space: 'qhgwkj3lu81s',
  accessToken: '5c4eefd9a34750951fb051f871241f6a6253c429ffeb7d20e4846f9f9122f708',
})

const getPictures = async (pictures, setCats, cat) =>
  await pictures
    .map(async picItem => await client.getAsset(picItem.sys.id))
    .map(async pic => {
      const pictureObj = await pic
      setCats(state => {
        const resPic = state.pictures || []
        const p = {
          ...cat,
          pictures: [...resPic, pictureObj.fields.file.url],
        }
        return p
      })
      return pictureObj.fields.file.url
    })

const mapToArticle = ({ ...entry }) => ({
  ...entry.fields,
  cuerpo: documentToReactComponents(entry.fields.cuerpo, options),
})

const mapToCat = async (cat, setCats, addPictures) => {
  const { name, id, pictures, url, text } = cat.fields
  const result = {
    name,
    text,
    id,
    url,
    date: new Date(cat.sys.createdAt),
    picture: await client.getAsset(pictures[0].sys.id).then(picture => picture.fields.file.url),
  }
  if (!addPictures) {
    setCats(cats => {
      const catList = [...cats, result]
      return catList.sort((a, b) => {
        if (a.date > b.date) {
          return -1
        }
        return 1
      })
    })
  } else {
    await getPictures(pictures, setCats, result)
  }
  return result
}

export async function getEntries(setState) {
  const result = await client
    .getEntries({ content_type: 'artculo' })
    .then(entries => entries.items.map(mapToArticle))
  return setState(state => ({ ...state, articles: result }))
}

export async function getEntry(setEntry, id) {
  const result = await client.getEntries({
    content_type: 'artculo',
    'fields.url.sys.contentType.sys.id': 'artculo',
    'fields.url': id,
  })
  return setEntry(mapToArticle(result.items[0]))
}

export async function getCats(setCats) {
  await client
    .getEntries({ content_type: 'gato' })
    .then(entries => entries.items.map(cat => mapToCat(cat, setCats)))
}

export async function getCat(setCat, id) {
  await client
    .getEntries({
      content_type: 'gato',
      'fields.url.sys.contentType.sys.id': 'artculo',
      'fields.url': id,
    })
    .then(entries => entries.items.map(cat => mapToCat(cat, setCat, true)))
}
