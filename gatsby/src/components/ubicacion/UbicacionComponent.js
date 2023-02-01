import React from "react";
import styled from "styled-components";
import Parser from 'html-react-parser';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"

const UbicacionComponent = () => {

    const mapa = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14865.070399808581!2d-89.2959375!3d21.3399375!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x85f3ad652a48380d!2sSAAMA%20-%20Departamentos%20Telchac!5e0!3m2!1ses!2smx!4v1668109812734!5m2!1ses!2smx" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    return(
        <UbicacionContainer>
                <motion.div  
                className="top" 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="iz">
                    <div className="image">
                        <StaticImage 
                            src="../../assets/images/ubicacion/ubicacion.jpg" 
                            alt="SAAMA Departamentos" 
                            layout="fullWidth"
                            placeholder="blurred"
                            style={{ height: "100%", width: "100%" }}
                        />
                    </div>
                </div>
                <div className="de">
                    <div className="info">
                        <h2>Puntos <br/>de interés</h2>
                        <ul>
                            <li>Puerto Progreso</li>
                            <li>Laguna rosada</li>
                            <li>Telchac Puerto</li>
                            <li>X'Cambó</li>
                            <li>Ciudad de Mérida</li>
                            <li>Marinas</li>
                        </ul>
                    </div>
                    <div className="map">
                    {Parser(mapa)}
                </div>
                </div>
            </motion.div>
            <AniLink cover bg="#2E331E" direction="up" to='/numeralia'>
                ↓
            </AniLink>
        </UbicacionContainer>
    )
}

const UbicacionContainer = styled.section`
    margin-top: 50px;
    text-align: center;
    position: relative;
    z-index: 1;
    @media (max-width: 1200px) {
        margin-top: 150px;
    }
    @media (max-width: 780px) {
        margin-bottom: 150px;
    }
    .top {
        display: flex;
        @media (max-width: 780px) {
            flex-direction: column;
        }
        .iz, .de {
            width: 50%;
            @media (max-width: 780px) {
                margin: 0 auto;
            }
        }
        .iz {
            padding: 100px;
            @media (max-width: 1200px) {
                    padding: 50px;
            }
            @media (max-width: 780px) {
                width: 70%;
            }
                
            .image {
                overflow: hidden;
                border-radius: 30px;
            }
        }
        .de {
            padding: 100px;
            @media (max-width: 1200px) {
                    padding: 50px;
                }
            @media (max-width: 780px) {
                width: 100%;
            }
            .info {
                h2 {
                    font-size: 30px;
                    text-transform: uppercase;
                }
                ul {
                    margin: 50px auto;
                    display: grid;
                    grid-template-columns:  1fr 1fr;
                    justify-content: center;
                    align-items: center;
                    width: 400px;
                    li {
                        font-family: var(--slim);
                        font-size: 35px;
                    }
                }
            }
            .map {
                width: 100%;
                iframe {
                    width: 100%;
                    height: 350px;
                    border-radius: 30px;
                }
            }
            img {
                margin-bottom: 50px;
            }
            p {
                font-size: 1.7vw;
                strong {
                    font-weight: normal;
                    text-decoration: underline;
                }
                @media (max-width: 780px) {
                    font-size: 1.5rem;
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

export default UbicacionComponent