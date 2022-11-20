import React from 'react'
import { Box, SubBox, Text } from './Intro.style'
import { motion } from 'framer-motion'
import Programmer from '../../assets/Images/meArt.png'

export const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: '55vh' }}
      transition={{ type: 'spring', duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>Hi,</h1>
          <h3>I'm Oleksandr Radchenko.</h3>
          <h6>
            I'm fullstack developer who love to code and learn some new cool
            stuff.
          </h6>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img className="pic" src={Programmer} alt="Profile Pic" />
        </motion.div>
      </SubBox>
    </Box>
  )
}
