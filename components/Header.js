'use client'
import { useState } from 'react'
import Image from 'next/image'
import logo from '../public/wizzlogo.jpeg'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="site-header-custom">
        <div className="hdr-inner-custom">
          {/* Logo */}
          <a href="/" className="hdr-logo-custom" aria-label="Wizz Cabs">
            <img src={logo.src} alt="Wizz Cabs" className="logo-img" />
          </a>

          <div className="hdr-right-custom">
            {/* Nav */}
            <nav className="hdr-nav-custom" aria-label="Main navigation">
              <a href="#" className="hdr-link-custom">Blog</a>
              <a href="#" className="hdr-link-custom">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Download App
              </a>
            </nav>

            {/* Actions */}
            <div className="hdr-actions-custom">
              <a href="#" className="hdr-register-btn">Register as Partner</a>
              <a href="tel:+919696000999" className="hdr-circle-btn" title="Call Us">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </a>
              <a href="#" className="hdr-circle-btn" title="My Account">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </a>
            </div>

            {/* Mobile burger */}
            <button className="hdr-burger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
              <span/><span/><span/>
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      {menuOpen && <div className="hdr-backdrop" onClick={() => setMenuOpen(false)} />}

      {/* Mobile drawer */}
      <div className={`hdr-drawer ${menuOpen ? 'open' : ''}`}>
        <div className="hdr-drawer-top">
          <img src={logo.src} alt="Wizz Cabs" className="logo-img" style={{height: '30px'}} />
          <button className="hdr-drawer-close" onClick={() => setMenuOpen(false)} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>
        <nav className="hdr-drawer-nav">
          <a href="#" className="hdr-drawer-link" onClick={() => setMenuOpen(false)}>Blog</a>
          <a href="#" className="hdr-drawer-link" onClick={() => setMenuOpen(false)}>Download App</a>
          <a href="#" className="hdr-drawer-link" onClick={() => setMenuOpen(false)}>Register as Partner</a>
        </nav>
      </div>
    </>
  )
}
