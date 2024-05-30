import React from "react";
import Concepto from "../components/concepto/Concepto";
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';
import { graphql } from "gatsby";

export const data = graphql`
  query {
    sanityConceptoPage {
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
            gatsbyImageData
            }
        }
        }
    }
  }
`;

const ConceptoPage = ({data}) => {


    
    return(
        <Layout>
            <Concepto data={data} />
        </Layout>
    )
}

export const Head = () => (
    <Seo title='SAAMA Telchac | Concepto' description='Construir comunidades con sentido de pertenencia, generando espacios de encuentro que fomenten una red de convivencia positiva.' image='/screenshot.png' />
    )

export default ConceptoPage