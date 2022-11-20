import React from 'react'

import { ThemeProvider } from 'styled-components'
import { Box } from './MySkills.style'
import { lightTheme } from '../../Themes'
import { LogoComponent } from '../../Logo'
import { SocialIcons } from '../../SocialIcons'
import { PowerButton } from '../../PowerButton'
import { SkillsBlock } from './index'
import { ParticleComponent } from '../../Particle'

const skills = {
  frontend: {
    name: 'Front-end',
    description:
      'I value business or brand for which i`m creating, thus i enjoy bringing new ideas to life.',
    skills:
      'Html, Css, Js, Ts, React, Vue, Next, Redux, Recoil, Sass, Tailwind, Docker  etc.',
    tools: 'VScode, git, Figma, Photoshop, Avocode, Docker Desktop'
  },
  backend: {
    name: 'Back-end',
    description:
      'I love to create, code, and improve the server, server-side applications, and databases that help create a functional, seamless experience for the end-user.',
    skills:
      'Node.js, Go, Express, Nest, Koa, MongoDB, PostgreSQL, Firebase, TypeORM, sequelize,  AWS, Docker  etc.',
    tools: 'VScode, Postman, pgAdmin, Docker Desktop'
  }
}

export const MySkills = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />
        <SkillsBlock skills={skills.backend} />
        <SkillsBlock skills={skills.frontend} />

        {/*  <BigTitle text="SKILLS" top="80%" right="30%" /> */}
      </Box>
    </ThemeProvider>
  )
}
