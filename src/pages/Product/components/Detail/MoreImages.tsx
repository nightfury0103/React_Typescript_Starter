import React, { useState, useCallback } from 'react'
import ImageViewer from 'react-simple-image-viewer'

import { Images, GalleryImages } from '@root/constants'

const MoreImages: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)

  const openImageViewer = useCallback(index => {
    setCurrentImage(index)
    setIsViewerOpen(true)
  }, [])

  const closeImageViewer = useCallback(() => {
    setCurrentImage(0)
    setIsViewerOpen(false)
  }, [])

  return (
    <div className="more-img">
      {Images.map((item, index) => (
        <a
          key={index}
          data-fancybox="gallery"
          onClick={() => openImageViewer(index)}
        >
          <span>
            <img src={item.url} alt="" />
          </span>
        </a>
      ))}
      {isViewerOpen && (
        <ImageViewer
          src={GalleryImages}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={false}
          closeOnClickOutside={true}
        />
      )}
    </div>
  )
}

export default MoreImages
