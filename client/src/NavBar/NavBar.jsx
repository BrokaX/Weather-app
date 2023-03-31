import React, {useState} from 'react'
import logo from '../assets/logo.png';
import menu from '../assets/icons/menu.png';
import map from '../assets/icons/map.png';
import './NavBar.css'
function NavBar() {
  const [closeClass, setCloseClass] = useState('sidebar-closed');


   function openNav(){
     if (closeClass === 'sidebar-open') {
       setCloseClass('sidebar-closed');
     } else {
       setCloseClass('sidebar-open');
     }
   }
   
  return (
    <div className='Navbar-container'>
      <nav className='nav'>
        <ul className={closeClass}>
          <div className='app-logo'>
            <img className='' src={logo} alt='Broka-X logo' />
          </div>
          <i className='closebtn' onClick={openNav}>
            x
          </i>
          <li>Athens</li>
          <li>New York</li>
          <li>London</li>
          <li>Abu Dhabi</li>
          <li>Dubai</li>
          <li>Berlin</li>
          <li>Moscow</li>
          <li>Minsk</li>
          <li>Astana</li>
        </ul>
        <div className='main-menu'>
          <div className='app-logo '>
            <img className='' src={logo} alt='brokaX logo' />
          </div>
          <img className='menu-icon' onClick={openNav} src={menu} alt='' />
          <img className='menu-icon' onClick={openNav} src={map} alt='' />
        </div>
      </nav>
    </div>
  );
}

export default NavBar