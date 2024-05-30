import React from "react";
import Amenidades from "../components/amenidades/Amenidades";
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';
import { graphql } from "gatsby";

export const data = graphql`
  query {
    sanityAmenidadesPage {
        icono {
        alt
        asset {
            gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: DOMINANT_COLOR
            )
        }
        }
        imagenAmenidades {
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




const NumeraliaPage = ({data}) => {


    
    return(
        <Layout>
            <Amenidades data={data} />
        </Layout>
    )
}

export const Head = () => (
    <Seo title='SAAMA Telchac | AMENIDADES' description='TERRENO TELCHAC KM 36. Departamentos en telchac.' image='/screenshot.png' />
    )

export default NumeraliaPage