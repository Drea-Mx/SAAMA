import React from "react";
import styled from "styled-components";
import Parser from 'html-react-parser';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { motion } from "framer-motion"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const UbicacionComponent = ({data}) => {

    const mapa = data.sanityUbicacionPage.mapa

    const imageGetDataImage = getImage(data.sanityUbicacionPage.image && data.sanityUbicacionPage.image.asset)
    const imageGetDataImageAlt = data.sanityUbicacionPage.image && data.sanityUbicacionPage.image.alt



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
                        <GatsbyImage
                            class="welcome"
                            style={{ height: "100%", width: "100%" }}
                            image={imageGetDataImage}
                            alt={imageGetDataImageAlt}
                        />
                    </div>
                </div>
                <div className="de">
                    <div className="info">
                        <h2>{data.sanityUbicacionPage.headline1} <br/>{data.sanityUbicacionPage.headline2}</h2>
                        <ul>

                            {data.sanityUbicacionPage.puntosDeInteres.map((punto, index) => {
                                
                                return (
                                    <li key={index}>{punto}</li>
                                )
                            })}
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
        margin-top: 120px;
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
                width: 100%;
                padding: 0 20px;
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
                padding: 20px;
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
                    @media (max-width: 780px) {
                        width: 100%;
                        grid-template-columns:  1fr;
                    }   
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
        @media (max-width: 780px) {
            position: static;
            transform: none;
            width: 100%;
            text-align: center;
            font-size: 35px;
            bottom: 100px;
        }
    }
`

export default UbicacionComponent