import React from 'react'
import Profile from '@assets/profile.svg'
import Menu from '@assets/Menu.svg'
import clsx from 'clsx'

const Header: React.FC = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <div>
      <div
        className="fixed h-24 left-0 top-0 w-full text-white bg-portfolio-header flex items-center justify-center px-6"
        style={{ zIndex: 99999 }}
      >
        <div className="container flex items-center gap-8">
          <img src={Profile.src} className="w-16 h-16" alt="" />
          <div className="flex-grow" />
          <div className="gap-8 hidden md:flex">
            <a className="text-3xl font-light font-spoqa-han-sans" href="#home">
              Home
            </a>
            <a
              className="text-3xl font-light font-spoqa-han-sans"
              href="#skills"
            >
              Skills
            </a>
            <a
              className="text-3xl font-light font-spoqa-han-sans"
              href="#connection"
            >
              Connection
            </a>
          </div>
          <div className="block md:hidden">
            <img
              src={Menu.src}
              className="w-16 h-16 cursor-pointer"
              alt=""
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>
      </div>
      <div
        className={clsx(
          'fixed w-full h-full top-0 text-white bg-portfolio-header transition-all block md:hidden',
          {
            '-right-full': !open,
            'right-0': open
          }
        )}
        style={{ zIndex: 99998 }}
      >
        <div className="h-24 w-full" />
        <div className="container mx-auto px-4 py-4 text-2xl">
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="p-2 block text-white transition-colors hover:text-gray-400 cursor-pointer"
          >
            Home
          </a>
          <a
            href="#skills"
            onClick={() => setOpen(false)}
            className="p-2 block text-white transition-colors hover:text-gray-400 cursor-pointer"
          >
            Skills
          </a>
          <a
            href="#connection"
            onClick={() => setOpen(false)}
            className="p-2 block text-white transition-colors hover:text-gray-400 cursor-pointer"
          >
            Connection
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
