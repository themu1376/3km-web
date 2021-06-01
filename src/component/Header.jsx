import React from 'react';



function Header() {
  const Nav = () => {
    let pageClass = {
      ready: '',
      running: '',
      pause: '',
    };
    const paths = document.location.href.split('//').pop().split('/');
    pageClass[paths[1]] += 'active';

    return (
      <header className='header'>
        <ul>
          <li className={pageClass['ready']}><a href='/ready'>Ready</a></li>
          <li className={pageClass['running']}><a href='/running'>Running</a></li>
          <li className={pageClass['pause']}><a href="/pause">Pause</a></li>
        </ul>
      </header>
    );
  };
  return <Nav />;
}

export default Header;