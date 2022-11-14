import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { motion } from "framer-motion"

const Amenidades = () => {

    return(
        <UbicacionContainer>
            <div className="iconos">
                <motion.div  
                    className="icono" 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <StaticImage 
                        src="../../assets/images/amenidades/amenidades1.png" 
                        alt="SAAMA Departamentos" 
                        layout="fullWidth"
                        placeholder="blurred"
                    />
                    <p>TERRAZA</p>
                </motion.div>
                <motion.div  
                    className="icono" 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <StaticImage 
                        src="../../assets/images/amenidades/amenidades2.png" 
                        alt="SAAMA Departamentos" 
                        layout="fullWidth"
                        placeholder="blurred"
                    />
                    <p>BAR</p>
                </motion.div>
                <motion.div  
                    className="icono" 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{delay: 0.1, duration: 0.5 }}
                >
                    <StaticImage 
                        src="../../assets/images/amenidades/amenidades3.png" 
                        alt="SAAMA Departamentos" 
                        layout="fullWidth"
                        placeholder="blurred"
                    />
                    <p>ALACENA</p>
                </motion.div>
                <motion.div  
                    className="icono" 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{delay: 0.2, duration: 0.5 }}
                >
                    <StaticImage 
                        src="../../assets/images/amenidades/amenidades4.png" 
                        alt="SAAMA Departamentos" 
                        layout="fullWidth"
                        placeholder="blurred"
                    />
                    <p>ASADOR</p>
                </motion.div>
                <motion.div  
                    className="icono" 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{delay: 0.3, duration: 0.5 }}
                >
                    <StaticImage 
                        src="../../assets/images/amenidades/amenidades5.png" 
                        alt="SAAMA Departamentos" 
                        layout="fullWidth"
                        placeholder="blurred"
                    />
                    <p>PISCINA</p>
                </motion.div>
                <motion.div  
                    className="icono" 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{delay: 0.4, duration: 0.5 }}
                >
                    <StaticImage 
                        src="../../assets/images/amenidades/amenidades6.png" 
                        alt="SAAMA Departamentos" 
                        layout="fullWidth"
                        placeholder="blurred"
                    />
                    <p>ASOLEADERO</p>
                </motion.div>
                <motion.div  
                    className="icono" 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{delay: 0.5, duration: 0.5 }}
                >
                    <StaticImage 
                        src="../../assets/images/amenidades/amenidades7.png" 
                        alt="SAAMA Departamentos" 
                        layout="fullWidth"
                        placeholder="blurred"
                    />
                    <p>HAMACAS</p>
                </motion.div>
                <motion.div  
                    className="icono" 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{delay: 0.6, duration: 0.5 }}
                >
                    <StaticImage 
                        src="../../assets/images/amenidades/amenidades8.png" 
                        alt="SAAMA Departamentos" 
                        layout="fullWidth"
                        placeholder="blurred"
                    />
                    <p>ÁREA DE NIÑOS</p>
                </motion.div>
                <motion.div  
                    className="icono" 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{delay: 0.7, duration: 0.5 }}
                >
                    <StaticImage 
                        src="../../assets/images/amenidades/amenidades9.png" 
                        alt="SAAMA Departamentos" 
                        layout="fullWidth"
                        placeholder="blurred"
                    />
                    <p>FIREPIT</p>
                </motion.div>
                <motion.div  
                    className="icono" 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{delay: 0.8, duration: 0.5 }}
                >
                    <StaticImage 
                        src="../../assets/images/amenidades/amenidades10.png" 
                        alt="SAAMA Departamentos" 
                        layout="fullWidth"
                        placeholder="blurred"
                    />
                    <p>BEACH CLUB</p>
                </motion.div>
                <motion.div  
                    className="icono" 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{delay: 0.9, duration: 0.5 }}
                >
                    <StaticImage 
                        src="../../assets/images/amenidades/amenidades11.png" 
                        alt="SAAMA Departamentos" 
                        layout="fullWidth"
                        placeholder="blurred"
                    />
                    <p>SERVICIOS</p>
                </motion.div>
                <motion.div  
                    className="icono" 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{delay: 1, duration: 0.5 }}
                >
                    <StaticImage 
                        src="../../assets/images/amenidades/amenidades12.png" 
                        alt="SAAMA Departamentos" 
                        layout="fullWidth"
                        placeholder="blurred"
                    />
                    <p>BODEGAS</p>
                </motion.div>







            </div>
            

            <AniLink cover bg="#2E331E" direction="up" to='/galeria'>
                ↓
                </AniLink>
        </UbicacionContainer>
    )
}

const UbicacionContainer = styled.section`
    text-align: center;
    position: relative;
    z-index: 1;
    background-color: #9AB6C3;
    min-height: 100vh;
    padding-top: 150px;
    padding-bottom: 100px;
    
    @media (max-width: 780px) {
        margin-bottom: 150px;
    }
    .iconos {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        padding: 50px;
        box-sizing: border-box;
        grid-gap: 50px;
        @media (max-width: 1000px) {
            grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 540px) {
            grid-template-columns: repeat(2, 1fr);
        }
        .icono {
            width: 100%;
            p {
                margin-top: 10px;
                font-size: 2vw;
                text-transform: uppercase;
                color: var(--white);
                font-family: var(--reg);
                @media (max-width: 780px) {
                    font-size: 1rem;
                }
            }
        }
    }
    a {
        position: fixed;
        display: block;
        width: 50px;
        bottom: 50px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 60px;

        z-index: 5;
        @media (max-width: 680px) {
            font-size: 35px;
        }
    }
`

export default Amenidades