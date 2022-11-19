import styled from 'styled-components'
import { darkTheme } from '../Themes'

export const Logo = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === 'dark' ? darkTheme.text : darkTheme.body};
  font-family: 'Pacifico', cursive;
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`
