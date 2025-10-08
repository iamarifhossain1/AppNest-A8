import React from 'react';
import '../../../src/App.css'
import logo from '../../assets/app-nest-logo.png'
import gitLogo from '../../assets/github.png'
import { Link, NavLink } from 'react-router';

const NavBar = () => {
    const links = <>
        <Link to='/'><li className='text-lg text-gray-600 mr-4 inter font-medium'>Home</li></Link>
        <Link to='/apps'><li className='text-lg text-gray-600 mr-4 inter font-medium'>Apps</li></Link>
        <Link to='/installation'><li className='text-lg text-gray-600 mr-4 inter font-medium'>Installation</li></Link>
        
        
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm inter lg:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
                    {links}
                </ul>
                </div>
                <a href='/'><img src={logo} alt="" className='w-1/2 h-1/2' /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a href="https://github.com/iamarifhossain1" target='blank' 
                className="flex items-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] btn text-white font-semibold"><span><img src={gitLogo} alt="" /></span> Contribute</a>
            </div>
        </div>
    );
};

export default NavBar;