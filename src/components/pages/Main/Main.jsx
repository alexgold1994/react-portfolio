import React, { useState } from 'react'
import {
  MainContainer,
  Container,
  Contact,
  Blog,
  Work,
  BottomBar,
  About,
  Skills,
  Center,
  DarkSide
} from './Main.style'
import PowerButton from '../../PowerButton/PowerButton'
import { LogoComponent } from '../../Logo'
import { SocialIcons } from '../../SocialIcons'
import { motion } from 'framer-motion'
import { routes } from '../../../routing/routes'
import { YinYang } from '../../icons/Icons'
import { Intro } from '../../Intro'

const Main = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <MainContainer>
      <Container>
        <DarkSide click={click}></DarkSide>
        <Center click={click} onClick={() => handleClick()}>
          <YinYang
            width={click ? 120 : 200}
            height={click ? 120 : 200}
            fill="currentColor"
          />
          <span>click here</span>
        </Center>

        <PowerButton />
        <LogoComponent theme={click ? 'dark' : 'light'} />
        <SocialIcons theme={click ? 'dark' : 'light'} />

        <Contact
          target="_blank"
          to={{ pathname: 'https://t.me/A1exRadchenko' }}
        >
          <motion.h2
            initial={{
              y: -200,
              transition: { type: 'spring', duration: 1.5, delay: 1 }
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1 }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Contact me
          </motion.h2>
        </Contact>
        <Blog to={routes.blog.absolute()}>
          <motion.h2
            initial={{
              y: -200,
              transition: { type: 'spring', duration: 1.5, delay: 1 }
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1 }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Blog
          </motion.h2>
        </Blog>
        <Work to={routes.works.absolute()} click={+click}>
          <motion.h2
            initial={{
              y: -200,
              transition: { type: 'spring', duration: 1.5, delay: 1 }
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1 }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Works
          </motion.h2>
        </Work>
        <BottomBar>
          <About to={routes.about.absolute()} click={+click}>
            <motion.h2
              initial={{
                y: 200,
                transition: { type: 'spring', duration: 1.5, delay: 1 }
              }}
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 1 }
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              About
            </motion.h2>
          </About>
          <Skills to={routes.skills.absolute()}>
            <motion.h2
              initial={{
                y: 200,
                transition: { type: 'spring', duration: 1.5, delay: 1 }
              }}
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 1 }
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              My Skills
            </motion.h2>
          </Skills>
        </BottomBar>
      </Container>
      {click && <Intro />}
    </MainContainer>
  )
}

export default Main
