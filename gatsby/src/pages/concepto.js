import React from "react";
import Concepto from "../components/concepto/Concepto";
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';




const ConceptoPage = () => {


    
    return(
        <Layout>
            <Concepto />
        </Layout>
    )
}

export const Head = () => (
    <Seo title='SAAMA Telchac | Concepto' description='Construir comunidades con sentido de pertenencia, generando espacios de encuentro que fomenten una red de convivencia positiva.' image='/screenshot.png' />
    )

export default ConceptoPage