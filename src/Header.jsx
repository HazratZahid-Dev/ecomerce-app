import React from 'react'
import {Link} from 'react-router-dom'

const Women = () => {
  return (
    <>
       
        <nav>
            <ul>
                <li ><Link to='/'>Women</Link></li>
                <li ><Link to='/men'>Men</Link></li>
                <li ><Link to='/product'>Prodcut</Link></li>
               
            </ul>
        </nav>
    </>
  )
}

export default Women