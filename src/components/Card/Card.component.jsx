import React from 'react'
import {
  Box,
  Title,
  Description,
  Tags,
  Footer,
  Link,
  Git,
  Tag
} from './Card.style'
import { Github } from '../icons/Icons'

const ItemAnimationConfig = {
  hidden: {
    scale: 0
  },
  show: {
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.5
    }
  }
}

export const Card = (props) => {
  const { id, name, description, tags, demo, github } = props.data

  return (
    <Box key={id} variants={ItemAnimationConfig}>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Tags>
        {tags.map((t, id) => {
          return <Tag key={id}>#{t}</Tag>
        })}
      </Tags>
      <Footer>
        <Link to={{ pathname: `${demo}` }} target="_blank">
          Visit
        </Link>
        <Git to={{ pathname: `${github}` }} target="_blank">
          <Github width={30} height={30} />
        </Git>
      </Footer>
    </Box>
  )
}
