import React from "react";
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';
import UbicacionComponent from "../components/ubicacion/UbicacionComponent";




const UbicacionPage = () => {


    
    return(
        <Layout>
            <UbicacionComponent />
        </Layout>
    )
}

export const Head = () => (
    <Seo title='SAAMA Telchac | UBICACION' description='TERRENO TELCHAC KM 36. Departamentos en telchac.' image='/screenshot.png' />
    )

export default UbicacionPage