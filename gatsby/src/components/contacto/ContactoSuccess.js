import React, {useState} from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"

const ContactoSuccess = () => {


    const [close, setClose] = useState(true);


    return(
        <>
        
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
                    <form name='Formulario Contacto'
                        method="POST"
                        data-netlify="true"
                        action='/contactoSuccess'
                    >
                        <input type="hidden" name="form-name" value="Formulario Contacto"></input>
                        <input placeholder="Escribe tu nombre" type='text' name='nombre' />
                        <input placeholder="Escribe tu correo electrónico" type='mail' name='mail' />
                        <input placeholder="Escribe tu número de teléfono" type='text' name='tel' />
                        <input placeholder="Escribe tu ciudad" type='text' name='ciudad' />
                        <select name="interes" id="interes">
                            <option value="interes">Interés</option>
                            <option value="residente">Residente</option>
                            <option value="sectorInmobiliario">Sector Inmobiliario</option>

                        </select>
                        <button type='submit'>Descargar</button>
                    </form>
                </div>
                <div className="de">
                    <div className="contacto1 contacto">
                        <h3>ATENCIÓN EMPORIUM</h3>
                        <h3>999 458 0265</h3>
                        <a href="mailto:info@mbemporium.com">info@mbemporium.com</a>
                    </div>
                </div>
            </motion.div>
                
            <div className="logos">
                <img src="/emporium.svg" alt='Emporium' />
                <img src="/arkham.svg" alt='Arkham' />
                <img src="/edifor.svg" alt='Edifor' />
                <img src="/geyluk.svg" alt='Edifor' />
            </div>
            <a className="aviso" href='/avisoDeProvacidad'>AVISO DE PRIVACIDAD</a>
        </UbicacionContainer>
        {
            close ? 
                <Success>
                    <div className='cont'>
                        <button className='close' onClick={() => setClose(!close)}>X</button>
                        <h2>Formulario Enviado Correctamente</h2>
                        <a target='_blank'  
                            download
                            href='/BROCHURE_SAAMA_241122_ESP.pdf'
                        >
                            Descargar Brochure</a>

                    </div>
                </Success>
                :
                ''
        }
        </>

    )
}



const Success = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 5;
    .cont {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        padding: 50px;
        text-align: center;
        button {
            position: absolute;
            top: 20px;
            right: 20px;
            
        }
        a {
            text-decoration: underline;
            text-align: center;
        }
        h2 {
            margin-bottom: 20px;
        }
    }
`

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
            justify-content: center;
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
                    padding: 50px;
                    margin-bottom: 30px;
                }
            }
        }
    }
    .logos {
        margin: 50px auto 50px;
        display: flex;
        justify-content: center;
        img {
            width: 150px;
            margin-right: 20px;
            margin-left: 20px;
            @media (max-width: 650px) {
                width: 250px;
                margin-bottom: 50px;
            }
        }
        @media (max-width: 650px) {
            flex-direction: column;
            align-items: center;
        }
    }

    .aviso {
        font-size: 2rem;
        text-decoration: underline;
        font-family: var(--slim);
        color: var(--white);
    }
`

export default ContactoSuccess