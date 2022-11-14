import React from "react";
import Amenidades from "../components/amenidades/Amenidades";
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';




const NumeraliaPage = () => {


    
    return(
        <Layout>
            <Amenidades />
        </Layout>
    )
}

export const Head = () => (
    <Seo title='SAAMA Telchac | AMENIDADES' description='TERRENO TELCHAC KM 36. Departamentos en telchac.' image='/screenshot.png' />
    )

export default NumeraliaPage