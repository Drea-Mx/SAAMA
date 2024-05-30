import React, {useState} from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"
import Depa from './modales/Depa'
import App from './Cont'
import { Link } from 'gatsby'
import PentHouse from './modales/PentHouse'

const Cotizador = ({data}) => {

    const [depa01, setDepa01] = useState(false);


    // Depa 001
    const depa1 = {
        titulo: data.sanityFinanciamientoPage.depa001.title,
        arr: data.sanityFinanciamientoPage.depa001.areas,
        plano: data.sanityFinanciamientoPage.depa001.image.asset.url,
        precio: data.sanityFinanciamientoPage.depa001.precio,
        codigoDepa: 'GH1',
        nivel: data.sanityFinanciamientoPage.depa001.nivel,
        cajones: '2',
        espacios1: [
            `Interior: ${data.sanityFinanciamientoPage.depa001.interior}`,
            `Terraza 1: ${data.sanityFinanciamientoPage.depa001.terraza}`,
            `Piscina: ${data.sanityFinanciamientoPage.depa001.piscina}`,
            `Terraza 2: ${data.sanityFinanciamientoPage.depa001.terraza2}`,
            `Jacuzzi: ${data.sanityFinanciamientoPage.depa001.jacuzzi}`,
            `Bodega: ${data.sanityFinanciamientoPage.depa001.bodega}`,
            `Estacionamiento: ${data.sanityFinanciamientoPage.depa001.estacionamiento}`,
        ],
        espacios2: [
            `M2 Habitables: ${data.sanityFinanciamientoPage.depa001.m2Habitables}`,
        ],
    }


        // Depa 002
    const [depa02, setDepa02] = useState(false);

    const depa2 = {
        titulo: data.sanityFinanciamientoPage.depa002.title,
        arr: data.sanityFinanciamientoPage.depa002.areas,
        plano: data.sanityFinanciamientoPage.depa002.image.asset.url,
        precio: data.sanityFinanciamientoPage.depa002.precio,
        codigoDepa: 'GH2',
        nivel: data.sanityFinanciamientoPage.depa002.nivel,
        cajones: '2',
        espacios1: [
            `Interior: ${data.sanityFinanciamientoPage.depa002.interior}`,
            `Terraza 1: ${data.sanityFinanciamientoPage.depa002.terraza}`,
            `Piscina: ${data.sanityFinanciamientoPage.depa002.piscina}`,
            `Terraza 2: ${data.sanityFinanciamientoPage.depa002.terraza2}`,
            `Jacuzzi: ${data.sanityFinanciamientoPage.depa002.jacuzzi}`,
            `Bodega: ${data.sanityFinanciamientoPage.depa002.bodega}`,
            `Estacionamiento: ${data.sanityFinanciamientoPage.depa002.estacionamiento}`,
        ],
        espacios2: [
            `M2 Habitables: ${data.sanityFinanciamientoPage.depa002.m2Habitables}`,
        ],
    }


        // Depa 101


    const [depa101, setDepa101] = useState(false);

    const depa101Info = {
        titulo: data.sanityFinanciamientoPage.depa101.title,
        arr: data.sanityFinanciamientoPage.depa101.areas,
        plano: data.sanityFinanciamientoPage.depa101.image.asset.url,
        precio: data.sanityFinanciamientoPage.depa101.precio,
        nivel: data.sanityFinanciamientoPage.depa101.nivel,
        espacios1: [
            `Interior: ${data.sanityFinanciamientoPage.depa101.interior}`,
            `Terraza 1: ${data.sanityFinanciamientoPage.depa101.terraza}`,
            `Piscina: ${data.sanityFinanciamientoPage.depa101.piscina}`,
            `Terraza 2: ${data.sanityFinanciamientoPage.depa101.terraza2}`,
            `Jacuzzi: ${data.sanityFinanciamientoPage.depa101.jacuzzi}`,
            `Bodega: ${data.sanityFinanciamientoPage.depa101.bodega}`,
            `Estacionamiento: ${data.sanityFinanciamientoPage.depa101.estacionamiento}`,
        ],
        espacios2: [
            `M2 Habitables: ${data.sanityFinanciamientoPage.depa101.m2Habitables}`,
        ],
        codigoDepa: '101',
        cajones: '2',
    }


            // Depa 102

    const [depa102, setDepa102] = useState(false);

    const depa102Info = {
        titulo: data.sanityFinanciamientoPage.depa102.title,
        arr: data.sanityFinanciamientoPage.depa102.areas,
        plano: data.sanityFinanciamientoPage.depa102.image.asset.url,
        precio: data.sanityFinanciamientoPage.depa102.precio,
        nivel: data.sanityFinanciamientoPage.depa102.nivel,
        espacios1: [
            `Interior: ${data.sanityFinanciamientoPage.depa102.interior}`,
            `Terraza 1: ${data.sanityFinanciamientoPage.depa102.terraza}`,
            `Piscina: ${data.sanityFinanciamientoPage.depa102.piscina}`,
            `Terraza 2: ${data.sanityFinanciamientoPage.depa102.terraza2}`,
            `Jacuzzi: ${data.sanityFinanciamientoPage.depa102.jacuzzi}`,
            `Bodega: ${data.sanityFinanciamientoPage.depa102.bodega}`,
            `Estacionamiento: ${data.sanityFinanciamientoPage.depa102.estacionamiento}`,
        ],
        espacios2: [
            `M2 Habitables: ${data.sanityFinanciamientoPage.depa102.m2Habitables}`,
        ],

        codigoDepa: '102',
        cajones: '2',
        
    }

        // Depa 201

    const [depa201, setDepa201] = useState(false);

    const depa201Info = {
        titulo: data.sanityFinanciamientoPage.depa201.title,
        arr: data.sanityFinanciamientoPage.depa201.areas,
        plano: data.sanityFinanciamientoPage.depa201.image.asset.url,
        precio: data.sanityFinanciamientoPage.depa201.precio,
        nivel: data.sanityFinanciamientoPage.depa201.nivel,
        espacios1: [
            `Interior: ${data.sanityFinanciamientoPage.depa201.interior}`,
            `Terraza 1: ${data.sanityFinanciamientoPage.depa201.terraza}`,
            `Piscina: ${data.sanityFinanciamientoPage.depa201.piscina}`,
            `Terraza 2: ${data.sanityFinanciamientoPage.depa201.terraza2}`,
            `Jacuzzi: ${data.sanityFinanciamientoPage.depa201.jacuzzi}`,
            `Bodega: ${data.sanityFinanciamientoPage.depa201.bodega}`,
            `Estacionamiento: ${data.sanityFinanciamientoPage.depa201.estacionamiento}`,
        ],
        espacios2: [
            `M2 Habitables: ${data.sanityFinanciamientoPage.depa201.m2Habitables}`,
        ],

        codigoDepa: '201',
        cajones: '2',
    }


        // Depa 202

    const [depa202, setDepa202] = useState(false);

    const depa202Info = {
        titulo: data.sanityFinanciamientoPage.depa202.title,
        arr: data.sanityFinanciamientoPage.depa202.areas,
        plano: data.sanityFinanciamientoPage.depa202.image.asset.url,
        precio: data.sanityFinanciamientoPage.depa202.precio,
        nivel: data.sanityFinanciamientoPage.depa202.nivel,
        espacios1: [
            `Interior: ${data.sanityFinanciamientoPage.depa202.interior}`,
            `Terraza 1: ${data.sanityFinanciamientoPage.depa202.terraza}`,
            `Piscina: ${data.sanityFinanciamientoPage.depa202.piscina}`,
            `Terraza 2: ${data.sanityFinanciamientoPage.depa202.terraza2}`,
            `Jacuzzi: ${data.sanityFinanciamientoPage.depa202.jacuzzi}`,
            `Bodega: ${data.sanityFinanciamientoPage.depa202.bodega}`,
            `Estacionamiento: ${data.sanityFinanciamientoPage.depa202.estacionamiento}`,
        ],
        espacios2: [
            `M2 Habitables: ${data.sanityFinanciamientoPage.depa202.m2Habitables}`,
        ],

        codigoDepa: '202',
        cajones: '2',
    }



          // Depa 301

          const [depa301, setDepa301] = useState(false);

          const depa301Info = {
            titulo: data.sanityFinanciamientoPage.depa301.title,
            arr: data.sanityFinanciamientoPage.depa301.areas,
            plano: data.sanityFinanciamientoPage.depa301.image.asset.url,
            precio: data.sanityFinanciamientoPage.depa301.precio,
            nivel: data.sanityFinanciamientoPage.depa301.nivel,
            espacios1: [
                `Interior: ${data.sanityFinanciamientoPage.depa301.interior}`,
                `Terraza 1: ${data.sanityFinanciamientoPage.depa301.terraza}`,
                `Piscina: ${data.sanityFinanciamientoPage.depa301.piscina}`,
                `Terraza 2: ${data.sanityFinanciamientoPage.depa301.terraza2}`,
                `Jacuzzi: ${data.sanityFinanciamientoPage.depa301.jacuzzi}`,
                `Bodega: ${data.sanityFinanciamientoPage.depa301.bodega}`,
                `Estacionamiento: ${data.sanityFinanciamientoPage.depa301.estacionamiento}`,
            ],
            espacios2: [
                `M2 Habitables: ${data.sanityFinanciamientoPage.depa301.m2Habitables}`,
            ],
    
            codigoDepa: '301',
            cajones: '2',
          }

          



          // Depa 302

          const [depa302, setDepa302] = useState(false);

          const depa302Info = {
            titulo: data.sanityFinanciamientoPage.depa302.title,
            arr: data.sanityFinanciamientoPage.depa302.areas,
            plano: data.sanityFinanciamientoPage.depa302.image.asset.url,
            precio: data.sanityFinanciamientoPage.depa302.precio,
            nivel: data.sanityFinanciamientoPage.depa302.nivel,
            espacios1: [
                `Interior: ${data.sanityFinanciamientoPage.depa302.interior}`,
                `Terraza 1: ${data.sanityFinanciamientoPage.depa302.terraza}`,
                `Piscina: ${data.sanityFinanciamientoPage.depa302.piscina}`,
                `Terraza 2: ${data.sanityFinanciamientoPage.depa302.terraza2}`,
                `Jacuzzi: ${data.sanityFinanciamientoPage.depa302.jacuzzi}`,
                `Bodega: ${data.sanityFinanciamientoPage.depa302.bodega}`,
                `Estacionamiento: ${data.sanityFinanciamientoPage.depa302.estacionamiento}`,
            ],
            espacios2: [
                `M2 Habitables: ${data.sanityFinanciamientoPage.depa302.m2Habitables}`,
            ],
    
            codigoDepa: '302',
            cajones: '2',
          }
          



          // Depa 401

          const [depa401, setDepa401] = useState(false);

          const depa401Info = {
            titulo: data.sanityFinanciamientoPage.depa401.title,
            arr: data.sanityFinanciamientoPage.depa401.areas,
            plano: data.sanityFinanciamientoPage.depa401.image.asset.url,
            precio: data.sanityFinanciamientoPage.depa401.precio,
            nivel: data.sanityFinanciamientoPage.depa401.nivel,
            espacios1: [
                `Interior: ${data.sanityFinanciamientoPage.depa401.interior}`,
                `Terraza 1: ${data.sanityFinanciamientoPage.depa401.terraza}`,
                `Piscina: ${data.sanityFinanciamientoPage.depa401.piscina}`,
                `Terraza 2: ${data.sanityFinanciamientoPage.depa401.terraza2}`,
                `Jacuzzi: ${data.sanityFinanciamientoPage.depa401.jacuzzi}`,
                `Bodega: ${data.sanityFinanciamientoPage.depa401.bodega}`,
                `Estacionamiento: ${data.sanityFinanciamientoPage.depa401.estacionamiento}`,
            ],
            espacios2: [
                `M2 Habitables: ${data.sanityFinanciamientoPage.depa401.m2Habitables}`,
            ],
    
            codigoDepa: '401',
            cajones: '2',
          }
          



          // Depa 402

          const [depa402, setDepa402] = useState(false);

          const depa402Info = {
            titulo: data.sanityFinanciamientoPage.depa402.title,
            arr: data.sanityFinanciamientoPage.depa402.areas,
            plano: data.sanityFinanciamientoPage.depa402.image.asset.url,
            precio: data.sanityFinanciamientoPage.depa402.precio,
            nivel: data.sanityFinanciamientoPage.depa402.nivel,
            espacios1: [
                `Interior: ${data.sanityFinanciamientoPage.depa402.interior}`,
                `Terraza 1: ${data.sanityFinanciamientoPage.depa402.terraza}`,
                `Piscina: ${data.sanityFinanciamientoPage.depa402.piscina}`,
                `Terraza 2: ${data.sanityFinanciamientoPage.depa402.terraza2}`,
                `Jacuzzi: ${data.sanityFinanciamientoPage.depa402.jacuzzi}`,
                `Bodega: ${data.sanityFinanciamientoPage.depa402.bodega}`,
                `Estacionamiento: ${data.sanityFinanciamientoPage.depa402.estacionamiento}`,
            ],
            espacios2: [
                `M2 Habitables: ${data.sanityFinanciamientoPage.depa402.m2Habitables}`,
            ],
    
            codigoDepa: '402',
            cajones: '2',
          }
          



          // Depa 501

          const [depa501, setDepa501] = useState(false);

          const depa501Info = {
            titulo: data.sanityFinanciamientoPage.depa501.title,
            arr: data.sanityFinanciamientoPage.depa501.areas,
            plano: data.sanityFinanciamientoPage.depa501.image.asset.url,
            precio: data.sanityFinanciamientoPage.depa501.precio,
            nivel: data.sanityFinanciamientoPage.depa501.nivel,
            espacios1: [
                `Interior: ${data.sanityFinanciamientoPage.depa501.interior}`,
                `Terraza 1: ${data.sanityFinanciamientoPage.depa501.terraza}`,
                `Piscina: ${data.sanityFinanciamientoPage.depa501.piscina}`,
                `Terraza 2: ${data.sanityFinanciamientoPage.depa501.terraza2}`,
                `Jacuzzi: ${data.sanityFinanciamientoPage.depa501.jacuzzi}`,
                `Bodega: ${data.sanityFinanciamientoPage.depa501.bodega}`,
                `Estacionamiento: ${data.sanityFinanciamientoPage.depa501.estacionamiento}`,
            ],
            espacios2: [
                `M2 Habitables: ${data.sanityFinanciamientoPage.depa501.m2Habitables}`,
            ],
    
            codigoDepa: '501',
            cajones: '2',
          }



          // Depa 502

          const [depa502, setDepa502] = useState(false);

          const depa502Info = {
            titulo: data.sanityFinanciamientoPage.depa502.title,
            arr: data.sanityFinanciamientoPage.depa502.areas,
            plano: data.sanityFinanciamientoPage.depa502.image.asset.url,
            precio: data.sanityFinanciamientoPage.depa502.precio,
            nivel: data.sanityFinanciamientoPage.depa502.nivel,
            espacios1: [
                `Interior: ${data.sanityFinanciamientoPage.depa502.interior}`,
                `Terraza 1: ${data.sanityFinanciamientoPage.depa502.terraza}`,
                `Piscina: ${data.sanityFinanciamientoPage.depa502.piscina}`,
                `Terraza 2: ${data.sanityFinanciamientoPage.depa502.terraza2}`,
                `Jacuzzi: ${data.sanityFinanciamientoPage.depa502.jacuzzi}`,
                `Bodega: ${data.sanityFinanciamientoPage.depa502.bodega}`,
                `Estacionamiento: ${data.sanityFinanciamientoPage.depa502.estacionamiento}`,
            ],
            espacios2: [
                `M2 Habitables: ${data.sanityFinanciamientoPage.depa502.m2Habitables}`,
            ],
    
            codigoDepa: '502',
            cajones: '2',
          }



          // Depa 601

          const [depa601, setDepa601] = useState(false);

          const depa601Info = {
            titulo: data.sanityFinanciamientoPage.depa601.title,
            arr: data.sanityFinanciamientoPage.depa601.areas,
            plano: data.sanityFinanciamientoPage.depa601.image.asset.url,
            precio: data.sanityFinanciamientoPage.depa601.precio,
            nivel: data.sanityFinanciamientoPage.depa601.nivel,
            espacios1: [
                `Interior: ${data.sanityFinanciamientoPage.depa601.interior}`,
                `Terraza 1: ${data.sanityFinanciamientoPage.depa601.terraza}`,
                `Piscina: ${data.sanityFinanciamientoPage.depa601.piscina}`,
                `Terraza 2: ${data.sanityFinanciamientoPage.depa601.terraza2}`,
                `Jacuzzi: ${data.sanityFinanciamientoPage.depa601.jacuzzi}`,
                `Bodega: ${data.sanityFinanciamientoPage.depa601.bodega}`,
                `Estacionamiento: ${data.sanityFinanciamientoPage.depa601.estacionamiento}`,
            ],
            espacios2: [
                `M2 Habitables: ${data.sanityFinanciamientoPage.depa601.m2Habitables}`,
            ],
    
            codigoDepa: '601',
            cajones: '2',
          }



          // Depa 602

          const [depa602, setDepa602] = useState(false);

          const depa602Info = {
            titulo: data.sanityFinanciamientoPage.depa602.title,
            arr: data.sanityFinanciamientoPage.depa602.areas,
            plano: data.sanityFinanciamientoPage.depa602.image.asset.url,
            precio: data.sanityFinanciamientoPage.depa602.precio,
            nivel: data.sanityFinanciamientoPage.depa602.nivel,
            espacios1: [
                `Interior: ${data.sanityFinanciamientoPage.depa602.interior}`,
                `Terraza 1: ${data.sanityFinanciamientoPage.depa602.terraza}`,
                `Piscina: ${data.sanityFinanciamientoPage.depa602.piscina}`,
                `Terraza 2: ${data.sanityFinanciamientoPage.depa602.terraza2}`,
                `Jacuzzi: ${data.sanityFinanciamientoPage.depa602.jacuzzi}`,
                `Bodega: ${data.sanityFinanciamientoPage.depa602.bodega}`,
                `Estacionamiento: ${data.sanityFinanciamientoPage.depa602.estacionamiento}`,
            ],
            espacios2: [
                `M2 Habitables: ${data.sanityFinanciamientoPage.depa602.m2Habitables}`,
            ],
    
            codigoDepa: '602',
            cajones: '2',
          }



          // Depa 701

          const [depa701, setDepa701] = useState(false);

          const depa701Info = {
            titulo: data.sanityFinanciamientoPage.depa701.title,
            arr: data.sanityFinanciamientoPage.depa701.areas,
            plano: data.sanityFinanciamientoPage.depa701.image.asset.url,
            precio: data.sanityFinanciamientoPage.depa701.precio,
            nivel: data.sanityFinanciamientoPage.depa701.nivel,
            espacios1: [
                `Interior: ${data.sanityFinanciamientoPage.depa701.interior}`,
                `Terraza 1: ${data.sanityFinanciamientoPage.depa701.terraza}`,
                `Piscina: ${data.sanityFinanciamientoPage.depa701.piscina}`,
                `Terraza 2: ${data.sanityFinanciamientoPage.depa701.terraza2}`,
                `Jacuzzi: ${data.sanityFinanciamientoPage.depa701.jacuzzi}`,
                `Bodega: ${data.sanityFinanciamientoPage.depa701.bodega}`,
                `Estacionamiento: ${data.sanityFinanciamientoPage.depa701.estacionamiento}`,
            ],
            espacios2: [
                `M2 Habitables: ${data.sanityFinanciamientoPage.depa701.m2Habitables}`,
            ],
    
            codigoDepa: '701',
            cajones: '2',
          }



          // Depa 702

          const [depa702, setDepa702] = useState(false);

          const depa702Info = {
            titulo: data.sanityFinanciamientoPage.depa702.title,
            arr: data.sanityFinanciamientoPage.depa702.areas,
            plano: data.sanityFinanciamientoPage.depa702.image.asset.url,
            precio: data.sanityFinanciamientoPage.depa702.precio,
            nivel: data.sanityFinanciamientoPage.depa702.nivel,
            espacios1: [
                `Interior: ${data.sanityFinanciamientoPage.depa702.interior}`,
                `Terraza 1: ${data.sanityFinanciamientoPage.depa702.terraza}`,
                `Piscina: ${data.sanityFinanciamientoPage.depa702.piscina}`,
                `Terraza 2: ${data.sanityFinanciamientoPage.depa702.terraza2}`,
                `Jacuzzi: ${data.sanityFinanciamientoPage.depa702.jacuzzi}`,
                `Bodega: ${data.sanityFinanciamientoPage.depa702.bodega}`,
                `Estacionamiento: ${data.sanityFinanciamientoPage.depa702.estacionamiento}`,
            ],
            espacios2: [
                `M2 Habitables: ${data.sanityFinanciamientoPage.depa702.m2Habitables}`,
            ],
    
            codigoDepa: '702',
            cajones: '2',
          }



          // PHA

          const [depaPHA, setDepaPHA] = useState(false);

          const depaPHAInfo = {
              titulo: data.sanityFinanciamientoPage.depaPHA.title,
              arr: data.sanityFinanciamientoPage.depaPHA.areas,
              plano1: `${data.sanityFinanciamientoPage.depaPHA.plantaAlta.asset.url}`,
              plano2: `${data.sanityFinanciamientoPage.depaPHA.plantaBaja.asset.url}`,
              precio: `${data.sanityFinanciamientoPage.depaPHA.precio}`,
              codigoDepa: 'pha',
              nivel: `${data.sanityFinanciamientoPage.depaPHA.nivel}`,
              cajones: '3',
              noTechados: `${data.sanityFinanciamientoPage.depaPHA.noTechados}`,
              espacios1: [
                  `Interior planta alta: ${data.sanityFinanciamientoPage.depaPHA.interiorPlantaAlta}`,
                  `Terraza 1 planta alta: ${data.sanityFinanciamientoPage.depaPHA.terraza1PlantaAlta}`,
                  `Terraza 2 planta alta: ${data.sanityFinanciamientoPage.depaPHA.terraza2PlantaAlta}`,
              ],
              espacios2: [
                `Interior planta baja: ${data.sanityFinanciamientoPage.depaPHA.interiorPlantaBaja}`,
              `Terraza 1 planta baja: ${data.sanityFinanciamientoPage.depaPHA.terraza1PlantaBaja}`,
                `Terraza 2 planta alta: ${data.sanityFinanciamientoPage.depaPHA.terraza2PlantaBaja}`,
              ],
              espacios3: [
                  `Bodega: ${data.sanityFinanciamientoPage.depaPHA.bodega}`,
                  `Piscina: ${data.sanityFinanciamientoPage.depaPHA.piscina}`,
                  `Estacionamiento: ${data.sanityFinanciamientoPage.depaPHA.estacionamiento}`,
                  `M2 Habitables: ${data.sanityFinanciamientoPage.depaPHA.m2Habitables}`,
              ],
          }



          // PHB

          const [depaPHB, setDepaPHB] = useState(false);

          const depaPHBInfo = {
            titulo: data.sanityFinanciamientoPage.depaPHB.title,
            arr: data.sanityFinanciamientoPage.depaPHB.areas,
            plano1: `${data.sanityFinanciamientoPage.depaPHB.plantaAlta.asset.url}`,
            plano2: `${data.sanityFinanciamientoPage.depaPHB.plantaBaja.asset.url}`,
            precio: `${data.sanityFinanciamientoPage.depaPHB.precio}`,
            codigoDepa: 'phb',
            nivel: `${data.sanityFinanciamientoPage.depaPHB.nivel}`,
            cajones: '3',
            noTechados: `${data.sanityFinanciamientoPage.depaPHB.noTechados}`,
            espacios1: [
                `Interior planta alta: ${data.sanityFinanciamientoPage.depaPHB.interiorPlantaAlta}`,
                `Terraza 1 planta alta: ${data.sanityFinanciamientoPage.depaPHB.terraza1PlantaAlta}`,
                `Terraza 2 planta alta: ${data.sanityFinanciamientoPage.depaPHB.terraza2PlantaAlta}`,
            ],
            espacios2: [
              `Interior planta baja: ${data.sanityFinanciamientoPage.depaPHB.interiorPlantaBaja}`,
            `Terraza 1 planta baja: ${data.sanityFinanciamientoPage.depaPHB.terraza1PlantaBaja}`,
              `Terraza 2 planta alta: ${data.sanityFinanciamientoPage.depaPHB.terraza2PlantaBaja}`,
            ],
            espacios3: [
                `Bodega: ${data.sanityFinanciamientoPage.depaPHB.bodega}`,
                `Piscina: ${data.sanityFinanciamientoPage.depaPHB.piscina}`,
                `Estacionamiento: ${data.sanityFinanciamientoPage.depaPHB.estacionamiento}`,
                `M2 Habitables: ${data.sanityFinanciamientoPage.depaPHB.m2Habitables}`,
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
                        <button onClick={() => setDepa01(!depa01)} className={`depa01 ${data.sanityFinanciamientoPage.depa001.disponible === true }`}>001</button>
                        <button onClick={() => setDepa02(!depa02)} className={`depa02 ${data.sanityFinanciamientoPage.depa002.disponible === true }`}>002</button>
                        <button onClick={() => setDepa101(!depa101)} className={`depa101 ${data.sanityFinanciamientoPage.depa101.disponible === true }`}>101</button>
                        <button onClick={() => setDepa102(!depa102)} className={`depa102 ${data.sanityFinanciamientoPage.depa102.disponible === true }`}>102</button>
                        <button onClick={() => setDepa201(!depa201)} className={`depa201 ${data.sanityFinanciamientoPage.depa201.disponible === true }`}>201</button>
                        <button onClick={() => setDepa202(!depa202)} className={`depa202 ${data.sanityFinanciamientoPage.depa202.disponible === true }`}>202</button>
                        <button onClick={() => setDepa301(!depa301)} className={`depa301 ${data.sanityFinanciamientoPage.depa301.disponible === true }`}>301</button>
                        <button onClick={() => setDepa302(!depa302)} className={`depa302 ${data.sanityFinanciamientoPage.depa302.disponible === true }`}>302</button>
                        <button onClick={() => setDepa401(!depa401)} className={`depa401 ${data.sanityFinanciamientoPage.depa401.disponible === true }`}>401</button>
                        <button onClick={() => setDepa402(!depa402)} className={`depa402 ${data.sanityFinanciamientoPage.depa402.disponible === true }`}>402</button>
                        <button onClick={() => setDepa501(!depa501)} className={`depa501 ${data.sanityFinanciamientoPage.depa501.disponible === true }`}>501</button>
                        <button onClick={() => setDepa502(!depa502)} className={`depa502 ${data.sanityFinanciamientoPage.depa502.disponible === true }`}>502</button>
                        <button onClick={() => setDepa601(!depa601)} className={`depa601 ${data.sanityFinanciamientoPage.depa601.disponible === true }`}>601</button>
                        <button onClick={() => setDepa602(!depa602)} className={`depa602 ${data.sanityFinanciamientoPage.depa602.disponible === true }`}>602</button>
                        <button onClick={() => setDepa701(!depa701)} className={`depa701 ${data.sanityFinanciamientoPage.depa701.disponible === true }`}>701</button>
                        <button onClick={() => setDepa702(!depa702)} className={`depa702 ${data.sanityFinanciamientoPage.depa702.disponible === true }`}>702</button>
                        <button onClick={() => setDepaPHA(!depaPHA)} className={`depaPHA-1 ${data.sanityFinanciamientoPage.depaPHA.disponible === true }`}>PHA</button>
                        <button onClick={() => setDepaPHA(!depaPHA)} className={`depaPHA-2 ${data.sanityFinanciamientoPage.depaPHA.disponible === true }`}>PHA</button>
                        <button onClick={() => setDepaPHB(!depaPHB)} className={`depaPHB-1 ${data.sanityFinanciamientoPage.depaPHB.disponible === true }`}>PHB</button>
                        <button onClick={() => setDepaPHB(!depaPHB)} className={`depaPHB-2 ${data.sanityFinanciamientoPage.depaPHB.disponible === true }`}>PHB</button>
                    </div>
                </div>
            </motion.div>
            <motion.div  
                className="financiamiento" 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h2>{data.sanityFinanciamientoPage.title}</h2>
                <ul className='datos'>



                {data.sanityFinanciamientoPage.items.map((item) => {
                    
                                return (
                                    <li className='item'>
                                        <h2>{item.title}</h2>
                                        <p>{item.description}</p>
                                    </li>
                                )
                            })}



                </ul>
                <div className='counter'>
                    <App date={data.sanityFinanciamientoPage.date} />
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
                .true {
                    background-color: #808642;
                }
                .false {
                    background-color: #9E4C3B;
                }
                .depa01 {
                    width: 109px;
                    height: 44px;
                    right: 55px;
                    bottom: 13px;
                }
                .depa02 {
                    width: 109px;
                    height: 44px;
                    left: 50px;
                    bottom: 13px;
                }
                .depa101 {
                    width: 109px;
                    height: 38px;
                    right: 55px;
                    bottom: 60px;
                }
                .depa102 {
                    width: 109px;
                    height: 38px;
                    left: 50px;
                    bottom: 60px;
                }
                .depa201 {
                    width: 109px;
                    height: 38px;
                    right: 55px;
                    bottom: 104px;
                }
                .depa202 {
                    width: 109px;
                    height: 38px;
                    left: 50px;
                    bottom: 104px;
                }
                .depa301 {
                    width: 109px;
                    height: 38px;
                    right: 55px;
                    bottom: 147px;
                }
                .depa302 {
                    width: 109px;
                    height: 38px;
                    left: 50px;
                    bottom: 147px;
                }
                .depa401 {
                    width: 109px;
                    height: 38px;
                    right: 55px;
                    bottom: 191px;
                }
                .depa402 {
                    width: 109px;
                    height: 38px;
                    left: 50px;
                    bottom: 191px;
                }
                .depa501 {
                    width: 109px;
                    height: 38px;
                    right: 55px;
                    bottom: 234px;
                }
                .depa502 {
                    width: 109px;
                    height: 38px;
                    left: 50px;
                    bottom: 234px;
                }
                .depa601 {
                    width: 109px;
                    height: 38px;
                    right: 55px;
                    bottom: 280px;
                }
                .depa602 {
                    width: 109px;
                    height: 38px;
                    left: 50px;
                    bottom: 280px;
                }
                .depa701 {
                    width: 109px;
                    height: 38px;
                    right: 55px;
                    bottom: 322px;
                }
                .depa702 {
                    width: 109px;
                    height: 38px;
                    left: 50px;
                    bottom: 322px;
                }
                .depaPHA-1 {
                    width: 109px;
                    height: 38px;
                    right: 55px;
                    bottom: 366px;
                }
                .depaPHA-2 {
                    width: 109px;
                    height: 38px;
                    right: 55px;
                    bottom: 409px;
                }
                .depaPHB-1 {
                    width: 109px;
                    height: 38px;
                    left: 50px;
                    bottom: 366px;
                }
                .depaPHB-2 {
                    width: 109px;
                    height: 38px;
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