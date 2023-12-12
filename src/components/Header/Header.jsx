import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-2'>
                        <div className='logo'>
                           <Link to='/'>P332.AZ</Link>
                        </div>
                    </div>
                    <div className='col-lg-10'>
                        <nav>
                          <Link to='/'>Ana Sehife</Link>
                          <Link to='/products'> Products</Link>
                          <Link to='/about'> About</Link>
                        </nav>
                    </div>
                    <div></div>
                </div>
            </div>
        </header>
    )
}

export default Header