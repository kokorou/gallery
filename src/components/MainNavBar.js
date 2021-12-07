import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../CSS/MainNavbar.css'
import {MdMenu } from 'react-icons/md';

const MainNavbar =() =>{

    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

    return (
        <header>
            <div class="logo">Gallery</div>
            <nav>
                {(toggleMenu || screenWidth > 800) && (
                <ul>
                    <li>
                        <Link to='/'>Classic</Link>
                    </li>
                    <li>
                        <Link to='/timeline'>Timeline</Link>
                    </li>
                    <li>
                        <Link to='/vlog'>Vlog</Link>
                    </li>
                    <li>
                        <Link to='/track'>Track</Link>
                    </li>
                    <li>
                        <Link to='/collection'>Collection</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
                )}
                <button onClick={toggleNav} className="btn"><MdMenu/></button>
            </nav>
        </header>
    )
}

export default MainNavbar