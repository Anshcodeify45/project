import React from 'react'
import { BsCart3 ,BsFillGrid1X2Fill, BsFillArchiveFill , BsFillGrid3X3GapFill,BsPeopleFill,BsListCheck,BsMenuButtonWideFill,BsFillGearFill } from 'react-icons/bs'
function Side({opensidebar,openside}) {
  return (
    <aside id='sidebar' className={opensidebar ? "response": ""}>
        <div className='side-title'>
            <div className='brand'>
                <BsCart3 className='icon_header'/>Store
            </div>
            <span className='close_icon' onClick={openside}><i class="fa-solid fa-xmark"></i></span>

        </div>

        <ul className='side-list'>
                <li className='list-itm'>
                    <a href="">
                        <BsFillGrid1X2Fill className='icon'/>Dashboard
                    </a>
                </li>

                <li className='list-itm'>
                    <a href="">
                        <BsFillArchiveFill  className='icon'/>Product
                    </a>
                </li>

                <li className='list-itm'>
                    <a href="">
                        <BsFillGrid3X3GapFill className='icon'/> Categories
                    </a>
                </li>

                <li className='list-itm'>
                    <a href="">
                        < BsPeopleFill className='icon'/>Customers
                    </a>
                </li>

                <li className='list-itm'>
                    <a href="">
                        < BsListCheck className='icon'/> Inventory
                    </a>
                </li>

                <li className='list-itm'>
                    <a href="">
                        < BsMenuButtonWideFill className='icon'/> Reports
                    </a>
                </li>

                <li className='list-itm'>
                    <a href="">
                        <BsFillGearFill  className='icon'/> Settings
                    </a>
                </li>
            </ul>
    </aside>
  )
}

export default Side
