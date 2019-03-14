import React from 'react'
import Link from '../Link/link.component'

export default function ArticleItem({ title, text, className, url }) {
  return (
    <div className={className}>
      <header>
        <h1>{title}</h1>
      </header>
      <p>{text}</p>
      <Link type="button" to={`/blog/${url}`}>
        Seguir leyendo
      </Link>
    </div>
  )
}
