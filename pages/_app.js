import Head from 'next/head';
import React from "react" 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import Layout from '../component/layout';

function MyApp({ Component, pageProps }) { 

  return (
    <>
      <Head><meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale = 1.0, user-scalable = no" /></Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
