import React from 'react'

// @TODO: Remove mock
import CatList from './ui/cat-list.adopta.ui'
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
