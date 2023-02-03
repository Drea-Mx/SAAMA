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
    height: 100vh;
    position: relative;
    text-align: center;
    margin-bottom: 50px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 780px) {
        margin-bottom: 100px;
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
        }
    }
    h2 {
        font-size: 35px;
        @media (max-width: 750px) {
            font-size: 24px;
            padding-left: 20px;
            padding-right: 20px;
        }
    }

    .image {
        max-width: 50%;
        margin: 0 auto;
        padding: 0 50px;
        box-sizing: content-box;
        @media (max-width: 780px) {
            margin: 100px auto 0;
            max-width: 100%;
            width: 100%;
            padding: 20px;
            box-sizing: border-box;
            margin-top: 0;
        }
        .movil {
            display: none;
            @media (max-width: 780px) {
                display: block;
                height: 400px !important;
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