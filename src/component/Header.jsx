import React from 'react'
import {BsFillBellFill , BsFillEnvelopeFill , BsPersonCircle , BsSearch , BsJustify} from 'react-icons/bs'
function Header({openside}) {
  return (
    <header className='head'>
        <div className='icon'>
            <BsJustify className='icon' onClick={openside}/>
        </div>
        <div className='head-left'>
            <BsSearch className='icon'/>
        </div> 
        <div className='head-right'>
            <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className='icon'/>
        </div>

    </header>
  )
}

export default Header
