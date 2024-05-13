import React from 'react';
import { Link } from 'react-router-dom';

function SmoothScrollLink({ to, children }) {
  function scrollToSection() {
    const element = document.getElementById(to.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <Link to={to} onClick={scrollToSection}>
      {children}
    </Link>
  );
}

export default SmoothScrollLink;
