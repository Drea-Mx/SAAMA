import React from "react";
import Galeria from "../components/galeria/Galeria";
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';
import { graphql } from "gatsby";

export const data = graphql`
  query {
    sanityGaleriaPage {
    icono {
      alt
      asset {
        gatsbyImageData(
          layout: FULL_WIDTH
          outputPixelDensities: 1.5
          placeholder: BLURRED
        )
      }
    }
    galleria {
      images {
        _key
        asset {
            url
          gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: BLURRED
          )
        }
      }
    }
  }
  }
`;



const GaleriaPage = ({data}) => {


    
    return(
        <Layout>
            <Galeria data={data} />
        </Layout>
    )
}

export const Head = () => (
    <Seo title='SAAMA Telchac | GALERÍA' description='TERRENO TELCHAC KM 36. Departamentos en telchac.' image='/screenshot.png' />
    )

export default GaleriaPage