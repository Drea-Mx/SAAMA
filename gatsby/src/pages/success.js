import React from "react";
import CotizadorSuccess from "../components/cotizador/CotizadorSuccess";
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';




const SuccessPage = () => {


    
    return(
        <Layout>
            <CotizadorSuccess />
        </Layout>
    )
}

export const Head = () => (
    <Seo title='SAAMA Telchac | Cotizador' description='Construir comunidades con sentido de pertenencia, generando espacios de encuentro que fomenten una red de convivencia positiva.' image='/screenshot.png' />
    )

export default SuccessPage