import { Link } from 'react-router-dom';
import React, { useRef, useEffect } from 'react';
import * as M from 'materialize-css';
import { useSelector } from 'react-redux';
import 'src/modules/nav-bar/nav-bar.scss';

const NavBar = (): React.ReactElement => {
  const sideNavRef: any = useRef(null);
  const platformOptions = useSelector((state: any) => state.platformOptions);

  const closeSideNav = () => {
    const sideNav = M.Sidenav.getInstance(sideNavRef.current);
    sideNav.close();
  };

  const textThemeClasses = platformOptions.darkMode ? 'white-text' : ' grey-text text-darken-4';

  useEffect(() => {
    M.Sidenav.init(sideNavRef.current, {
      edge: 'left'
    });
  });

  return (
    <>
      <div className='navbar-fixed'>
        <nav className={ platformOptions.darkMode ? 'grey darken-4' : 'white grey-text text-darken-4' }>
          <div className='nav-wrapper container'>
            <Link
              to='/'
              className='brand-logo Logo'
              style={{
                backgroundImage: 'url(/logo.svg)'
              }}>
            </Link>
            <a href='#'
              data-target='mobile-demo'
              className='sidenav-trigger blue-text text-darken-2'>
              <i className='material-icons'>menu</i>
            </a>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li>
                <Link className={textThemeClasses} to='/'>Inicio</Link>
              </li>
              <li>
                <Link className={textThemeClasses} to='/about'>Acerca</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <ul className='sidenav' id='mobile-demo'
        ref={sideNavRef}
        onClick={closeSideNav}>
        <li>
          <Link to='/'>Inicio</Link>
        </li>
        <li>
          <Link to='/about'>Acerca</Link>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
