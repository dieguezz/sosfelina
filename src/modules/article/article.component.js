import React, { useState, useEffect } from 'react'
import { getEntry } from '../contentful/contentful.service'
import Helmet from 'react-helmet'
import SocialShare from '../social-share/social-share.ui'
import StructuredData from '../structured-data/structured-data.component'
import Spinner from '../spinner/spinner.ui'

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
        <link rel="canonical" href={`https://sosfelinafelinae.es/blog/${match.params.id}`} />
        <meta name="Description" content={shortText} />
        <meta name="description" content={shortText} />
        <meta property="article:published_time" content={date} />
        <meta property="article:author" content="https://twitter.com/FelinaFelinae" />
        <meta property="article:tag" content="gatos" />
        <meta property="article:tag" content="adopta" />
        <meta property="og:title" content={`SOS Felina Felinae | ${title}`} />
        <meta property="og:description" content={shortText} />
        <meta
          property="og:image"
          content="https://images.ctfassets.net/qhgwkj3lu81s/4FzHhePlYHF9CWxs2daloM/7d1969fa583323b97177dd7672cad5f7/SOS-FELINA-Felinae__1___1_.jpg?h=250"
        />
        <meta
          property="og:image:secure_url"
          content="https://images.ctfassets.net/qhgwkj3lu81s/4FzHhePlYHF9CWxs2daloM/7d1969fa583323b97177dd7672cad5f7/SOS-FELINA-Felinae__1___1_.jpg?h=250"
        />
        <meta property="og:image:alt" content="SOS Felina Felinae | Asociación protectora felina" />
        <meta property="og:image:width" content="197" />
        <meta property="<:height" content="250" />
      </Helmet>
      <header>
        <h1>{title}</h1>
      </header>
      {cuerpo ? (
        <div className="body">{cuerpo}</div>
      ) : (
        <div className="spinner">
          <Spinner />
        </div>
      )}
      <SocialShare url={match.url} />
      <StructuredData title={title} description={shortText} date={date} />
    </div>
  )
}
