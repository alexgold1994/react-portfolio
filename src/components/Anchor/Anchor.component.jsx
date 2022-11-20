import React, { useRef, useEffect } from 'react'
import { Anchor, Link } from '../icons/Icons'
import { Container, Slider, PreDisplay } from './Anchor.style'

export const AnchorComponent = (props) => {
  const ref = useRef(null)
  const hiddenRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      let scrollPosition = window.pageYOffset
      let windowSize = window.innerHeight
      let bodyHeight = document.body.offsetHeight

      let diff = Math.max(bodyHeight - (scrollPosition + windowSize))
      //diff*100/scrollposition
      let diffP = (diff * 100) / (bodyHeight - windowSize)

      ref.current.style.transform = `translateY(${-diffP}%)`

      if (window.pageYOffset > 5) {
        hiddenRef.current.style.display = 'none'
      } else {
        hiddenRef.current.style.display = 'block'
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Container>
      <PreDisplay ref={hiddenRef} className="hidden">
        <Anchor width={70} height={70} fill="currentColor" />
      </PreDisplay>
      <Slider ref={ref}>
        {[...Array(props.number)].map((x, id) => {
          return (
            <Link
              key={id}
              width={25}
              height={25}
              fill="currentColor"
              className="chain"
            />
          )
        })}
        <Anchor width={70} height={70} fill="currentColor" />
      </Slider>
    </Container>
  )
}
