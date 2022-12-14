import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"

const Footer = () => {
    return(
        <FooterContainer>
            <div className="redes" >
                <motion.a   
                    className="red"
                    rel="noreferrer" 
                    target='_blank'  
                    href='https://www.facebook.com/people/SAAMA-Telchac/100085116297594/'
                    initial={{ y: "200px" }}
                    animate={{ y: "0" }}
                    transition={{ delay: 0, duration: 1, repeat: 0 }}
                >
                    <img src='/face.svg' alt='Icono facebook' />
                </motion.a >
                <motion.a   
                    className="red"
                    rel="noreferrer" 
                    target='_blank'  
                    href='https://www.facebook.com/people/SAAMA-Telchac/100085116297594/'
                    initial={{ y: "200px" }}
                    animate={{ y: "0" }}
                    transition={{ delay: 0, duration: 1, repeat: 0 }}
                >
                        <img src='/insta.svg' alt='Icono Instagram' />
                </motion.a >
            </div>

            <div className='whats'>
                <motion.a   
                    rel="noreferrer" 
                    target='_blank'  
                    href='https://www.facebook.com/people/SAAMA-Telchac/100085116297594/'
                    initial={{ y: "200px" }}
                    animate={{ y: "0" }}
                    transition={{ delay: 0, duration: 1, repeat: 0 }}
                >
                        <img src='/whats.svg' alt='Whatsapp' />
                </motion.a >
            </div>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    margin: 0 auto;
    @media (max-width: 780px) {
        max-width: 100%;
        width: 100%;
        background-color: #EBE6DD;
        position: fixed;
        bottom: 0;
        height: 150px;
        border-top: solid 1px #2E331E;
        z-index: 4;
    }
    .redes {
        position: fixed;
        bottom: 50px;
        left: 5%;
        display: flex;
        z-index: 1;
        @media (max-width: 780px) {
            position: absolute;
        }
        a {
            display: block;
            width: 40px;
            margin-right: 20px;
        }
    }
    .whats {
        position: fixed;
        right: 5%;
        bottom: 50px;
        z-index: 1;
        @media (max-width: 780px) {
            bottom: 30px;
            position: absolute;
        }
        a {
            display: block;
            width: 140px;
            margin-right: 20px;
            animation: grow 1500ms ease-in-out 2s infinite forwards;
            @media (max-width: 780px) {
                width: 80px;
            }
        }
    }

    @keyframes grow {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(.8);
        }
        100% {
            transform: scale(1);
        }
    }
`

export default Footer