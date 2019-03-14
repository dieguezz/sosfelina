import React from 'react'
import Link from '../Link/link.component'

export default function CatList({ cats, className }) {
  const catList = cats
    .sort((a, b) => (b.date < a.date ? -1 : 1))
    .map(({ name, id, picture, alt, url }) => (
      <li key={id} className={className}>
        <h2>{name}</h2>
        <img src={picture} alt={alt} />
        <Link type="button" noborder="true" to={`/adopta/${url}`}>
          Más información
        </Link>
      </li>
    ))
  return <React.Fragment>{catList}</React.Fragment>
}
