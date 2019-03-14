import React from 'react'

export default function GalleryFilter({ onSelectFilter, className }) {
  return (
    <div className={className}>
      <p>Ordenar por: </p>
      <select
        name="cat-filter"
        onChange={e => {
          const value = e.target.value
          return onSelectFilter(state => ({ ...state, sortBy: value }))
        }}>
        <option value="name">Nombre</option>
        <option value="age">Edad</option>
      </select>
    </div>
  )
}
