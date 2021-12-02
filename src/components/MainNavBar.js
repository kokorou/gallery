import { Link } from 'react-router-dom';
import '../CSS/MainNavbar.css'

const MainNavbar =() =>{
    return (
        <header>
            <div class="logo">Gallery</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Main</Link>
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
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavbar