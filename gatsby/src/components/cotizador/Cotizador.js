import React, {useState} from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"
import Depa from './modales/Depa'
import App from './Cont'

const Cotizador = () => {

    const [depa01, setDepa01] = useState(false);

    const depa1 = {
        titulo: 'DEPARTAMENTO 001',
        arr: [
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
        ],
        plano: '/001.png',
        precio: '10,913,760.00',
        codigoDepa: '001',
        nivel: 'Planta Baja',
        cajones: '2',
        espacios1: [
            'Interior: 200.76 m²',
            'Bodega: 1.19 m²',
            'Balcón: 66.44 m²',
            'Piscina: 16.20 m²',
            'Patio servicio: 2.66 m²',
            'Pérgola: N/A',
            'Servicio: N/A',
        ],
        espacios2: [
            'Techados: 201.95 m²',
            'No techado: 84 m²',
            'Total: 285.95 m²',
        ],
    }


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
                        <button onClick={() => setDepa01(!depa01)} className='depa01'>button</button>
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
                <div className='datos'>
                    <div className='item'>
                        <h2>$20,000</h2>
                        <p>para apartar la unidad</p>
                    </div>
                    <div className='item'>
                        <h2>15%</h2>
                        <p>enganche</p>
                    </div>
                    <div className='item'>
                        <h2>35%</h2>
                        <p>diferido</p>
                    </div>
                    <div className='item'>
                        <h2>50%</h2>
                        <p>saldo contra entrega</p>
                    </div>
                </div>
                <div className='counter'>
                    <App />
                </div>
            </motion.div>

            <div className='depas'>
                {depa01 ? 
                    <Depa 
                        depa01={depa01}
                        setDepa01={setDepa01}
                        depaInfo={depa1}
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
        flex-direction: column;
    }
    @media (max-width: 780px) {
        margin-top: 100px;
    }
    .edificio {
        width: 50%;
        text-align: center;
        @media (max-width: 850px) {
            width: 100%;
            margin-top: 50px;
        }
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
                    font-size: 0;
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
        @media (max-width: 850px) {
            width: 100%;
            margin-bottom: 200px;
        }
        h2 {
            font-size: 1.5rem;
        }
        .datos {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 50px;
            justify-content: center;
            align-items: center;
            margin-top: 50px;
            margin-bottom: 50px;
            .item {
                h2 {
                    font-size: 2.5rem;
                }
                p {
                    font-size: 1.2rem;
                }
            }
        }
    }
`

export default Cotizador