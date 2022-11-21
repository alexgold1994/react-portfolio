import React from 'react'
import { Text } from './BigTitle.style'

export const BigTitle = (props) => {
  return (
    <Text top={props.top} left={props.left} right={props.right}>
      {props.text}
    </Text>
  )
}
