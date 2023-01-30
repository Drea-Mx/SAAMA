import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"

const Depa = ({depaInfo, depa01, setDepa01}) => {

    const image = depaInfo.plano

    return(
        <>
        {depa01 ? 

        <Container>
            <motion.div  
                className="modal" 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <button className='close' onClick={() => setDepa01(!depa01)}>x</button>
                <h2>{depaInfo.titulo}</h2>
                <div className='sections'>
                    <div className='iz'>
                        <div className='image'>
                            <img src={image} alt='plano' />
                        </div>
                        <div className='info'>
                            <div className='area'>
                                <h2>Áreas</h2>
                                <ul>
                                    {depaInfo.arr.map((title) => {
                                        return <li key={title}>{title}</li>;
                                    })}
                                </ul>
                            </div>
                            <div className='esp'>
                                    <h2>ESPECIFICACIONES</h2>
                                    <ul>
                                        <li>Nivel: {depaInfo.nivel}</li>
                                        <li>Cajones: {depaInfo.cajones}</li>
                                    </ul>
                                    <ul>
                                        {depaInfo.espacios1.map((espacio) => {
                                            return <li key={espacio}>{espacio}</li>;
                                        })}
                                    </ul>
                                    <ul>
                                        {depaInfo.espacios2.map((espacio2) => {
                                            return <li key={espacio2}>{espacio2}</li>;
                                        })}
                                    </ul>
                            </div>
                        </div>
                    </div>
                    <div className='de'>
                        <div className='top'>
                            <h3>Precio de venta</h3>
                            <h3>${depaInfo.precio}</h3>
                        </div>
                        <div className='bot'>
                            <p>Si te interesa este departamento envía un mensaje desde nuestro formulario y uno de nuestros asesores se pondrá en contacto contigo:</p>
                            <form
                                name='depas' 
                                netlify
                                action="/success/"
                                >
                                <input type="hidden"  placeholder='Nombre' name='nombreDepa' value={depaInfo.codigoDepa} />
                                <input type='text' placeholder='Nombre' name='nombre' />
                                <input type='email' placeholder='Correo electrónico' name='email' />
                                <div className='mitad'>
                                    <input type='text' placeholder='Teléfono' name='tel' />
                                    <input type='text' placeholder='Ciudad/Estado' name='ciudad' />
                                </div>
                                <textarea name="mensaje" placeholder='Mensaje'></textarea>
                                <button type="submit">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
                
            </motion.div>
            
        </Container>
        :
            ''
            }
        </>
    )
}

const Container = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
    padding: 50px;
    
    .modal {
        background-color: #EBE6DC;
        width: 100%;
        max-width: 1200px;
        padding: 50px;
        box-sizing: border-box;
        height: auto;
        border-radius: 20px;
        overflow: scroll;
        position: relative;
        @media (max-width: 850px) {
            height: 90vh;
            overflow-y: scroll;
        }
        button.close {
            font-weight: bolder;
            font-size: 40px;
            position: absolute;
            top: 30px;
            right: 40px;
        }
        h2 {
            text-align: center;
        }
        .sections {
            display: flex;
            height: 100%;
            padding-top: 50px;
            @media (max-width: 850px) {
                flex-direction: column;
            }
            .iz {
                width: 80%;
                padding-right: 50px;
                height: 100%;
                display: grid;
                grid-template-columns: 1fr;
                @media (max-width: 850px) {
                    width: 100%;
                    padding-right: 0;

                }
                .image {
                    width: auto;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin-bottom: 50px;
                    @media (max-width: 850px) {
                        margin-bottom: 50px;
                    }
                }
                .info {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-gap: 20px;
                    @media (max-width: 650px) {
                        grid-template-columns: 1fr;
                    }
                    .area {
                        ul {
                            width: 250px;
                            @media (max-width: 1000px) {
                                width: 200px;
                                li {
                                    margin-right: 10px;
                                }
                            }
                            @media (max-width: 850px) {
                                width: 250px;
                            }
                            @media (max-width: 650px) {
                                li {
                                    margin-right: 20px;
                                }
                            }
                        }
                    }
                    .esp {
                        ul {
                            list-style: none;
                            margin-bottom: 20px;
                            margin-left: 0;
                        }
                    }
                    h2 {
                        text-align: left;
                        font-size: 1rem;
                        font-family: var(--slim);
                        text-decoration: underline;
                        margin-bottom: 10px;
                    }
                    ul {
                        column-count: 2;
                        list-style: decimal-leading-zero;
                        margin-left: 20px;
                        li {
                            font-family: var(--slim);
                            font-size: 1rem;
                        }
                    }
                }
            }
            .de {
                width: 40%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                @media (max-width: 850px) {
                    width: 100%;
                    padding-bottom: 50px;

                }
                .top {
                    margin-bottom: 50px;
                    @media (max-width: 850px) {
                        text-align: center;
                        margin-top: 50px;
                        margin-bottom: 50px;
                    }
                    h3 {
                        font-size: 1.5rem;
                        font-family: var(--slim);
                    }
                }
                .bot {
                    p {
                        font-size: 1rem;
                        margin-bottom: 30px;
                    }
                    form {
                        input, button, textarea{
                            display: block;
                            width: 100%;
                            padding: 10px;
                            margin-bottom: 8px;
                            background-color: transparent;
                            outline: none;
                            border:  solid 2px #2E331F;
                            border-radius: 10px;
                        }
                        button {
                            width: 150px;
                            padding-top: 10px;
                            padding-bottom: 10px;
                            font-size: 20px;
                            background-color: #2E331F;
                            color: white;
                            margin: 30px auto 0;
                            text-transform: uppercase;
                            font-family: var(--slim);
                        }
                        .mitad {
                            display: grid;
                            grid-template-columns: 1fr 1fr;
                            grid-gap: 10px;
                        }
                    }
                }
            }
        }
    }
`

export default Depa