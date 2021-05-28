import React from 'react';
import logo_footer from './logo-footer.svg';

function Footer() {
  return (
    <footer className='footer'>
      <img src={logo_footer} className="footer-logo" alt="logo-footer" />
    </footer>
  );
}

export default Footer;