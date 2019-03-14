import React from 'react'

export default function BlogFilter({ searchText, onChangeFilter }) {
  return (
    <div className="search">
      <input
        type="text"
        value={searchText}
        onChange={e => {
          const value = e.target.value
          onChangeFilter(state => ({ ...state, searchText: value }))
        }}
        placeholder="Buscar"
      />
    </div>
  )
}
