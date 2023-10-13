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
                    href='https://www.facebook.com/profile.php?id=100085116297594'
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
                    href='https://www.instagram.com/saamatelchac/'
                    initial={{ y: "200px" }}
                    animate={{ y: "0" }}
                    transition={{ delay: 0, duration: 1, repeat: 0 }}
                >
                        <img src='/insta.svg' alt='Icono Instagram' />
                </motion.a >
                <motion.a   
                    className="brochure"
                    rel="noreferrer" 
                    target='_blank'  
                    download
                    href='/BROCHURESAAMA-2.pdf'
                    initial={{ y: "200px" }}
                    animate={{ y: "0" }}
                    transition={{ delay: 0, duration: 1, repeat: 0 }}
                >
                        <p>brochure</p>
                </motion.a >
            </div>

            <div className='whats'>
                <motion.a   
                    rel="noreferrer" 
                    target='_blank'  
                    href='https://wa.me/+529994580265/?text=Mensaje desde la página web: Me interesa obtener más información sobre SAAMA Telchac'
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
        height: 80px;
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
            bottom: 15px;
        }
        a {
            display: block;
            width: 40px;
            margin-right: 20px;
        }
        a.brochure {
            width: auto;
            p {
                background-color: #2E331E;
                color: var(--white);
                font-family: var(--regular);
                border-radius: 10px;
                width: 100%;
                font-size: 1.2rem;
                text-transform: uppercase;
                padding: 8px;
                text-align: center;
            }
        }
    }
    .whats {
        position: fixed;
        right: 5%;
        bottom: 50px;
        z-index: 1;
        @media (max-width: 780px) {
            bottom: 10px;
            position: absolute;
        }
        a {
            display: block;
            width: 100px;
            margin-right: 20px;
            animation: grow 1500ms ease-in-out 2s infinite forwards;
            @media (max-width: 780px) {
                width: 55px;
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