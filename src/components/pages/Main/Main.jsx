import React from 'react'
import { MainContainer, Container } from './Main.style'
import PowerButton from '../../PowerButton/PowerButton'
import { LogoComponent } from '../../Logo'
import { SocialIcons } from '../../SocialIcons'

const Main = () => {
  return (
    <MainContainer>
      <Container>
        <PowerButton />
        <LogoComponent />
        <SocialIcons />
      </Container>
    </MainContainer>
  )
}

export default Main
