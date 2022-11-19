import React from 'react'
import { NavLink } from 'react-router-dom'
import { Facebook, Github, Twitter, YouTube, Linkedin } from '../icons/Icons'
import { SocialContainer } from './SocialIcons.style'
import { darkTheme } from '../Themes'
import { Line } from './SocialIcons.style'
import { links } from './socialLinks'

export const SocialIcons = (props) => {
  return (
    <SocialContainer>
      <div>
        <NavLink target="_blank" to={{ pathname: links.github }}>
          <Github
            width={25}
            height={25}
            fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </div>
      <div>
        <NavLink target="_blank" to={{ pathname: links.linkedin }}>
          <Linkedin
            width={25}
            height={25}
            fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </div>
      <div>
        <NavLink target="_blank" to={{ pathname: links.facebook }}>
          <Facebook
            width={25}
            height={25}
            fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </div>
      <div>
        <NavLink target="_blank" to={{ pathname: links.youtube }}>
          <YouTube
            width={25}
            height={25}
            fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </div>
      <div>
        <NavLink target="_blank" to={{ pathname: links.twitter }}>
          <Twitter
            width={25}
            height={25}
            fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </div>
      <Line
        color={props.theme}
        initial={{
          height: 0
        }}
        animate={{
          height: '8rem'
        }}
        transition={{
          type: 'spring',
          duration: 1,
          delay: 0.8
        }}
      />
    </SocialContainer>
  )
}
