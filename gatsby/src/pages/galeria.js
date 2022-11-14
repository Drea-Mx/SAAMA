import React from "react";
import Galeria from "../components/galeria/Galeria";
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';




const GaleriaPage = () => {


    
    return(
        <Layout>
            <Galeria />
        </Layout>
    )
}

export const Head = () => (
    <Seo title='SAAMA Telchac | GALERÍA' description='TERRENO TELCHAC KM 36. Departamentos en telchac.' image='/screenshot.png' />
    )

export default GaleriaPage