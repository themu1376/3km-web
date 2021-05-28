import React from 'react';

function Header() {
  return (
    <header className='header'>
    	<ul>
    		<li className='active'>Ready</li>
    		<li>Running</li>
    		<li>Pause</li>
    	</ul>
    </header>
  );
}

export default Header;