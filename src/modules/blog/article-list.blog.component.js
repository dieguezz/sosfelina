import React from 'react'
import ArticleItem from './ui/article-item.blog.ui'

export default function ArticleList({ articles, filter }) {
  return (
    (articles.length > 0 &&
      articles
        .filter(({ title, shortText }) =>
          filter
            ? title.toLowerCase().indexOf(filter) > -1 ||
              shortText.toLowerCase().indexOf(filter) > -1
            : true,
        )
        .map(({ id, shortText, title, url }) => (
          <ArticleItem key={id} title={title} text={shortText} url={url} />
        ))) || <div />
  )
}
