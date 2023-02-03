import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { StaticImage } from "gatsby-plugin-image"

const Home = () => {
    return(
        <HomeContainer>
            <motion.div  
                className="image" 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <StaticImage
                    className="movil"
                    src="../../assets/images/homeImage.png"
                    alt="SAAMA"
                    placeholder="blurred"
                    layout="FULL_WIDTH"
                    style={{ height: "100%", width: "100%" }}
                />
                <video autoPlay loop muted playsInline>
                    <source src="/video.mp4" type="video/mp4" />
                </video>
                <img className="welcome" src="/welcome.svg" alt="Welcome Home" />

            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
            >
                <h2>DEPARTAMENTOS DESDE 8.6 MDP</h2>
                <h2>ENTREGA DICIEMBRE 2024</h2>
                <AniLink cover bg="#2E331E" direction="up" to='/concepto'>
                ↓
                </AniLink>

            </motion.div>
            
        </HomeContainer>
    )
}

const HomeContainer = styled.section`
    width: 100vw;
    position: relative;
    text-align: center;
    margin-bottom: 50px;
    z-index: 1;
    @media (max-width: 780px) {
        margin-bottom: 200px;
    }
    a {
        position: relative;
        display: block;
        width: 50px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        font-size: 60px;
        z-index: 5;
        @media (max-width: 680px) {
            font-size: 35px;
            display: none;
        }
    }
    h2 {
        font-size: 35px;
        @media (max-width: 680px) {
            font-size: 24px;
        }
    }

    .image {
        max-width: 880px;
        margin: 150px auto 0;
        padding: 0 50px;
        box-sizing: content-box;
        @media (max-width: 780px) {
            margin: 150px auto 0;
        }
        @media (max-width: 680px) {
            margin: 150px auto 0;
        }
        .movil {
            display: none;
            @media (max-width: 780px) {
                display: block;
                height: 500px !important;
            }
        }
        video {
            width: 100%;
            border-radius: 30px;
            @media (max-width: 780px) {
                display: none;
            }
        }
        .welcome {
            position: relative;
            z-index: 1;
            width: 85%;
            margin-top: -80px;
            @media (max-width: 780px) {
                margin-top: -40px;
            }
        }
    }
`

export default Home