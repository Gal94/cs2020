import React from 'react';
import { Link } from 'react-router-dom'
import './header.styles.scss';

const getWidth = () => {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
};

const Header = () => (
    <div className='header'>
        <div className='wide'>
            <div className='burger-icon' onClick={()=> {
                let links = document.querySelector(".my-links");
                let wideDiv = document.querySelector(".wide");
                if (links.style.display === "block") {
                    links.style.display = "none";
                    wideDiv.style.marginBottom = "3rem";
                    wideDiv.style.height = "70px";
                } else {
                    links.style.display = "block";
                    wideDiv.style.marginBottom = "0";
                    wideDiv.style.height = "50px";
                }
            }}>
                <i className="fas fa-bars fa-2x burger"></i>
            </div>

            <div className='options'>
                <Link to='/' className='option'><i className="fas fa-home"></i></Link>
                <Link to='/first-year' className='option'>שנה א'</Link>
                <Link to='/second-year' className='option'>שנה ב'</Link>
                <Link to='/third-year' className='option'>שנה ג'</Link>
                <Link to='/optional-modules' className='option'>קורסי בחירה</Link>
                <Link to='/general-modules' className='option'>קורסי תשתית</Link>
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
//add logo link at the start
export default Header;