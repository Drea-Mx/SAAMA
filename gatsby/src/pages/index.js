import React from 'react'
import Home from '../components/home/Home'
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';
import { graphql } from "gatsby";



export const data = graphql`
  query {
    sanityHomePage {
      text1
      text2
      headline {
        alt
        asset {
          gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: BLURRED
          )
        }
      }
    }
  }
`;


const IndexPage = ({data}) => {
  return (
    <Layout >
        <Home data={data} />
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <Seo title='SAAMA Telchac' description='YOUR NEW HOME IS COMING SOON. Departamentos en telchac.' image='/screenshot.png' />
  )