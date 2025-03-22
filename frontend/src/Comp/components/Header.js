import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Search from './Search';

const Header = ({loggedIn,setLoggedIn}) => {

    const [showSearch,setShowSearch] = useState(false)

    const isActiveRoute = (route) => {
        return true;
    };

    const handleLogout = async () => {
        setLoggedIn(false)
        await fetch('/admin/logout')
    }

    return (
        <header className="header">
            <Link to="/" className="header__logo">
                NodeJs
            </Link>

            <nav className="header__nav">
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" onClick={handleLogout}>
                            Logout
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="header__button">
                <button className="searchBtn" aria-expanded="false" onClick={()=>setShowSearch(!showSearch)}>
                    Search
                    <Search showSearch={showSearch} setShowSearch={setShowSearch} />
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.79167 13.4583C10.9213 13.4583 13.4583 10.9213 13.4583 7.79167C13.4583 4.66205 10.9213 2.125 7.79167 2.125C4.66205 2.125 2.125 4.66205 2.125 7.79167C2.125 10.9213 4.66205 13.4583 7.79167 13.4583Z"
                            stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14.875 14.875L11.7938 11.7938" stroke="black" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;
