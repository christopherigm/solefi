import { Link } from 'react-router-dom';
import React, { useRef, useEffect } from 'react';
import * as M from 'materialize-css';

const NavBar = (): React.ReactElement => {
  const sideNavRef: any = useRef(null);

  const closeSideNav = () => {
    const sideNav = M.Sidenav.getInstance(sideNavRef.current);
    sideNav.close();
  };

  useEffect(() => {
    M.Sidenav.init(sideNavRef.current, {
      edge: 'left'
    });
  });

  return (
    <>
      <div className='navbar-fixed'>
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
      </div>
      <ul className='sidenav' id='mobile-demo'
        ref={sideNavRef}
        onClick={closeSideNav}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>Acerca</Link>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
