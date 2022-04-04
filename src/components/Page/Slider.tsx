import React, { useCallback } from 'react'
import classnames from 'classnames'

import { GroupImage } from '@root/types'

interface Props {
  imgItems: GroupImage
}

const Slider: React.FC<Props> = ({ imgItems }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const activeSlide = imgItems.map((item, index) => (
    <img src={item.url} alt="" key={index} />
  ))

  const onClickPrev = useCallback(() => {
    if (currentSlide === 0) {
      setCurrentSlide(0)
    } else {
      setCurrentSlide(
        (currentSlide - 1 + activeSlide.length) % activeSlide.length,
      )
    }
  }, [activeSlide.length, currentSlide])

  const onClickNext = useCallback(() => {
    if (currentSlide === activeSlide.length - 1) {
      setCurrentSlide(activeSlide.length - 1)
    } else {
      setCurrentSlide((currentSlide + 1) % activeSlide.length)
    }
  }, [activeSlide.length, currentSlide])

  return (
    <div className="slider-box swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-rtl">
      <div className="swiper-wrapper">{activeSlide}</div>

      <div
        className={classnames(
          'swiper-button-prev',
          !Boolean(currentSlide) && 'disabled-button',
        )}
        onClick={onClickPrev}
      >
        <span className="icon-down"></span>
      </div>
      <div
        className={classnames(
          'swiper-button-next',
          currentSlide === activeSlide.length - 1 && 'disabled-button',
        )}
        onClick={onClickNext}
      >
        <span className="icon-down"></span>
      </div>
    </div>
  )
}

export default Slider
