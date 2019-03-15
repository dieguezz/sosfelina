import React, { useState, useEffect } from 'react'
import { getEntry } from '../contentful/contentful.service'
import Helmet from 'react-helmet'
import SocialShare from '../social-share/social-share.ui'

export default function Article({ match, className }) {
  const [{ title, cuerpo, shortText }, setEntry] = useState({})
  useEffect(() => {
    const result = getEntry(setEntry, match.params.id)
    return () => result
  }, [])

  return (
    <div className={className}>
      <Helmet>
        <title>SOS Felina Felinae | {`${title}`}</title>
        <meta name="Description" content={shortText} />
        <meta
          name="image"
          content="https://sosfelina.z6.web.core.windows.net/static/media/logo.846aa2e2.png"
        />
      </Helmet>
      <header>
        <h1>{title}</h1>
      </header>
      {cuerpo}
      <SocialShare ulr={match.url} />
    </div>
  )
}
