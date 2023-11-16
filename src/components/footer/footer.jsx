import React from 'react'
import './footer.css'
import navigation from './navigation'

export default function Footer() {
  return (
    <div className='main footer flex'>
        {
          navigation.map((nav) => {
            return (
              <div className='footer-column'>
                  <h1 className='title-text'>{nav.title}</h1>
                  <ul>
                      {
                        nav.links.map(nav => {
                          return (
                               <li className='link'><a className="link" href={nav.href}>{nav.name}</a></li>
                          )
                        })
                      }
                  </ul>
               </div>
            )
          })
        }
        <div className="footer" style={{background:"transparent"}}>
           <div>
              <h1 className='title-text'>Newsletter</h1>
              <p className='body-text' style={{color:"#ccc"}}>Stay up to date with our latest news</p>
              <div className='flex'>
                  <input type='text' className='input' />
                  <button className='nl-submit'>Go!</button>
              </div>
           </div>
        </div>
    </div>
  )
}
