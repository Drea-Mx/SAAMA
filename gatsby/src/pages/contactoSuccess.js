import React from "react";
import ContactoSuccess from "../components/contacto/ContactoSuccess";
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';




const ContactoPage = () => {

const dark = true
    
    return(
        <Layout dark={dark}>
            <ContactoSuccess />
        </Layout>
    )
}

export const Head = () => (
    <Seo title='SAAMA Telchac | CONTACTO' description='TERRENO TELCHAC KM 36. Departamentos en telchac.' image='/screenshot.png' />
    )

export default ContactoPage