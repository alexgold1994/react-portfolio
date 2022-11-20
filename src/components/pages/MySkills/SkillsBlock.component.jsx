import React from 'react'
import { Main, Title, Description } from './MySkills.style'
import { Develope } from '../../icons/Icons'

export const SkillsBlock = (props) => {
  console.log(props)
  const { description, skills, tools, name } = props.skills
  return (
    <Main>
      <Title>
        <Develope width={40} height={40} /> {name} Developer
      </Title>
      <Description>{description}</Description>
      <Description>
        <strong>Skills</strong>
        <p>{skills}</p>
      </Description>
      <Description>
        <strong>Tools</strong>
        <p>{tools}</p>
      </Description>
    </Main>
  )
}
