import React, { useState, useEffect } from 'react'
import { MainContainer, Container, Center, Grid } from './Blog.style'
import { LogoComponent } from '../../Logo'
import { PowerButton } from '../../PowerButton'
import { SocialIcons } from '../../SocialIcons'
import { BlogItem } from './index'
import { Blogs } from '../../../data/BlogData'
import { AnchorComponent } from '../../Anchor'

// Framer-motion config
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5
    }
  }
}

export const Blog = () => {
  const [numbers, setNumbers] = useState(0)

  useEffect(() => {
    let num = (window.innerHeight - 70) / 30
    setNumbers(parseInt(num))
  }, [])

  return (
    <MainContainer
      variants={container}
      initial="hidden"
      animate="show"
      exit={{
        opacity: 0,
        transition: { duration: 0.5 }
      }}
    >
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
        <AnchorComponent number={numbers} />
        <Center>
          <Grid>
            {Blogs.map((blog) => {
              return <BlogItem key={blog.id} blog={blog} />
            })}
          </Grid>
        </Center>
        {/* <BigTitle text="BLOG" top="5rem" left="5rem" /> */}
      </Container>
    </MainContainer>
  )
}
