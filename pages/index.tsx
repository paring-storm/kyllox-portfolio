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
        anchors={['home', 'skills', 'connection']}
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
          </div>
        )}
      />
    </div>
  )
}

export default Home
