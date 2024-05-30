import React from "react";
import Cotizador from "../components/cotizador/Cotizador";
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';
import { graphql } from "gatsby";

export const data = graphql`
  query {
    sanityFinanciamientoPage {
        title
        _rawHeadline
        items {
            _key
            title
            description
        }
        date
        depa001 {
            title
            disponible
            precio
            description
            areas
            image {
                asset {
                url
                }
            }
            nivel
            interior
            terraza
            piscina
            terraza2
            jacuzzi
            bodega
            estacionamiento
            m2Habitables
        }
        depa002 {
            title
            disponible
            precio
            description
            areas
            image {
                asset {
                url
                }
            }
            nivel
            interior
            terraza
            piscina
            terraza2
            jacuzzi
            bodega
            estacionamiento
            m2Habitables
        }
        depa101 {
            title
            disponible
            precio
            description
            areas
            image {
                asset {
                url
                }
            }
            nivel
            interior
            terraza
            piscina
            terraza2
            jacuzzi
            bodega
            estacionamiento
            m2Habitables
        }
        depa102 {
            title
            disponible
            precio
            description
            areas
            image {
                asset {
                url
                }
            }
            nivel
            interior
            terraza
            piscina
            terraza2
            jacuzzi
            bodega
            estacionamiento
            m2Habitables
        }
        depa201 {
            title
            disponible
            precio
            description
            areas
            image {
                asset {
                url
                }
            }
            nivel
            interior
            terraza
            piscina
            terraza2
            jacuzzi
            bodega
            estacionamiento
            m2Habitables
        }
        depa202 {
            title
            disponible
            precio
            description
            areas
            image {
                asset {
                url
                }
            }
            nivel
            interior
            terraza
            piscina
            terraza2
            jacuzzi
            bodega
            estacionamiento
            m2Habitables
        }
        depa301 {
            title
            disponible
            precio
            description
            areas
            image {
                asset {
                url
                }
            }
            nivel
            interior
            terraza
            piscina
            terraza2
            jacuzzi
            bodega
            estacionamiento
            m2Habitables
        }
        depa302 {
            title
            disponible
            precio
            description
            areas
            image {
                asset {
                url
                }
            }
            nivel
            interior
            terraza
            piscina
            terraza2
            jacuzzi
            bodega
            estacionamiento
            m2Habitables
        }
        depa401 {
            title
            disponible
            precio
            description
            areas
            image {
                asset {
                url
                }
            }
            nivel
            interior
            terraza
            piscina
            terraza2
            jacuzzi
            bodega
            estacionamiento
            m2Habitables
        }
        depa402 {
            title
            disponible
            precio
            description
            areas
            image {
                asset {
                url
                }
            }
            nivel
            interior
            terraza
            piscina
            terraza2
            jacuzzi
            bodega
            estacionamiento
            m2Habitables
        }
        depa501 {
            title
            disponible
            precio
            description
            areas
            image {
                asset {
                url
                }
            }
            nivel
            interior
            terraza
            piscina
            terraza2
            jacuzzi
            bodega
            estacionamiento
            m2Habitables
        }
        depa502 {
            title
            disponible
            precio
            description
            areas
            image {
                asset {
                url
                }
            }
            nivel
            interior
            terraza
            piscina
            terraza2
            jacuzzi
            bodega
            estacionamiento
            m2Habitables
        }
        depa601 {
            title
            disponible
            precio
            description
            areas
            image {
                asset {
                url
                }
            }
            nivel
            interior
            terraza
            piscina
            terraza2
            jacuzzi
            bodega
            estacionamiento
            m2Habitables
        }
        depa602 {
            title
            disponible
            precio
            description
            areas
            image {
                asset {
                url
                }
            }
            nivel
            interior
            terraza
            piscina
            terraza2
            jacuzzi
            bodega
            estacionamiento
            m2Habitables
        }
        depa701 {
            title
            disponible
            precio
            description
            areas
            image {
                asset {
                url
                }
            }
            nivel
            interior
            terraza
            piscina
            terraza2
            jacuzzi
            bodega
            estacionamiento
            m2Habitables
        }
        depa702 {
            title
            disponible
            precio
            description
            areas
            image {
                asset {
                url
                }
            }
            nivel
            interior
            terraza
            piscina
            terraza2
            jacuzzi
            bodega
            estacionamiento
            m2Habitables
        }

        depaPHA {
            title
            disponible
            precio
            description
            plantaAlta {
                asset {
                url
                }
            }
            plantaBaja {
                asset {
                url
                }
            }
            areas
            nivel
            interiorPlantaAlta
            terraza1PlantaAlta
            terraza2PlantaAlta
            interiorPlantaBaja
            terraza1PlantaBaja
            terraza2PlantaBaja
            estacionamiento
            bodega
            piscina
            m2Habitables
            noTechados
        }
        
        depaPHB {
            title
            disponible
            precio
            description
            plantaAlta {
                asset {
                url
                }
            }
            plantaBaja {
                asset {
                url
                }
            }
            areas
            nivel
            interiorPlantaAlta
            terraza1PlantaAlta
            terraza2PlantaAlta
            interiorPlantaBaja
            terraza1PlantaBaja
            terraza2PlantaBaja
            estacionamiento
            bodega
            piscina
            m2Habitables
            noTechados
        }
    }
  }
`;







const CotizadorPage = ({data}) => {


    
    return(
        <Layout>
            <Cotizador data={data} />
        </Layout>
    )
}

export const Head = () => (
    <Seo title='SAAMA Telchac | Cotizador' description='Construir comunidades con sentido de pertenencia, generando espacios de encuentro que fomenten una red de convivencia positiva.' image='/screenshot.png' />
    )

export default CotizadorPage