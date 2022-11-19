import styled from 'styled-components'
import { motion } from 'framer-motion'
import { darkTheme } from '../Themes'

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;
  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`
export const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === 'dark' ? darkTheme.text : darkTheme.body};
`
