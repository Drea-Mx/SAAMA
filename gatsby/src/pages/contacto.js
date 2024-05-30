import React from "react";
import Contacto from "../components/contacto/Contacto";
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';
import { graphql } from "gatsby";

export const data = graphql`
  query {
    sanityContactoPage {
        tel
        mail
        backgroundImage {
            alt
            asset {
                gatsbyImageData(layout: FULL_WIDTH, outputPixelDensities: 1.5, placeholder: BLURRED)
            }
        }
        logos {
            images {
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



const ContactoPage = ({data}) => {

const dark = true
    
    return(
        <Layout dark={dark}>
            <Contacto data={data} />
        </Layout>
    )
}

export const Head = () => (
    <Seo title='SAAMA Telchac | CONTACTO' description='TERRENO TELCHAC KM 36. Departamentos en telchac.' image='/screenshot.png' />
    )

export default ContactoPage