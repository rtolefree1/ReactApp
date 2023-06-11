import React from 'react';

export default function Navigation({currentPage, handlePageChange}) {
  const linkStyle = { border: '1px black', padding: '5px' };

  return (
    <nav className="main-header-menu">
      <section
        style={{
          display: 'flex',
          fontFamily: 'helvetica',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        <h1>Tolefree</h1>
        <div style={linkStyle}>
          <a href="#about"
          onClick={() => handlePageChange('About')}
          
          >About me</a>
        </div>

        <div style={linkStyle}>
          <a href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          >Portfolio</a>
        </div>

        <div style={linkStyle}>
          <a href="#contact"
          onClick={() => handlePageChange('Contact')}
          >Contact</a>
        </div>

        <div style={linkStyle}>
          <a href="#resume"
          onClick={() => handlePageChange('Resume')}
          >Resume</a>
        </div>
      </section>
    </nav>
  );
}