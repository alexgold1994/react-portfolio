import React from 'react'
import { Box } from './Particle.style'
import Particles from 'react-particles-js'

import particlesLight from '../../config/particlesjs-config-light.json'
import particlesDark from '../../config/particlesjs-config.json'

export const ParticleComponent = (props) => {
  return (
    <Box>
      <Particles
        style={{ position: 'absolute', top: 0 }}
        params={props.theme === 'light' ? particlesLight : particlesDark}
      />
    </Box>
  )
}
