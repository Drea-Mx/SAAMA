import React, {useState} from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"
import Depa from './modales/Depa'
import App from './Cont'
import { Link } from 'gatsby'
import PentHouse from './modales/PentHouse'

const Cotizador = () => {

    const [depa01, setDepa01] = useState(false);


    // Depa 001
    const depa1 = {
        titulo: 'DEPARTAMENTO GARDEN',
        arr: [
            'Cocina', 
            'Comedor', 
            'Sala', 
            'Terraza',
            'Piscina',
            'Baño de visitas',
            'Recámara A',
            'Closet A',
            'Baño A',
            'Recámara B',
            'Clóset B',
            'Baño B',
            'Recámara C',
            'Closet C',
            'Baño C',
            'Jardín interior',
            'Terraza con jacuzzi',
            'Cuarto de servicio',
        ],
        plano: '/depas/Garden.png',
        precio: '8,364,000',
        codigoDepa: 'GH1',
        nivel: 'Planta Baja',
        cajones: '2',
        espacios1: [
            'Interior: 145.7 m²',
            'Terraza 1: 33.2 m²',
            'Piscina: 12.9 m²',
            'Terraza 2: 24.5 m²',
            'Jacuzzi: 5 m²',
            'Bodega: 1.8 m²',
            'Estacionamiento: 25 m²',
        ],
        espacios2: [
            'M2 Habitables: 204 m²',
        ],
    }


        // Depa 002
    const [depa02, setDepa02] = useState(false);

    const depa2 = {
        titulo: 'DEPARTAMENTO GARDEN',
        arr: [
            'Cocina', 
            'Comedor', 
            'Sala', 
            'Terraza',
            'Piscina',
            'Baño de visitas',
            'Recámara A',
            'Closet A',
            'Baño A',
            'Recámara B',
            'Clóset B',
            'Baño B',
            'Recámara C',
            'Closet C',
            'Baño C',
            'Jardín interior',
            'Terraza con jacuzzi',
            'Cuarto de servicio',
        ],
        plano: '/depas/Garden.png',
        precio: '8,364,000',
        codigoDepa: 'GH2',
        nivel: 'Planta Baja',
        cajones: '2',
        espacios1: [
            'Interior: 145.7 m²',
            'Terraza 1: 33.2 m²',
            'Piscina: 12.9 m²',
            'Terraza 2: 24.5 m²',
            'Jacuzzi: 5 m²',
            'Bodega: 1.8 m²',
            'Estacionamiento: 25 m²',
        ],
        espacios2: [
            'M2 Habitables: 204 m²',
        ],
    }


        // Depa 101


    const [depa101, setDepa101] = useState(false);

    const depa101Info = {
        titulo: 'DEPARTAMENTO PALMA',
        arr: [
            'Cocina', 
            'Comedor', 
            'Sala', 
            'Terraza',
            'Piscina',
            'Recamara A',
            'Clóset vestidor A',
            'Baño A',
            'Recámara B',
            'Closet B',
            'Baño B',
            'Recamara C',
            'Closet C',
            'Baño Completo',
            'Terraza 2',
            'Cuarto de servicio',
        ],
        plano: '/depas/Palma.png',
        precio: '7,991,507.00',
        codigoDepa: '101',
        nivel: '1',
        cajones: '2',
        espacios1: [
            'Interior: 120.85 m²',
            'Terraza 1: 50 m²',
            'Piscina: 15.2 m²',
            'Terraza 2: 13.95 m²',
            'Jacuzzi: N/A',
            'Bodega: 1.8 m²',
            'Estacionamiento: 25 m²',
        ],
        espacios2: [
            'M2 Habitables: 185 m²',
        ],
    }


            // Depa 102

    const [depa102, setDepa102] = useState(false);

    const depa102Info = {
        titulo: 'DEPARTAMENTO PALMA',
        arr: [
            'Cocina', 
            'Comedor', 
            'Sala', 
            'Terraza',
            'Piscina',
            'Recamara A',
            'Clóset vestidor A',
            'Baño A',
            'Recámara B',
            'Closet B',
            'Baño B',
            'Recamara C',
            'Closet C',
            'Baño Completo',
            'Terraza 2',
            'Cuarto de servicio',
        ],
        plano: '/depas/Palma.png',
        precio: '7,991,507.00',
        codigoDepa: '102',
        nivel: '1',
        cajones: '2',
        espacios1: [
            'Interior: 120.85 m²',
            'Terraza 1: 50 m²',
            'Piscina: 15.2 m²',
            'Terraza 2: 13.95 m²',
            'Jacuzzi: N/A',
            'Bodega: 1.8 m²',
            'Estacionamiento: 25 m²',
        ],
        espacios2: [
            'M2 Habitables: 185 m²',
        ],
    }

        // Depa 201

    const [depa201, setDepa201] = useState(false);

    const depa201Info = {
        titulo: 'DEPARTAMENTO ACQUA',
        arr: [
            'Cocina', 
            'Comedor', 
            'Sala', 
            'Recámara A',
            'Closet vestidor A',
            'Baño A',
            'Recámara B',
            'Closet B',
            'Baño B',
            'Recámara C',
            'Closet C',
            'Baño Completo',
            'Cuarto de servicio',
        ],
        plano: '/depas/Acqua.png',
        precio: '7,310,279.95',
        codigoDepa: '201',
        nivel: '2-7',
        cajones: '2',
        espacios1: [
            'Interior: 120.9 m²',
            'Terraza 1: 18.95 m²',
            'Piscina: N/A',
            'Terraza 2: N/A',
            'Jacuzzi: N/A',
            'Bodega: 1.8 m²',
            'Estacionamiento: 25 m²',
        ],
        espacios2: [
            'M2 Habitables: 140 m²',
        ],
    }


        // Depa 202

    const [depa202, setDepa202] = useState(false);

    const depa202Info = {
        titulo: 'DEPARTAMENTO ACQUA',
        arr: [
            'Cocina', 
            'Comedor', 
            'Sala', 
            'Recámara A',
            'Closet vestidor A',
            'Baño A',
            'Recámara B',
            'Closet B',
            'Baño B',
            'Recámara C',
            'Closet C',
            'Baño Completo',
            'Cuarto de servicio',
        ],
        plano: '/depas/Acqua.png',
        precio: '7,310,279.95',
        codigoDepa: '202',
        nivel: '2-7',
        cajones: '2',
        espacios1: [
            'Interior: 120.9 m²',
            'Terraza 1: 18.95 m²',
            'Piscina: N/A',
            'Terraza 2: N/A',
            'Jacuzzi: N/A',
            'Bodega: 1.8 m²',
            'Estacionamiento: 25 m²',
        ],
        espacios2: [
            'M2 Habitables: 140 m²',
        ],
    }



          // Depa 301

          const [depa301, setDepa301] = useState(false);

          const depa301Info = {
              titulo: 'DEPARTAMENTO ACQUA',
              arr: [
                'Cocina', 
                'Comedor', 
                'Sala', 
                'Recámara A',
                'Closet vestidor A',
                'Baño A',
                'Recámara B',
                'Closet B',
                'Baño B',
                'Recámara C',
                'Closet C',
                'Baño Completo',
                'Cuarto de servicio',
            ],
              plano: '/depas/Acqua.png',
              precio: '7,335,279.95',
              codigoDepa: '301',
              nivel: '2-7',
              cajones: '2',
              espacios1: [
                'Interior: 120.9 m²',
                'Terraza 1: 18.95 m²',
                'Piscina: N/A',
                'Terraza 2: N/A',
                'Jacuzzi: N/A',
                'Bodega: 1.8 m²',
                'Estacionamiento: 25 m²',
            ],
            espacios2: [
                'M2 Habitables: 140 m²',
            ],
          }

          



          // Depa 302

          const [depa302, setDepa302] = useState(false);

          const depa302Info = {
              titulo: 'DEPARTAMENTO ACQUA',
              arr: [
                'Cocina', 
                'Comedor', 
                'Sala', 
                'Recámara A',
                'Closet vestidor A',
                'Baño A',
                'Recámara B',
                'Closet B',
                'Baño B',
                'Recámara C',
                'Closet C',
                'Baño Completo',
                'Cuarto de servicio',
            ],
              plano: '/depas/Acqua.png',
              precio: '7,335,279.95',
              codigoDepa: '302',
              nivel: '2-7',
              cajones: '2',
              espacios1: [
                'Interior: 120.9 m²',
                'Terraza 1: 18.95 m²',
                'Piscina: N/A',
                'Terraza 2: N/A',
                'Jacuzzi: N/A',
                'Bodega: 1.8 m²',
                'Estacionamiento: 25 m²',
            ],
            espacios2: [
                'M2 Habitables: 140 m²',
            ],
          }
          



          // Depa 401

          const [depa401, setDepa401] = useState(false);

          const depa401Info = {
              titulo: 'DEPARTAMENTO ACQUA',
              arr: [
                'Cocina', 
                'Comedor', 
                'Sala', 
                'Recámara A',
                'Closet vestidor A',
                'Baño A',
                'Recámara B',
                'Closet B',
                'Baño B',
                'Recámara C',
                'Closet C',
                'Baño Completo',
                'Cuarto de servicio',
            ],
              plano: '/depas/Acqua.png',
              precio: '7,360,279.95',
              codigoDepa: '401',
              nivel: '2-7',
              cajones: '2',
              espacios1: [
                'Interior: 120.9 m²',
                'Terraza 1: 18.95 m²',
                'Piscina: N/A',
                'Terraza 2: N/A',
                'Jacuzzi: N/A',
                'Bodega: 1.8 m²',
                'Estacionamiento: 25 m²',
            ],
            espacios2: [
                'M2 Habitables: 140 m²',
            ],
          }
          



          // Depa 402

          const [depa402, setDepa402] = useState(false);

          const depa402Info = {
              titulo: 'DEPARTAMENTO ACQUA',
              arr: [
                'Cocina', 
                'Comedor', 
                'Sala', 
                'Recámara A',
                'Closet vestidor A',
                'Baño A',
                'Recámara B',
                'Closet B',
                'Baño B',
                'Recámara C',
                'Closet C',
                'Baño Completo',
                'Cuarto de servicio',
            ],
              plano: '/depas/Acqua.png',
              precio: '7,360,279.95',
              codigoDepa: '402',
              nivel: '2-7',
              cajones: '2',
              espacios1: [
                'Interior: 120.9 m²',
                'Terraza 1: 18.95 m²',
                'Piscina: N/A',
                'Terraza 2: N/A',
                'Jacuzzi: N/A',
                'Bodega: 1.8 m²',
                'Estacionamiento: 25 m²',
            ],
            espacios2: [
                'M2 Habitables: 140 m²',
            ],
          }
          



          // Depa 501

          const [depa501, setDepa501] = useState(false);

          const depa501Info = {
              titulo: 'DEPARTAMENTO ACQUA',
              arr: [
                'Cocina', 
                'Comedor', 
                'Sala', 
                'Recámara A',
                'Closet vestidor A',
                'Baño A',
                'Recámara B',
                'Closet B',
                'Baño B',
                'Recámara C',
                'Closet C',
                'Baño Completo',
                'Cuarto de servicio',
            ],
              plano: '/depas/Acqua.png',
              precio: '7,385,279.95',
              codigoDepa: '501',
              nivel: '2-7',
              cajones: '2',
              espacios1: [
                'Interior: 120.9 m²',
                'Terraza 1: 18.95 m²',
                'Piscina: N/A',
                'Terraza 2: N/A',
                'Jacuzzi: N/A',
                'Bodega: 1.8 m²',
                'Estacionamiento: 25 m²',
            ],
            espacios2: [
                'M2 Habitables: 140 m²',
            ],
          }



          // Depa 502

          const [depa502, setDepa502] = useState(false);

          const depa502Info = {
              titulo: 'DEPARTAMENTO ACQUA',
              arr: [
                'Cocina', 
                'Comedor', 
                'Sala', 
                'Recámara A',
                'Closet vestidor A',
                'Baño A',
                'Recámara B',
                'Closet B',
                'Baño B',
                'Recámara C',
                'Closet C',
                'Baño Completo',
                'Cuarto de servicio',
            ],
              plano: '/depas/Acqua.png',
              precio: '7,385,279.95',
              codigoDepa: '502',
              nivel: '2-7',
              cajones: '2',
              espacios1: [
                'Interior: 120.9 m²',
                'Terraza 1: 18.95 m²',
                'Piscina: N/A',
                'Terraza 2: N/A',
                'Jacuzzi: N/A',
                'Bodega: 1.8 m²',
                'Estacionamiento: 25 m²',
            ],
            espacios2: [
                'M2 Habitables: 140 m²',
            ],
          }



          // Depa 601

          const [depa601, setDepa601] = useState(false);

          const depa601Info = {
              titulo: 'DEPARTAMENTO ACQUA',
              arr: [
                'Cocina', 
                'Comedor', 
                'Sala', 
                'Recámara A',
                'Closet vestidor A',
                'Baño A',
                'Recámara B',
                'Closet B',
                'Baño B',
                'Recámara C',
                'Closet C',
                'Baño Completo',
                'Cuarto de servicio',
            ],
              plano: '/depas/Acqua.png',
              precio: '7,410,279.95',
              codigoDepa: '601',
              nivel: '2-7',
              cajones: '2',
              espacios1: [
                'Interior: 120.9 m²',
                'Terraza 1: 18.95 m²',
                'Piscina: N/A',
                'Terraza 2: N/A',
                'Jacuzzi: N/A',
                'Bodega: 1.8 m²',
                'Estacionamiento: 25 m²',
            ],
            espacios2: [
                'M2 Habitables: 140 m²',
            ],
          }



          // Depa 602

          const [depa602, setDepa602] = useState(false);

          const depa602Info = {
              titulo: 'DEPARTAMENTO ACQUA',
              arr: [
                'Cocina', 
                'Comedor', 
                'Sala', 
                'Recámara A',
                'Closet vestidor A',
                'Baño A',
                'Recámara B',
                'Closet B',
                'Baño B',
                'Recámara C',
                'Closet C',
                'Baño Completo',
                'Cuarto de servicio',
            ],
              plano: '/depas/Acqua.png',
              precio: '7,410,279.95',
              codigoDepa: '602',
              nivel: '2-7',
              cajones: '2',
              espacios1: [
                'Interior: 120.9 m²',
                'Terraza 1: 18.95 m²',
                'Piscina: N/A',
                'Terraza 2: N/A',
                'Jacuzzi: N/A',
                'Bodega: 1.8 m²',
                'Estacionamiento: 25 m²',
            ],
            espacios2: [
                'M2 Habitables: 140 m²',
            ],
          }



          // Depa 701

          const [depa701, setDepa701] = useState(false);

          const depa701Info = {
              titulo: 'DEPARTAMENTO ACQUA',
              arr: [
                'Cocina', 
                'Comedor', 
                'Sala', 
                'Recámara A',
                'Closet vestidor A',
                'Baño A',
                'Recámara B',
                'Closet B',
                'Baño B',
                'Recámara C',
                'Closet C',
                'Baño Completo',
                'Cuarto de servicio',
            ],
              plano: '/depas/Acqua.png',
              precio: '7,435,279.95',
              codigoDepa: '701',
              nivel: '2-7',
              cajones: '2',
              espacios1: [
                'Interior: 120.9 m²',
                'Terraza 1: 18.95 m²',
                'Piscina: N/A',
                'Terraza 2: N/A',
                'Jacuzzi: N/A',
                'Bodega: 1.8 m²',
                'Estacionamiento: 25 m²',
            ],
            espacios2: [
                'M2 Habitables: 140 m²',
            ],
          }



          // Depa 702

          const [depa702, setDepa702] = useState(false);

          const depa702Info = {
              titulo: 'DEPARTAMENTO ACQUA',
              arr: [
                'Cocina', 
                'Comedor', 
                'Sala', 
                'Recámara A',
                'Closet vestidor A',
                'Baño A',
                'Recámara B',
                'Closet B',
                'Baño B',
                'Recámara C',
                'Closet C',
                'Baño Completo',
                'Cuarto de servicio',
            ],
              plano: '/depas/Acqua.png',
              precio: '7,435,279.95',
              codigoDepa: '702',
              nivel: '2-7',
              cajones: '2',
              espacios1: [
                'Interior: 120.9 m²',
                'Terraza 1: 18.95 m²',
                'Piscina: N/A',
                'Terraza 2: N/A',
                'Jacuzzi: N/A',
                'Bodega: 1.8 m²',
                'Estacionamiento: 25 m²',
            ],
            espacios2: [
                'M2 Habitables: 140 m²',
            ],
          }



          // PHA

          const [depaPHA, setDepaPHA] = useState(false);

          const depaPHAInfo = {
              titulo: 'PENTHOUSE A',
              arr: [
                'Cocina', 
                'Alacena', 
                'Comedor', 
                'Sala',
                'Terraza',
                'Piscina',
                'Baño completo',
                'Terraza 2',
                'Recámara A',
                'Clóset vestidor A',
                'Baño A',
                'Recámara B',
                'Closet B',
                'Baño B',
                'Recámara C',
                'Closet C',
                'Recamara D',
                'Clóset vestidor D',
                'Baño D',
                'Cuarto de servicio',
                'Terraza 1',
                'Terraza 2',
              ],
              plano1: '/depas/PA-PH.png',
              plano2: '/depas/PB-PH.png',
              precio: '10,629,600.00',
              codigoDepa: 'pha',
              nivel: '8-9',
              cajones: '3',
              noTechados: '63.01 m²',
              espacios1: [
                  'Interior planta alta: 123 m²',
                  'Terraza 1 planta alta: 18.95 m²',
                  'Terraza 2 planta alta: 9.5 m²',
              ],
              espacios2: [
                'Interior planta baja: 60.3 m²',
                'Terraza 1 planta baja: 50.5 m²',
                'Terraza 2 planta alta: 32.6 m²',
              ],
              espacios3: [
                  'Bodega: 1.8 m²',
                  'Piscina: 11.35 m²',
                  'Estacionamiento: 37.5 m²',
                  'M2 Habitables: 295 m²',
              ],
          }



          // PHB

          const [depaPHB, setDepaPHB] = useState(false);

          const depaPHBInfo = {
              titulo: 'PENTHOUSE B',
              arr: [
                'Cocina', 
                'Alacena', 
                'Comedor', 
                'Sala',
                'Terraza',
                'Piscina',
                'Baño completo',
                'Terraza 2',
                'Recámara A',
                'Clóset vestidor A',
                'Baño A',
                'Recámara B',
                'Closet B',
                'Baño B',
                'Recámara C',
                'Closet C',
                'Recamara D',
                'Clóset vestidor D',
                'Baño D',
                'Cuarto de servicio',
                'Terraza 1',
                'Terraza 2',
              ],
              plano1: '/depas/PA-PH.png',
              plano2: '/depas/PB-PH.png',
              precio: '10,629,600.00',
              codigoDepa: 'phb',
              nivel: '8-9',
              cajones: '2',
              noTechados: '66.68 m²',
              espacios1: [
                'Interior planta alta: 123 m²',
                'Terraza 1 planta alta: 18.95 m²',
                'Terraza 2 planta alta: 9.5 m²',
            ],
            espacios2: [
              'Interior planta baja: 60.3 m²',
              'Terraza 1 planta baja: 50.5 m²',
              'Terraza 2 planta alta: 32.6 m²',
            ],
            espacios3: [
                'Bodega: 1.8 m²',
                'Piscina: 11.35 m²',
                'Estacionamiento: 37.5 m²',
                'M2 Habitables: 295 m²',
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
                        <button onClick={() => setDepa401(!depa401)} className='depa401'>401</button>
                        <button onClick={() => setDepa402(!depa402)} className='depa402'>402</button>
                        <button onClick={() => setDepa501(!depa501)} className='depa501'>501</button>
                        <button onClick={() => setDepa502(!depa502)} className='depa502'>502</button>
                        <button onClick={() => setDepa601(!depa601)} className='depa601'>601</button>
                        <button onClick={() => setDepa602(!depa602)} className='depa602'>602</button>
                        <button onClick={() => setDepa701(!depa701)} className='depa701'>701</button>
                        <button onClick={() => setDepa702(!depa702)} className='depa702'>702</button>
                        <button onClick={() => setDepaPHA(!depaPHA)} className='depaPHA-1'>PHA</button>
                        <button onClick={() => setDepaPHA(!depaPHA)} className='depaPHA-2'>PHA</button>
                        <button onClick={() => setDepaPHB(!depaPHB)} className='depaPHB-1'>PHB</button>
                        <button onClick={() => setDepaPHB(!depaPHB)} className='depaPHB-2'>PHB</button>
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
                    <Depa 
                        depa01={depa01}
                        setDepa01={setDepa01}
                        depaInfo={depa1}
                    />
                    <Depa 
                        depa01={depa02}
                        setDepa01={setDepa02}
                        depaInfo={depa2}
                    />
                    <Depa 
                        depa01={depa101}
                        setDepa01={setDepa101}
                        depaInfo={depa101Info}
                    />
                    <Depa 
                        depa01={depa102}
                        setDepa01={setDepa102}
                        depaInfo={depa102Info}
                    />
                    <Depa 
                        depa01={depa201}
                        setDepa01={setDepa201}
                        depaInfo={depa201Info}
                    />
                    <Depa 
                        depa01={depa202}
                        setDepa01={setDepa202}
                        depaInfo={depa202Info}
                    />
                    <Depa 
                        depa01={depa301}
                        setDepa01={setDepa301}
                        depaInfo={depa301Info}
                    />
                    <Depa 
                        depa01={depa302}
                        setDepa01={setDepa302}
                        depaInfo={depa302Info}
                    />
                    <Depa 
                        depa01={depa401}
                        setDepa01={setDepa401}
                        depaInfo={depa401Info}
                    />
                    <Depa 
                        depa01={depa402}
                        setDepa01={setDepa402}
                        depaInfo={depa402Info}
                    />
                    <Depa 
                        depa01={depa501}
                        setDepa01={setDepa501}
                        depaInfo={depa501Info}
                    />
                    <Depa 
                        depa01={depa502}
                        setDepa01={setDepa502}
                        depaInfo={depa502Info}
                    />
                    <Depa 
                        depa01={depa601}
                        setDepa01={setDepa601}
                        depaInfo={depa601Info}
                    />
                    <Depa 
                        depa01={depa602}
                        setDepa01={setDepa602}
                        depaInfo={depa602Info}
                    />
                    <Depa 
                        depa01={depa701}
                        setDepa01={setDepa701}
                        depaInfo={depa701Info}
                    />
                    <Depa 
                        depa01={depa702}
                        setDepa01={setDepa702}
                        depaInfo={depa702Info}
                    />
                    <PentHouse 
                        depa01={depaPHA}
                        setDepa01={setDepaPHA}
                        depaInfo={depaPHAInfo}
                    />
                    <PentHouse 
                        depa01={depaPHB}
                        setDepa01={setDepaPHB}
                        depaInfo={depaPHBInfo}
                    />
                
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
        position: static;
        margin-bottom: 150px;
        margin-top: 0;
        width: 100%;
        text-align: center;
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
                    @media (max-width: 850px) {
                        opacity: 0.7;
                    }
                }
                .depa01 {
                    width: 109px;
                    height: 44px;
                    background-color: #9E4C3B;
                    right: 55px;
                    bottom: 13px;
                }
                .depa02 {
                    width: 109px;
                    height: 44px;
                    background-color: #808642;
                    left: 50px;
                    bottom: 13px;
                }
                .depa101 {
                    width: 109px;
                    height: 38px;
                    background-color: #808642;
                    right: 55px;
                    bottom: 60px;
                }
                .depa102 {
                    width: 109px;
                    height: 38px;
                    background-color: #808642;
                    left: 50px;
                    bottom: 60px;
                }
                .depa201 {
                    width: 109px;
                    height: 38px;
                    background-color: #808642;
                    right: 55px;
                    bottom: 104px;
                }
                .depa202 {
                    width: 109px;
                    height: 38px;
                    background-color: #808642;
                    left: 50px;
                    bottom: 104px;
                }
                .depa301 {
                    width: 109px;
                    height: 38px;
                    background-color: #808642;
                    right: 55px;
                    bottom: 147px;
                }
                .depa302 {
                    width: 109px;
                    height: 38px;
                    background-color: #808642;
                    left: 50px;
                    bottom: 147px;
                }
                .depa401 {
                    width: 109px;
                    height: 38px;
                    background-color: #808642;
                    right: 55px;
                    bottom: 191px;
                }
                .depa402 {
                    width: 109px;
                    height: 38px;
                    background-color: #808642;
                    left: 50px;
                    bottom: 191px;
                }
                .depa501 {
                    width: 109px;
                    height: 38px;
                    background-color: #808642;
                    right: 55px;
                    bottom: 234px;
                }
                .depa502 {
                    width: 109px;
                    height: 38px;
                    background-color: #9E4C3B;
                    left: 50px;
                    bottom: 234px;
                }
                .depa601 {
                    width: 109px;
                    height: 38px;
                    background-color: #808642;
                    right: 55px;
                    bottom: 280px;
                }
                .depa602 {
                    width: 109px;
                    height: 38px;
                    background-color: #808642;
                    left: 50px;
                    bottom: 280px;
                }
                .depa701 {
                    width: 109px;
                    height: 38px;
                    background-color: #808642;
                    right: 55px;
                    bottom: 322px;
                }
                .depa702 {
                    width: 109px;
                    height: 38px;
                    background-color: #9E4C3B;
                    left: 50px;
                    bottom: 322px;
                }
                .depaPHA-1 {
                    width: 109px;
                    height: 38px;
                    background-color: #808642;
                    right: 55px;
                    bottom: 366px;
                }
                .depaPHA-2 {
                    width: 109px;
                    height: 38px;
                    background-color: #808642;
                    right: 55px;
                    bottom: 409px;
                }
                .depaPHB-1 {
                    width: 109px;
                    height: 38px;
                    background-color: #9E4C3B;
                    left: 50px;
                    bottom: 366px;
                }
                .depaPHB-2 {
                    width: 109px;
                    height: 38px;
                    background-color: #9E4C3B;
                    left: 50px;
                    bottom: 409px;
                }
            }
        }
    }
    .financiamiento {
        width: 50%;
        text-align: center;
        @media (max-width: 850px) {
            width: 100%;
            margin-bottom: 50px;
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