import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Principal Mobility Designer</title>
        <meta property="og:title" content="Principal Mobility Designer" />
      </Helmet>
    </div>
  )
}

export default Home
