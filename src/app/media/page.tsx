import React from 'react'
import page from '../page'
import Gallery from '@/components/gallery'
import Virtual from '@/components/virtual'
import VideosPage from '../videos/page'


function MediaPage() {
  return (
    <div className='container mx-auto px-6 py-16'>
      {/* <Gallery/> */}
      <VideosPage/>
    </div>
  )
}

export default MediaPage