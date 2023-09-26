import React, {useState} from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"

const PentHouse = ({depaInfo, depa01, setDepa01}) => {

    const [next, setNext] = useState(false);


    const image1 = depaInfo.plano1
    const image2 = depaInfo.plano2

    return(
        <Container>

        <div className={depa01 ? 'container flex' : 'container'}>
            
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
                            {
                                next ?
                                <img src={image1} alt='plano' />
                                :
                                <img src={image2} alt='plano' />
                            }
                            <div className='flechas'>
                                <button className='izquierda' onClick={() => setNext(!next)}>
                                    <img  src='/flechaAb.svg' alt='flecha izquierda' />
                                </button>
                                <button className='derecha' onClick={() => setNext(!next)}>
                                    <img  src='/flechaAb.svg' alt='flecha derecha' />
                                </button>
                            </div>
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
                                    {
                                        next ?
                                        <div>
                                            <ul>
                                                <li>Nivel: {depaInfo.nivel}</li>
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
                                        :
                                        <div>
                                            <ul>
                                                <li>Cajones: {depaInfo.cajones}</li>
                                            </ul>
                                            <ul>
                                                {depaInfo.espacios3.map((espacio) => {
                                                    return <li key={espacio}>{espacio}</li>;
                                                })}
                                            </ul>
                                            <ul>
                                                <li>No Techados: {depaInfo.noTechados}</li>
                                            </ul>
                                        </div>
                                    }
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
                                name='Pent House Form' 
                                method="POST"
                                data-netlify="true"
                                action="/success"
                                >
                                <input type="hidden" name="form-name" value="Pent House Form" />
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
            
        </div>
        </Container>
    )
}

const Container = styled.section`
.flex {
    display: flex !important;
}
.container {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
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
        @media (max-width: 1000px) {
            height: 80vh;
            overflow-y: scroll;
            padding: 25px;
        }
        button.close {
            font-weight: bolder;
            font-size: 40px;
            position: absolute;
            top: 30px;
            right: 40px;
            color: black;
            @media (max-width: 680px) {
                top: 10px !important;
                right: 20px !important;
            }
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
                height: auto;
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
                    position: relative;
                    @media (max-width: 850px) {
                        margin-bottom: 50px;
                    }
                    .flechas {
                        button {
                            position: absolute;
                            img {
                                width: 20px;
                            }
                        }
                        button.derecha {
                            right: -20px;
                            top: 50%;
                            transform: translateY(-50%);
                            img {
                                transform: rotate(-90deg);

                            }
                        }
                        button.izquierda {
                            left: -20px;
                            top: 50%;
                            transform: translateY(-50%);
                            img {
                                transform: rotate(90deg);

                            }
                        }
                    }
                }
                .info {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-gap: 20px;
                    @media (max-width: 1000px) {
                        grid-template-columns: 1fr;
                    }
                    .area {
                        width: 100%;
                        ul {
                            width: max-content;
                            li {
                                margin-right: 20px;
                            }
                            @media (max-width: 1000px) {
                                width: 100%;
                                li {
                                    margin-right: 10px;
                                }
                            }
                            @media (max-width: 650px) {
                                li {
                                    margin-right: 20px;
                                }
                            }
                        }
                    }
                    .esp {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        ul {
                            column-count: 1;
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
                        column-count: 3;
                        /* list-style: decimal-leading-zero; */
                        /* margin-left: 20px; */
                        @media (max-width: 585px) {
                            column-count: 2;
                        }
                        @media (max-width: 460px) {
                            column-count: 1;
                        }
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
}

`

export default PentHouse