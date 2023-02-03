import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import { Link } from "gatsby";

const Concepto = () => {
    return(
        <ConceptoContainer>
            <motion.div  
                className="top" 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="iz">
                        <img src='/pertenece.svg' alt="Pertenece, Explorando" />
                </div>
                <div className="de">
                    <p>SAĀMA, palabra de origen tailándes.</p>
                    <p>Proviene de “Sam Nak” que signiﬁca <strong>Residencia</strong></p>
                    <br />
                    <br />
                    <p>Un nuevo espacio para conectar, construir comunidades</p>
                    <p>y encontrarse rodeado de la naturaleza. </p>
                </div>
            </motion.div>
            <motion.div  
                className="bot" 
                initial={{ y: '100%', scale: 0.5 }}
                animate={{ y: '0', scale: 1 }}
                transition={{ delay: .5, duration: 1 }}
            >
                <StaticImage 
                    src="../../assets/images/concepto.png" 
                    alt="SAAMA Departamentos" 
                    layout="fullWidth"
                    placeholder="blurred"
                    style={{ height: "100%", width: "100%" }}
                />
                
            </motion.div>

            <Link to='/ubicacion' className="arrow">
                ↓
            </Link>
            
        </ConceptoContainer>
    )
}


const ConceptoContainer = styled.section`
    margin-top: 130px;

    a.arrow {
            position: fixed !important;
            bottom: 100px;
            left: 50%;
            color: var(--white);
            font-size: 3rem;
            @media (max-width: 780px) {
                top: 50px;
            }
        }
    @media (max-width: 850px) {
        margin-top: 150px;
    }
    @media (max-width: 780px) {
        margin-top: 100px;
        margin-bottom: 200px;
    }
    .top {
        display: flex;
        align-items: center;
        @media (max-width: 780px) {
            flex-direction: column;
        }
        .iz, .de {
            padding: 50px 150px;
            width: 50%;
            text-align: center;
            @media (max-width: 1200px) {
                padding: 50px 50px;
            }
            
        }
        .iz {
            @media (max-width: 780px) {
                width: 60%;
            }
        }
        .de {
            @media (max-width: 780px) {
                width: 100%;
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
    .bot {
        position: relative;
        
    }
    .container {
        padding: 0 20px;
    }
    
`

export default Concepto