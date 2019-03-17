import React, { useState, useEffect } from 'react'
import { getEntry } from '../contentful/contentful.service'
import Helmet from 'react-helmet'
import SocialShare from '../social-share/social-share.ui'
import StructuredData from '../structured-data/structured-data.component'

export default function Article({ match, className }) {
  const [{ title, cuerpo, shortText, date }, setEntry] = useState({})
  useEffect(() => {
    const result = getEntry(setEntry, match.params.id)
    return () => result
  }, [])

  return (
    <div className={className}>
      <Helmet>
        <title>SOS Felina Felinae | {`${title}`}</title>
        <meta name="Description" content={shortText} />
        <meta property="article:published_time" content={date} />
        <meta property="article:author" content="https://twitter.com/FelinaFelinae" />
        <meta property="article:tag" content="gatos" />
        <meta property="article:tag" content="adopta" />
      </Helmet>
      <header>
        <h1>{title}</h1>
      </header>
      {cuerpo}
      <SocialShare url={match.url} />
      <StructuredData title={title} description={shortText} date={date} />
    </div>
  )
}
