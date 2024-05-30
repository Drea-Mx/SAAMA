import React from "react";
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';
import UbicacionComponent from "../components/ubicacion/UbicacionComponent";
import { graphql } from "gatsby";

export const data = graphql`
  query {
    sanityUbicacionPage {
        headline1
        headline2
        puntosDeInteres
        mapa
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


const UbicacionPage = ({data}) => {


    
    return(
        <Layout>
            <UbicacionComponent data={data} />
        </Layout>
    )
}

export const Head = () => (
    <Seo title='SAAMA Telchac | UBICACION' description='TERRENO TELCHAC KM 36. Departamentos en telchac.' image='/screenshot.png' />
    )

export default UbicacionPage