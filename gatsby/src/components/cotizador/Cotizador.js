import React, {useState} from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"
import Depa from './modales/Depa'
import App from './Cont'
import { Link } from 'gatsby'

const Cotizador = () => {

    const [depa01, setDepa01] = useState(false);


    // Depa 001
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
        plano: '/depas/001.png',
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


        // Depa 002
    const [depa02, setDepa02] = useState(false);

    const depa2 = {
        titulo: 'DEPARTAMENTO 002',
        arr: [
            'Cocina', 
            'Comedor', 
            'Sala', 
            'Terraza',
            'Piscina',
            'Recámara A',
            'Vestidor A',
            'Baño A',
            'Baño de visitas',
            'Alacena / bodega',
            'Baño B',
            'Recámara B',
            'Clóset B',
            'Recámara C',
            'Clóset C',
            'Baño C',
            'Terraza',
            'Cuarto de lavado',
            'Baño de servicio',
            'Área de compresores',
        ],
        plano: '/depas/002.png',
        precio: '10,913,760.00',
        codigoDepa: '002',
        nivel: 'Planta Baja',
        cajones: '2',
        espacios1: [
            'Interior: 198.83 m²',
            'Bodega: 1.19 m²',
            'Balcón: 67.06 m²',
            'Piscina: 16.20 m²',
            'Patio servicio: 2.85 m²',
            'Pérgola: N/A',
            'Servicio: N/A',
        ],
        espacios2: [
            'Techados: 200.02 m²',
            'No techado: 86.11 m²',
            'Total: 286.13 m²',
        ],
    }


        // Depa 101


    const [depa101, setDepa101] = useState(false);

    const depa101Info = {
        titulo: 'DEPARTAMENTO 101',
        arr: [
            'Cocina', 
            'Comedor', 
            'Sala', 
            'Terraza',
            'Piscina',
            'Recámara A',
            'Vestidor A',
            'Baño A',
            'Baño de visitas',
            'Alacena / bodega',
            'Baño B',
            'Recámara B',
            'Clóset B',
            'Recámara C',
            'Clóset C',
            'Baño C',
            'Terraza',
            'Cuarto de lavado',
            'Baño de servicio',
            'Área de compresores',
        ],
        plano: '/depas/101.png',
        precio: '9,470,012.15',
        codigoDepa: '101',
        nivel: '1',
        cajones: '2',
        espacios1: [
            'Interior: 160.73 m²',
            'Bodega: 1.19 m²',
            'Balcón: 74.49 m²',
            'Piscina: 9.45 m²',
            'Patio servicio: 4.03 m²',
            'Pérgola: N/A',
            'Servicio: N/A',
        ],
        espacios2: [
            'Techado: 190.70 m²',
            'No techado: 59.18 m²',
            'Total: 249.89 m²',
        ],
    }


            // Depa 102

    const [depa102, setDepa102] = useState(false);

    const depa102Info = {
        titulo: 'DEPARTAMENTO 102',
        arr: [
            'Cocina', 
            'Alacena / Bodega', 
            'Comedor', 
            'Sala',
            'Terraza',
            'Piscina',
            'Recámara A',
            'Closet / Vestidor A',
            'Baño A',
            'Recámara B',
            'Clóset B',
            'Baño B',
            'Terraza',
            'Recámara C',
            'Clóset C',
            'Baño C',
            'Cuarto de lavado',
            'Baño de servicio',
            'Área de compresores',
            'Baño de visitas',
        ],
        plano: '/depas/102.png',
        precio: '8,908,239.62',
        codigoDepa: '102',
        nivel: '1',
        cajones: '2',
        espacios1: [
            'Interior: 154.49 m²',
            'Bodega: 1.19 m²',
            'Balcón: 70.45 m²',
            'Piscina: 9.45 m²',
            'Patio servicio: 5.29 m²',
            'Pérgola: N/A',
            'Servicio: N/A',
        ],
        espacios2: [
            'Techado: 180.38 m²',
            'No techado: 60.48 m²',
            'Total: 240.86 m²',
        ],
    }

        // Depa 201

    const [depa201, setDepa201] = useState(false);

    const depa201Info = {
        titulo: 'DEPARTAMENTO 201',
        arr: [
            'Cocina', 
            'Comedor', 
            'Sala', 
            'Terraza',
            'Recámara A',
            'Vestidor A',
            'Baño A',
            'Baño de visitas',
            'Alacena / bodega',
            'Recámara B',
            'Clóset B',
            'Baño B',
            'Recámara C',
            'Clóset C',
            'Baño C',
            'Cuarto de lavado',
            'Baño de servicio',
            'Área de compresores',
        ],
        plano: '/depas/201.png',
        precio: '8,800,949.87',
        codigoDepa: '201',
        nivel: '2-7',
        cajones: '2',
        espacios1: [
            'Interior: 160.03 m²',
            'Bodega: 1.19 m²',
            'Balcón: 27.71 m²',
            'Piscina: N/A',
            'Patio servicio: 4.03 m²',
            'Pérgola: N/A',
            'Servicio: N/A',
        ],
        espacios2: [
            'Techados: 184.97 m²',
            'No Techados: 8 m²',
            'Total: 192.97 m²',
        ],
    }


        // Depa 202

    const [depa202, setDepa202] = useState(false);

    const depa202Info = {
        titulo: 'DEPARTAMENTO 202',
        arr: [
            'Cocina', 
            'Alacena / Bodega', 
            'Comedor', 
            'Sala',
            'Terraza',
            'Recámara A',
            'Clóset / Vestidor A',
            'Baño A',
            'Baño de visitas',
            'Recámara B',
            'Clóset / Vestidor B',
            'Baño B',
            'Recámara C',
            'Clóset C',
            'Baño C',
            'Cuarto de lavado',
            'Baño de servicio',
            'Área de compresores',
        ],
        plano: '/depas/202.png',
        precio: '8,328,047.62',
        codigoDepa: '202',
        nivel: '2-7',
        cajones: '2',
        espacios1: [
            'Interior: 149.65 m²',
            'Bodega: 1.19 m²',
            'Balcón: 27.24 m²',
            'Piscina: N/A',
            'Patio servicio: 5.50 m²',
            'Pérgola: N/A',
            'Servicio: N/A',
        ],
        espacios2: [
            'Techados: 175.77 m²',
            'No Techados: 7.80 m²',
            'Total: 183.58 m²',
        ],
    }



          // Depa 301

          const [depa301, setDepa301] = useState(false);

          const depa301Info = {
              titulo: 'DEPARTAMENTO 301',
              arr: [
                  'Cocina', 
                  'Comedor', 
                  'Sala', 
                  'Terraza',
                  'Recámara A',
                  'Vestidor A',
                  'Baño A',
                  'Baño de visitas',
                  'Alacena / bodega',
                  'Recámara B',
                  'Clóset B',
                  'Baño B',
                  'Recámara C',
                  'Clóset C',
                  'Baño C',
                  'Cuarto de lavado',
                  'Baño de servicio',
                  'Área de compresores',
              ],
              plano: '/depas/301.png',
              precio: '8,906,561.26',
              codigoDepa: '301',
              nivel: '2-7',
              cajones: '2',
              espacios1: [
                  'Interior: 160.03 m²',
                  'Bodega: 1.19 m²',
                  'Balcón: 19.71 m²',
                  'Piscina: N/A',
                  'Patio servicio: 4.03 m²',
                  'Pérgola: N/A',
                  'Servicio: N/A',
              ],
              espacios2: [
                  'Techados: 184.96 m²',
                  'No Techados: N/A',
                  'Total: 184.96 m²',
              ],
          }

          



          // Depa 302

          const [depa302, setDepa302] = useState(false);

          const depa302Info = {
              titulo: 'DEPARTAMENTO 302',
              arr: [
                'Cocina', 
                'Alacena / Bodega', 
                'Comedor', 
                'Sala',
                'Terraza',
                'Recámara A',
                'Clóset / Vestidor A',
                'Baño A',
                'Baño de visitas',
                'Recámara B',
                'Clóset / Vestidor B',
                'Baño B',
                'Recámara C',
                'Clóset C',
                'Baño C',
                'Cuarto de lavado',
                'Baño de servicio',
                'Área de compresores',
              ],
              plano: '/depas/302.png',
              precio: '8,427,984.19',
              codigoDepa: '302',
              nivel: '2-7',
              cajones: '2',
              espacios1: [
                  'Interior: 149.59 m²',
                  'Bodega: 1.19 m²',
                  'Balcón: 19.5 m²',
                  'Piscina: N/A',
                  'Patio servicio: 5.50 m²',
                  'Pérgola: N/A',
                  'Servicio: N/A',
              ],
              espacios2: [
                  'Techados: 175.78 m²',
                  'No Techados: N/A',
                  'Total: 175.78 m²',
              ],
          }

          

    return(
        <>
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
                        <button onClick={() => setDepa01(!depa01)} className='depa01'>001</button>
                        <button onClick={() => setDepa02(!depa02)} className='depa02'>002</button>
                        <button onClick={() => setDepa101(!depa101)} className='depa101'>101</button>
                        <button onClick={() => setDepa102(!depa102)} className='depa102'>102</button>
                        <button onClick={() => setDepa201(!depa201)} className='depa201'>201</button>
                        <button onClick={() => setDepa202(!depa202)} className='depa202'>202</button>
                        <button onClick={() => setDepa301(!depa301)} className='depa301'>301</button>
                        <button onClick={() => setDepa302(!depa302)} className='depa302'>302</button>
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
                {depa02 ? 
                    <Depa 
                        depa01={depa02}
                        setDepa01={setDepa02}
                        depaInfo={depa2}
                    />
            :
            ''
                }
                {depa101 ? 
                    <Depa 
                        depa01={depa101}
                        setDepa01={setDepa101}
                        depaInfo={depa101Info}
                    />
            :
            ''
                }
                {depa102 ? 
                    <Depa 
                        depa01={depa102}
                        setDepa01={setDepa102}
                        depaInfo={depa102Info}
                    />
            :
            ''
                }
                {depa201 ? 
                    <Depa 
                        depa01={depa201}
                        setDepa01={setDepa201}
                        depaInfo={depa201Info}
                    />
            :
            ''
                }
                {depa202 ? 
                    <Depa 
                        depa01={depa202}
                        setDepa01={setDepa202}
                        depaInfo={depa202Info}
                    />
            :
            ''
                }
                {depa301 ? 
                    <Depa 
                        depa01={depa301}
                        setDepa01={setDepa301}
                        depaInfo={depa301Info}
                    />
            :
            ''
                }
                {depa302 ? 
                    <Depa 
                        depa01={depa302}
                        setDepa01={setDepa302}
                        depaInfo={depa302Info}
                    />
            :
            ''
                }
                
            </div>
            
        </CotizadorContainer>
        <Arrow className='arrow' to='/contacto'>
            ↓
        </Arrow>
        </>

    )
}

const Arrow = styled(Link)`
    position: relative;
    display: block;
    width: 50px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    font-size: 60px;
    z-index: 1;
    @media (max-width: 680px) {
        font-size: 35px;
    }
`

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
            width: 300px;
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
                    width: 93px;
                    height: 38px;
                    background-color: #808642;
                    right: 47px;
                    bottom: 11px;
                }
                .depa02 {
                    width: 93px;
                    height: 38px;
                    background-color: #808642;
                    left: 44px;
                    bottom: 11px;
                }
                .depa101 {
                    width: 93px;
                    height: 33px;
                    background-color: #808642;
                    right: 47px;
                    bottom: 52px;
                }
                .depa102 {
                    width: 93px;
                    height: 33px;
                    background-color: #808642;
                    left: 44px;
                    bottom: 52px;
                }
                .depa201 {
                    width: 93px;
                    height: 34px;
                    background-color: #808642;
                    right: 47px;
                    bottom: 89px;
                }
                .depa202 {
                    width: 93px;
                    height: 34px;
                    background-color: #808642;
                    left: 44px;
                    bottom: 89px;
                }
                .depa301 {
                    width: 93px;
                    height: 34px;
                    background-color: #808642;
                    right: 47px;
                    bottom: 126.5px;
                }
                .depa302 {
                    width: 93px;
                    height: 34px;
                    background-color: #E29C25;
                    left: 44px;
                    bottom: 126.5px;
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
            margin-top: 40px;
            margin-bottom: 20px;
            @media (max-width: 485px) {
                grid-template-columns: 1fr;
            }
            .item {
                h2 {
                    font-size: 1.5rem;
                }
                p {
                    font-size: 1rem;
                }
            }
        }
    }
`

export default Cotizador