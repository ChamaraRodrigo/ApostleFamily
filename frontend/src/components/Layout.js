// src/components/Layout.js
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        {/* Common header, navbar, etc. */}
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
        </nav>
      </header>

      <main>{children}</main>  {/* Where the page content will be rendered */}

      <footer>
        {/* Common footer */}
        <p>© 2024 My Web App</p>
      </footer>
    </div>
  );
};

export default Layout;
