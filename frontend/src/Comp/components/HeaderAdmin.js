import React from 'react' 

const HeaderAdmin = () =>{
    return (
        <header className="header">
            <a href="/admin" className="header__logo">Admin Panel</a>

            <nav className="header__nav">
                <ul>
                    <li>
                        <a href="/" className="">Home</a>
                    </li>
                    <li>
                        <a href="/about" className="">About</a>
                    </li>
                    <li>
                        <a href="/contact" className="">Contact</a>
                    </li>
                    <li>
                        <a href="/login" className="">Logout</a>
                    </li>
                </ul>

            </nav>

            <div className="header__button">
                <a href="/logout">
                    Logout
                </a>
            </div>

        </header>
    )
}

export default HeaderAdmin;
