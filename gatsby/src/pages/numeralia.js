import React from "react";
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';
import Numeralia from "../components/numeralia/Numeralia";
import { graphql } from "gatsby";

export const data = graphql`
  query {
    sanityNumeraliaPage {
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
        _rawText
        image {
        alt
        asset {
            gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: BLURRED
            )
        }
        }
        seo {
            title
            description
            image {
                asset {
                url
                }
            }
        }
    }
  }
`;




const NumeraliaPage = ({data}) => {


    
    return(
        <Layout>
            <Numeralia data={data} />
        </Layout>
    )
}

export const Head = () => (
    <Seo title='SAAMA Telchac | NUMERALIA' description='TERRENO TELCHAC KM 36. Departamentos en telchac.' image='/screenshot.png' />
    )

export default NumeraliaPage