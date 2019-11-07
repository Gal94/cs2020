import React from 'react';
import { Link } from 'react-router-dom'
import './header.styles.scss';


const Header = () => (
    <div className='header'>
        <div className='wide'>
            <div className='burger-icon' onClick={() => {
                document.querySelector(".my-links").classList.toggle('show');
                document.querySelector(".wide").classList.toggle('short');
            }
            }>
                <i className="fas fa-bars fa-2x burger"></i>
            </div>

            <div className='options'>
                <div class="home_logo">
                    <Link to='/'><i className="fas fa-home"></i></Link>
                </div>
                <div class="links">
                    <Link to='/first-year' className='option'>שנה א'</Link>
                    <Link to='/second-year' className='option'>שנה ב'</Link>
                    <Link to='/third-year' className='option'>שנה ג'</Link>
                    <Link to='/optional-modules' className='option'>קורסי בחירה</Link>
                    <Link to='/general-modules' className='option'>קורסי תשתית</Link>
                </div>
                <div class="dummy_div"></div>
            </div>
        </div>

        <div className='my-links'>
            <div className='ham-div'><Link to='/' className='ham-option'>דף ראשי</Link></div>
            <div className='ham-div'><Link to='/first-year' className='ham-option'>שנה א'</Link></div>
            <div className='ham-div'><Link to='/second-year' className='ham-option'>שנה ב'</Link></div>
            <div className='ham-div'><Link to='/third-year' className='ham-option'>שנה ג'</Link></div>
            <div className='ham-div'><Link to='/optional-modules' className='ham-option'>קורסי בחירה</Link></div>
            <div className='ham-div'><Link to='/general-modules' className='ham-option'>קורסי תשתית</Link></div>
        </div>
    </div>
);
export default Header;