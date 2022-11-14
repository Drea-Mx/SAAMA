import React from 'react'
import Home from '../components/home/Home'
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';

const IndexPage = () => {
  return (
    <Layout >
        <Home />
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <Seo title='SAAMA Telchac' description='YOUR NEW HOME IS COMING SOON. Departamentos en telchac.' image='/screenshot.png' />
  )