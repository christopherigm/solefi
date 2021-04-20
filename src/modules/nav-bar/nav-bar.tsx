import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import * as M from 'materialize-css';

const NavBar = () => {

  useEffect(() => {
    M.AutoInit();
  });

  return (
    <>
      <nav>
        <div className='nav-wrapper'>
          <a href='#' className='brand-logo'>Logo</a>
          <a href='#' data-target='mobile-demo' className='sidenav-trigger'>
            <i className='material-icons'>menu</i>
          </a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>Acerca</Link>
            </li>
          </ul>
        </div>
      </nav>
      <ul className='sidenav' id='mobile-demo'>
        <li><a href="/">Home</a></li>
        <li><a href="/about">Acerca</a></li>
      </ul>
    </>
  );
};

export default NavBar;
