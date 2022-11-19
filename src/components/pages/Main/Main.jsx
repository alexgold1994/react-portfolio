import React from 'react'
import { MainContainer, Container } from './Main.style'
import PowerButton from '../../PowerButton/PowerButton'
import { LogoComponent } from '../../Logo'

const Main = () => {
  return (
    <MainContainer>
      <Container>
        <PowerButton />
        <LogoComponent />
      </Container>
    </MainContainer>
  )
}

export default Main
