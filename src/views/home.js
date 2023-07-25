import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Buoyant Organic Crocodile</title>
        <meta property="og:title" content="Buoyant Organic Crocodile" />
      </Helmet>
    </div>
  )
}

export default Home
