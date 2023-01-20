import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components'

const Depa = ({arr}) => {
    return(
        <Container>
            <div className='modal'>
                <h2>DEPARTAMENTO 001</h2>
                <div className='sections'>
                    <div className='iz'>
                        <div className='image'>
                            <StaticImage 
                                src="001.png" 
                                alt="Depa 001" 
                                layout="fullWidth"
                                placeholder="blurred"
                            />
                        </div>
                        <div className='info'>
                            <div className='area'>
                                <h2>Áreas</h2>
                                <ul>
                                    {arr.map((title) => {
                                        return <li key={title}>{title}</li>;
                                    })}
                                </ul>
                            </div>
                            <div className='esp'>
                                    <h2>ESPECIFICACIONES</h2>
                                    <ul>
                                        <li>Nivel: Planta Baja</li>
                                        <li>Cajones: 2</li>
                                    </ul>
                                    <ul>
                                        <li>Interior: 200.76 m²</li>
                                        <li>Bodega: 1.19 m²</li>
                                        <li>Balcón: 66.44 m²</li>
                                        <li>Piscina: 16.20 m²</li>
                                        <li>Patio servicio: 2.66 m²</li>
                                        <li>Pérgola: N/A</li>
                                        <li>Servicio: N/A</li>
                                    </ul>
                                    <ul>
                                        <li>Techados: 201.95 m²</li>
                                        <li>No techado: 84 m²</li>
                                        <li>Total: 285.95 m²</li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                    <div className='de'>
                        <div className='top'>
                            <h3>Precio de venta</h3>
                            <h3>$10,913,760.00</h3>
                        </div>
                        <div className='bot'>
                            <p>Si te interesa este departamento envía un mensaje desde nuestro formulario y uno de nuestros asesores se pondrá en contacto contigo:</p>
                            <form>
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
                
            </div>
        </Container>
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
    padding: 20px;
    .modal {
        background-color: #EBE6DC;
        width: 100%;
        max-width: 1500px;
        padding: 50px;
        box-sizing: border-box;
        height: 80vh;
        border-radius: 20px;
        h2 {
            text-align: center;
        }
        .sections {
            display: flex;
            height: 100%;
            padding-top: 50px;
            .iz {
                width: 60%;
                padding-right: 50px;
                height: 100%;
                display: grid;
                grid-template-columns: 1fr;
                .image {
                    width: auto;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .info {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-gap: 20px;
                    .area {
                        ul {
                            width: 250px;
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
                .top {
                    h3 {
                        font-size: 2rem;
                        font-family: var(--slim);
                    }
                }
                .bot {
                    p {
                        font-size: 1.2rem;
                        margin-bottom: 30px;
                    }
                    form {
                        input, button, textarea{
                            display: block;
                            width: 100%;
                            padding: 10px 15px;
                            margin-bottom: 10px;
                            background-color: transparent;
                            outline: none;
                            border:  solid 2px #2E331F;
                            border-radius: 10px;
                        }
                        button {
                            width: 200px;
                            background-color: #2E331F;
                            color: white;
                            margin: 50px auto 0;
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