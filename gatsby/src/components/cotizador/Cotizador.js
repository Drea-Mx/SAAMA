import React, {useState} from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"
import Depa from './modales/Depa'

const Cotizador = () => {

    const [depa01, setDepa01] = useState(false);


    return(
        <CotizadorContainer>
            <motion.div  
                className="edificio" 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <p>Selecciona el departamento que más te interese</p>
                <p>y revisa sus especiﬁcaciones</p>
                <div className='image'>
                    <StaticImage 
                        src="Vistafrente.png" 
                        alt="SAAMA Edificio" 
                        layout="fullWidth"
                        placeholder="blurred"
                        style={{ height: "100%", width: "100%" }}
                    />
                    <div className='buttons'>
                        <button onClick={() => setDepa01(!depa01)} className='depa01'></button>
                    </div>
                </div>
            </motion.div>
            <motion.div  
                className="financiamiento" 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2>FINANCIAMIENTO</h2>
            </motion.div>

            <div className='depas'>
                {depa01 ? 
                    <Depa 
                        arr={
                            [
                                'Cocina', 
                                'Alacena', 
                                'Comedor', 
                                'Sala',
                                'Terraza',
                                'Piscina',
                                'Baño de visitas',
                                'Recámara A',
                                'Clóset A',
                                'Baño A',
                                'Recámara B',
                                'Clóset B',
                                'Baño B',
                                'Recámara C',
                                'Vestidor C',
                                'Baño C',
                                'Jardín interior',
                                'Terraza con jacuzzi',
                                'Cuarto de lavado',
                                'Baño de servicio',
                            ]
                        } 
                    />
            :
            ''
                }
                
            </div>
        </CotizadorContainer>
    )
}

const CotizadorContainer = styled.section`
    margin-top: 180px;
    display: flex;
    padding: 0 50px;
    @media (max-width: 850px) {
        margin-top: 150px;
    }
    @media (max-width: 780px) {
        margin-top: 100px;
    }
    .edificio {
        width: 50%;
        text-align: center;
        p {
            font-size: 28px;
        }
        .image {
            width: 350px;
            margin: 50px auto;
            position: relative;
            .buttons {
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                button {
                    position: absolute;
                    mix-blend-mode: multiply;
                }
                .depa01 {
                    width: 113px;
                    height: 44.5px;
                    background-color: #808642;
                    left: 50px;
                    bottom: 11px;
                }
            }
        }
    }
    .financiamiento {
        width: 50%;
        text-align: center;
    }
`

export default Cotizador