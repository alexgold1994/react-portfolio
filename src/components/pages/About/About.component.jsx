import React from 'react'

import { ThemeProvider } from 'styled-components'
import { Box, Spaceman, Main } from './About.style'
import { darkTheme } from '../../Themes'
import { LogoComponent } from '../../Logo'
import { SocialIcons } from '../../SocialIcons'
import { PowerButton } from '../../PowerButton'
import { ParticleComponent } from '../../Particle'
import astronaut from '../../../assets/Images/spaceman.png'

export const About = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />
        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>
        <Main>
          I'm a fullstack developer located in Ukraine. I love to create
          beautiful websites with great user experience.
          <br /> <br />
          I love to improve my front-end, back-end skills and learn some new
          cool stuff like deployment, design, cloud services. Always enjoy to
          work in team and create great projects.
          <br /> <br /> You can connect with me via social links.
        </Main>
      </Box>
    </ThemeProvider>
  )
}
