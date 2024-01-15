import React from 'react'
import '../styles/style.scss'
import avatar from '../materials/ava.gif'
import discord from '../materials/disik.png'
import steam from '../materials/steam.png'
import telegram from '../materials/telega.png'
import github from '../materials/github.png'

export const Header = () => {
  return (
    <div className='header'>
        <img src={avatar} className='avatar' alt='avatar'/>
        <p className='nickName'>Orsted</p>
        <p className='description'>React JS developer</p>
        <p className='description'>14 Years Old</p>
        <p className='description'>Kyiv, Ukraine</p>
        <div className='comps'>
          <img src={discord} onClick={() => window.location = 'https://discord.gg/DHs3vMkYX7'}  className='comp' alt='discord'/>
          <img src={steam} onClick={() => window.location = 'https://steamcommunity.com/id/Krefenchik/'} className='comp' alt='steam'/>
          <img src={telegram} onClick={() => window.location = 'https://t.me/+2jeMR2_jIPBiY2Yy'} className='comp' alt='telegram'/>
          <img src={github} onClick={() => window.location = 'https://github.com/Orstedus'} className='comp' alt='github'/>
        </div>
      </div>
  )
}
