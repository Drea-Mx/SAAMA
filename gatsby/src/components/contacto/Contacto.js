import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"

const Contacto = () => {

    return(
        <UbicacionContainer>
            <div className="fondo">
                <StaticImage
                    src="../../assets/images/contacto.jpg"
                    alt="SAAMA"
                    placeholder="blurred"
                    layout="FULL_WIDTH"
                    style={{ height: "100%", width: "100%" }}
                />
            </div>
            <motion.div  
                className="contenedor" 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >

                <div className="iz">
                    <h2>DEJA TUS DATOS</h2>
                    <h2>Y DESCARGA EL BROCHURE</h2>
                    <form>
                        <input placeholder="Escribe tu nombre" type='text' name='nombre' />
                        <input placeholder="Escribe tu correo electrónico" type='mail' name='mail' />
                        <input placeholder="Escribe tu número de teléfono" type='text' name='tel' />
                        <input placeholder="Escribe tu ciudad" type='text' name='ciudad' />
                        <select name="interes" id="interes">
                            <option value="opcion1">Interés</option>
                            <option value="opcion2">Opción2</option>
                            <option value="opcion3">Opción3</option>

                        </select>
                        <button type='submit'>Descargar</button>
                    </form>
                </div>
                <div className="de">
                    <div className="contacto1 contacto">
                        <h3>ADRIANA CEBALLOS</h3>
                        <h3>999 292 1800</h3>
                        <a href="mailto:adriana.ceballos@jll.com">adriana.ceballos@jll.com</a>
                    </div>
                    <div className="contacto2 contacto">
                        <h3>MARIANA CABALLERO</h3>
                        <h3>999 389 7077</h3>
                        <a href="mailto:mariana.caballero@jll.com">mariana.caballero@jll.com</a>
                    </div>
                </div>
            </motion.div>
                
            <div className="logos">
                <img src="/logos.svg" alt='JLL ARKHAM' />
            </div>
            <a className="aviso" href='/avisoDeProvacidad'>AVISO DE PRIVACIDAD</a>
        </UbicacionContainer>
    )
}

const UbicacionContainer = styled.section`
    text-align: center;
    position: relative;
    z-index: 1;
    margin-bottom: 100px;
    @media (max-width: 680px) {
        margin-bottom: 200px;
    }
    .fondo {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
    .contenedor {
        display: flex;
        max-width: 950px;
        margin: 150px auto 50px;
        @media (max-width: 900px) {
            flex-direction: column;
            width: 100%;
            padding: 0 30px;
        }
        .iz {
            width: 60%;
            margin-right: 50px;
            background-color: var(--white);
            border-radius: 30px;
            padding: 50px;
            @media (max-width: 900px) {
                width: 100%;
                margin-bottom: 30px;
            }
            form {
                margin-top: 50px;
                input, select {
                    display: block;
                    width: 100%;
                    margin-bottom: 10px;
                    padding: 10px;
                    border: solid 2px var(--black);
                    background-color: transparent; 
                    outline: none;
                    border-radius: 15px;
                }
                button {
                    color: var(--white);
                    background-color: var(--black);
                    padding: 20px 50px;
                    border-radius: 20px;
                    text-transform: uppercase;
                    font-family: var(--slim);
                    font-size: 1.3rem;
                    margin-top: 30px;
                }
            }
        }
        .de {
            width: 40%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            @media (max-width: 900px) {
                flex-direction: row;
                width: 100%;
            }
            @media (max-width: 680px) {
                flex-direction: column;
            }
            .contacto {
                background-color: var(--white);
                padding: 50px 20px;
                font-family: var(--slim);
                font-size: 2rem;
                border-radius: 30px;
                @media (max-width: 900px) {
                    font-size: 1.5rem;
                    padding: 20px;
                    margin-bottom: 30px;
                }
            }
        }
    }
    .logos {
        width: 20%;
        margin: 50px auto 50px;
        @media (max-width: 700px) {
            width: 50%;
        }
    }

    .aviso {
        font-size: 2rem;
        text-decoration: underline;
        font-family: var(--slim);
        color: var(--white);
    }
`

export default Contacto