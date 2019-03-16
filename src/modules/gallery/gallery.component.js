import React from 'react'

// @TODO: Remove mock
import CatList from './cat-list.ui'
// import GalleryFilter from './ui/filtes.adopta.ui'

export default function Gallery({ className, cats }) {
  return (
    <div className={className}>
      {/* <GalleryFilter onSelectFilter={setState} /> */}
      <ol>
        <CatList cats={cats} />
      </ol>
    </div>
  )
}
