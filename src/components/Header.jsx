import React from 'react'
import '../styles/style.scss'

export const Header = () => {
  return (
    <div className='header'>
        <img src='../materials/ava.gif' className='avatar' alt='avatar'/>
        <p className='nickName'>Orsted</p>
        <p className='description'>React JS developer</p>
        <p className='description'>14 Years Old</p>
        <p className='description'>Kyiv, Ukraine</p>
        <div className='comps'>
          <img src='../../materials/disik.png' onClick={() => window.location = 'https://discord.gg/DHs3vMkYX7'}  className='comp' alt='discord'/>
          <img src='../../materials/steam.png' onClick={() => window.location = 'https://steamcommunity.com/id/Krefenchik/'} className='comp' alt='steam'/>
          <img src='../../materials/telega.png' onClick={() => window.location = 'https://t.me/+2jeMR2_jIPBiY2Yy'} className='comp' alt='telegram'/>
          <img src='../../materials/github.png' onClick={() => window.location = 'https://github.com/Orstedus'} className='comp' alt='github'/>
        </div>
      </div>
  )
}
