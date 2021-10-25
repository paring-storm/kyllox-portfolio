import React from 'react'
import { NextPage } from 'next'
import ReactFullpage from '@fullpage/react-fullpage'
import Header from '@components/Header'
import ScrollDown from '@assets/ScrollDown.svg'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <ReactFullpage
        anchors={['home', 'skills', 'connection', 'footer']}
        licenseKey="OPEN-SOURCE-GPLv3-LICENSE"
        navigation
        navigationPosition="right"
        render={() => (
          <div className="text-white">
            <div className="section">
              <div className="flex flex-col">
                <div className="pl-6 pr-24">
                  <div className="container mx-auto flex flex-col items-center justify-center">
                    <div className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
                      <p>Hello, World!</p>
                      <p>I{"'"}m a Frontend Developer,</p>
                      <p>and Game Developer!</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-16">
                  <a href="#skills" onDragStart={(e) => e.preventDefault()}>
                    <img src={ScrollDown.src} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="section">2</div>
            <div className="section">3</div>
            <div className="section fp-auto-height">
              <div className="px-6 py-6">
                <div className="container mx-auto">
                  <div className="flex gap-8">
                    <div className="flex flex-col flex-grow">
                      <div className="text-3xl text-portfolio-blue font-bold">
                        Kyllox
                      </div>
                      <div className="text-xl text-portfolio-gray">
                        Game Developer
                      </div>
                    </div>
                    <div className="flex flex-col text-portfolio-gray gap-2">
                      <div className="text-xl font-bold">Pages</div>
                      <a href="#home" className="text-md font-bold">
                        Home
                      </a>
                      <a href="#skills" className="text-md font-bold">
                        Skills
                      </a>
                      <a href="#connection" className="text-md font-bold">
                        Connection
                      </a>
                    </div>
                    <div className="flex flex-col text-portfolio-gray gap-2">
                      <div className="text-xl font-bold">Contact</div>
                      <a className="text-md font-bold">Discord</a>
                      <a
                        href="mailto:kyllox4804@gmail.com"
                        rel="noreferrer"
                        className="text-md font-bold"
                      >
                        Email
                      </a>
                      <a
                        href="https://github.com/KylloxStudio"
                        target="_blank"
                        rel="noreferrer"
                        className="text-md font-bold"
                      >
                        Github
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center text-lg mt-2">
                  Copyright © 2021 Kyllox All rights reserved.
                </div>
              </div>
            </div>
          </div>
        )}
      />
    </div>
  )
}

export default Home
