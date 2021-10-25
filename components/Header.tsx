import React from 'react'
import Profile from '@assets/profile.svg'

const Header: React.FC = () => {
  return (
    <div
      className="fixed h-24 left-0 top-0 w-full text-white bg-portfolio-header flex items-center justify-center px-6"
      style={{ zIndex: 99999 }}
    >
      <div className="container flex items-center gap-8">
        <img src={Profile.src} className="w-16 h-16" alt="" />
        <div className="flex-grow" />
        <a className="text-3xl font-light font-spoqa-han-sans" href="#home">
          Home
        </a>
        <a className="text-3xl font-light font-spoqa-han-sans" href="#skills">
          Skills
        </a>
        <a
          className="text-3xl font-light font-spoqa-han-sans"
          href="#connection"
        >
          Connection
        </a>
      </div>
    </div>
  )
}

export default Header
