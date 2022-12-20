import React from 'react';
import './Header.css'
import {FaGithub, FaLinkedin} from 'react-icons/fa'

const Header = () => {
    const navItems = <>
    <li className=' text-[#666666] text-xl'><a href='/'>Home</a></li>
    <li  className=' text-[#666666] text-xl'><a href='#about-me'>About</a></li>
    <li  className=' text-[#666666] text-xl'><a href='#tech-stack'>Skill</a></li>
    <li  className=' text-[#666666] text-xl'><a href='#projects'>Projects</a></li>
    <li  className=' text-[#666666] text-xl'><a href='#contact'>Contact</a></li>
    <li  className=' text-[#666666] text-xl'><a href='https://github.com/AzadHossenMasud' target='_blank'><FaGithub></FaGithub></a></li>
    <li  className=' text-[#666666] text-xl'><a href='https://www.linkedin.com/in/azad-hossen-65b88b186/' target='_blank'><FaLinkedin></FaLinkedin></a></li>

        
    </>
    return (
        <div className="navbar bg-base-100 h-16">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {navItems}
      </ul>
    </div>
    <a href='/' className="btn btn-ghost normal-case text-3xl font-bold header-logo">{`{AZAD}`}</a>
  </div>
  <div className="navbar-center hidden lg:flex float-right">
    <ul className="menu menu-horizontal p-0">
      {navItems}
    </ul>
  </div>
  {/* <div className="navbar-end">
    <a className="btn">Get started</a>
  </div> */}
</div>
    );
};

export default Header;