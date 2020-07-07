import React from 'react'
import Link from '../Link/link.component'

export default function CatList({ cats, className }) {
  const catList = cats.map(({ name, id, picture, alt, url, category }) => (
    <li key={id} className={className}>
      {category && <p>Caso especial</p>}
      <h2>{name}</h2>
      <img src={picture} alt={alt} />
      <Link type="button" noborder="true" to={`/adopta/${url}`}>
        Más información
      </Link>
    </li>
  ))
  return <React.Fragment>{catList}</React.Fragment>
}
