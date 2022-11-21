import React, { useRef, useEffect } from 'react'

import { ThemeProvider } from 'styled-components'
import { darkTheme } from '../../Themes'
import { LogoComponent } from '../../Logo'
import { SocialIcons } from '../../SocialIcons'
import { PowerButton } from '../../PowerButton'
import { Box, Main, Rotate } from './Works.style'
import { Work } from '../../../data/WorkData'
import { YinYang } from '../../icons/Icons'
import { BigTitle } from '../../BigTitle'
import { Card } from '../../Card'

const animationConfig = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5
    }
  }
}

export const Works = () => {
  const ref = useRef(null)
  const yinyang = useRef(null)

  useEffect(() => {
    let element = ref.current

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`

      return (yinyang.current.style.transform =
        'rotate(' + -window.pageYOffset + 'deg)')
    }

    window.addEventListener('scroll', rotate)
    return () => {
      window.removeEventListener('scroll', rotate)
    }
  }, [])

  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />

        <Main
          ref={ref}
          variants={animationConfig}
          initial="hidden"
          animate="show"
        >
          {Work.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>
        <Rotate ref={yinyang}>
          <YinYang width={80} height={80} fill={darkTheme.text} />
        </Rotate>

        <BigTitle text="WORK" top="10%" right="20%" />
      </Box>
    </ThemeProvider>
  )
}
