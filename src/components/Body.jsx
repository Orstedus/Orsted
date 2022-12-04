import React from 'react'
import '../styles/style.scss'
import orstedImg from '../sitesTemplates/orstedSite.png'
import popoImg from '../sitesTemplates/popoSite.png'
import tipImg from '../sitesTemplates/tipSite.png'
import calcImg from '../sitesTemplates/calcSite.png'

const Body = () => {

    const sites = [{title:'Orsted', desc:'Main website with my projects', template:orstedImg, link:'', id:0},
                    {title:'Tip-Calculator', desc:'Calculator of tips made with React JS', link:'https://github.com/Orstedus/Tip-calculator', template:tipImg, id:1},
                    {title:'Calculator', desc:'Simple calculator with dark interface', link:'https://github.com/Orstedus/Calculator_TufTuf', template:calcImg, id:2},
                    {title:'PoPo', desc:'Clicker, made with HTML, CSS, JS only', link:'https://github.com/Orstedus/PoPo', template:popoImg, id:3},
                    ]

  return (
    <div className='Body'>

        <p className='themeTitle'>Projects</p>
        <div className='templateBox'>
            {sites.map((e)=>
                <div className='template' key={e.id}>
                    <img src={e.template} className='contImg' alt='template'/>
                    <p className='title'>{e.title}</p>
                    <p className='desc'>{e.desc}</p>
                    <button onClick={() => window.location = e.link}>View</button>
                </div>
            )
            }
        </div>
      </div>
  )
}

export default Body