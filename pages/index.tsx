import React from 'react'
import { NextPage } from 'next'
import ReactFullpage from '@fullpage/react-fullpage'

const Home: NextPage = () => {
  return (
    <div>
      <ReactFullpage
        render={() => (
          <div>
            <div className="section">1</div>
            <div className="section">2</div>
            <div className="section">3</div>
          </div>
        )}
      />
    </div>
  )
}

export default Home
