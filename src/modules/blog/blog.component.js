import React, { useState, useEffect } from 'react'
import ArticleList from './article-list.blog.component'
import Helmet from 'react-helmet'

// @TODO: remove mock
// import articles from './mock.articles'
import { getEntries } from '../contentful/contentful.service'
import BlogFilter from './blog-filter.component'

export default function Blog({ className }) {
  const [state, setState] = useState({ articles: [], searchText: '' })

  useEffect(() => {
    const entries = getEntries(setState)
    return () => entries
  }, [])

  return (
    <div className={className}>
      <Helmet>
        <title>SOS Felina Felinae | Blog</title>
        <meta
          name="Description"
          content="Noticias sobre gatos en adopción y campañas de emergencia"
        />
      </Helmet>
      <h1>Blog</h1>
      <BlogFilter searchText={state.searchText} onChangeFilter={setState} />
      <ArticleList articles={state.articles} filter={state.searchText} />
    </div>
  )
}
