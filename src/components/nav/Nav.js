import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineSolution} from 'react-icons/ai'
import {FiAward} from 'react-icons/fi'
import {AiFillMessage} from 'react-icons/ai'
import {BiBookBookmark} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {

    const [activeNav, setActiveNav] = useState('#')


    return (
        <nav>
            <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} ><AiOutlineHome/></a>
            <a href='#about' onClick={() => setActiveNav('about')} className={activeNav === 'about' ? 'active' : ''}><AiOutlineSolution/></a>
            <a href='#experience'onClick={() => setActiveNav('experience') } className={activeNav === 'experience' ? 'active' : ''}><FiAward/></a>
            <a href='#portfolio' onClick={() => setActiveNav('portfolio')} className={activeNav === 'portfolio' ? 'active' : ''}><BiBookBookmark /></a>
            <a href='#contact' onClick={() => setActiveNav('contact')} className={activeNav === 'contact' ? 'active' : ''}><AiFillMessage/></a>

        </nav>
    )
}

export default Nav;