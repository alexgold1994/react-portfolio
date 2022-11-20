import React from 'react'
import {
  Box,
  Image,
  Title,
  HashTags,
  Tag,
  Date,
  Container,
  ImgLink
} from './BlogItem.style'

const motionConfiguration = {
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
const imgLink =
  'https://www.freepik.com/free-vector/application-programming-interface-concept-illustration_25625375.htm#query=programming&position=3&from_view=keyword'

export const BlogItem = (props) => {
  const { name, tags, date, imgSrc, link } = props.blog
  return (
    <Container variants={motionConfiguration}>
      <Box target="_blank" to={{ pathname: link }}>
        <Image img={imgSrc} />
        <Title>{name}</Title>
        <ImgLink target="_blank" to={{ pathname: imgLink }}>
          {' '}
          Image by storyset on Freepik{' '}
        </ImgLink>

        <HashTags>
          {tags.map((t, id) => {
            return <Tag key={id}>#{t}</Tag>
          })}
        </HashTags>
        <Date>
          {date}
          on Freepik
        </Date>
      </Box>
    </Container>
  )
}
