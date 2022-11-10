import React, { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#wgpt3">What is GPT-3</a></p>
  <p><a href="#features">Case Studies</a></p>
  <p><a href="#possibility">OpenAI</a></p>
  <p><a href="#blog">Library</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToogleMenu] = useState(false);
  return (
    <div className="gpt3_navbar">
        <div className="gpt3_navbar_links">
            <div className="gpt3_navbar_links_logo">
              <img src={logo} alt="GPT-3 Logo" />
            </div>
            <div className="gpt3_navbar_links_container">
              <Menu />
            </div>
        </div>
        <div className="gpt3_navbar_sign">
          <p>Sign in</p>
          <button>Sign Up</button>
        </div>
        <div className="gpt3_navbar_menu">
          {toggleMenu
            ? <RiCloseLine color="#FFFFFF" size={27} onClick={() => setToogleMenu(false)}/>
            : <RiMenu3Line color="#FFFFFF" size={27} onClick={() => setToogleMenu(true)}/>
          }
          {toggleMenu && (
            <div className="gpt3_navbar_menu_container scale-up-center">
              <div className="gpt3_navbar_menu_container_links">
                <Menu />
              </div>
              <div className="gpt3_navbar_menu_container_links_sign">
                <p>Sign in</p>
                <button>Sign Up</button>
              </div>
            </div>
          )}
        </div>
    </div>
  );
};

export default Navbar