import React from "react";
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';
import Numeralia from "../components/numeralia/Numeralia";




const NumeraliaPage = () => {


    
    return(
        <Layout>
            <Numeralia />
        </Layout>
    )
}

export const Head = () => (
    <Seo title='SAAMA Telchac | NUMERALIA' description='TERRENO TELCHAC KM 36. Departamentos en telchac.' image='/screenshot.png' />
    )

export default NumeraliaPage