import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image"

const Amenidades = () => {



    return(
        <UbicacionContainer>
            <img className="icono" src='/iconoDark.svg' alt="Pertenece, Explorando" />
            
            <div className="mapa">
                <StaticImage 
                    src="amenidades.jpg" 
                    alt="SAAMA Departamentos" 
                    layout="fullWidth"
                    placeholder="blurred"
                    style={{ height: "100%", width: "100%" }}
                />
                <div className="numeros">
                    <div className="item terraza">
                        <div className="image">
                            <img src="/amenidades/01.svg" alt="Terraza SAAMA" />
                        </div>
                        <div className="texto">
                            <p>Terraza</p>
                        </div>
                    </div>
                    <div className="item bar">
                        <div className="image">
                            <img src="/amenidades/02.svg" alt="Bar" />
                        </div>
                        <div className="texto">
                            <p>Bar</p>
                        </div>
                    </div>
                    <div className="item alacena">
                        <div className="image">
                            <img src="/amenidades/03.svg" alt="Alacena" />
                        </div>
                        <div className="texto">
                            <p>Alacena</p>
                        </div>
                    </div>
                    <div className="item asador">
                        <div className="image">
                            <img src="/amenidades/04.svg" alt="Asador" />
                        </div>
                        <div className="texto">
                            <p>Asador</p>
                        </div>
                    </div>
                    <div className="item piscina">
                        <div className="image">
                            <img src="/amenidades/05.svg" alt="piscina" />
                        </div>
                        <div className="texto">
                            <p>Piscina</p>
                        </div>
                    </div>
                    <div className="item asoleadero">
                        <div className="image">
                            <img src="/amenidades/06.svg" alt="Asoleadero" />
                        </div>
                        <div className="texto">
                            <p>Asoleadero</p>
                        </div>
                    </div>
                    <div className="item hamacas">
                        <div className="image">
                            <img src="/amenidades/07.svg" alt="hamacas" />
                        </div>
                        <div className="texto">
                            <p>Hamacas</p>
                        </div>
                    </div>
                    <div className="item ninos">
                        <div className="image">
                            <img src="/amenidades/08.svg" alt="niños" />
                        </div>
                        <div className="texto">
                            <p>Área de niños</p>
                        </div>
                    </div>
                    <div className="item firepit">
                        <div className="image">
                            <img src="/amenidades/09.svg" alt="Firepit" />
                        </div>
                        <div className="texto">
                            <p>Firepit</p>
                        </div>
                    </div>
                    <div className="item beachclub">
                        <div className="image">
                            <img src="/amenidades/10.svg" alt="Beachclub" />
                        </div>
                        <div className="texto">
                            <p>Beachclub</p>
                        </div>
                    </div>
                    <div className="item servicios">
                        <div className="image">
                            <img src="/amenidades/11.svg" alt="Servicios" />
                        </div>
                        <div className="texto">
                            <p>Servicios</p>
                        </div>
                    </div>
                    <div className="item bodegas">
                        <div className="image">
                            <img src="/amenidades/12.svg" alt="Bodegas" />
                        </div>
                        <div className="texto">
                            <p>Bodegas</p>
                        </div>
                    </div>
                    <div className="item regadera">
                        <div className="image">
                            <img src="/amenidades/13.svg" alt="Regadera" />
                        </div>
                        <div className="texto">
                            <p>Regadera saliendo del mar/piscina</p>
                        </div>
                    </div>
                    <div className="item kitchen">
                        <div className="image">
                            <img src="/amenidades/14.svg" alt="Gourmet Kitchen" />
                        </div>
                        <div className="texto">
                            <p>Gourmet Kitchen</p>
                        </div>
                    </div>
                </div>

            </div>
            <Link to='/galeria'>
                ↓
            </Link>
        </UbicacionContainer>
    )
}

const UbicacionContainer = styled.section`
    margin-top: 150px;
    text-align: center;
    position: relative;
    z-index: 1;
    margin-bottom: 100px;
    padding: 0 30px;
    a {
        position: relative;
        display: block;
        width: 50px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 50px;
        font-size: 60px;
        z-index: 5;
        @media (max-width: 680px) {
            font-size: 35px;
        }
    }
    .icono {
        width: 66px;
        @media (max-width: 780px) {
            width: 40px;
            position: relative;
            z-index: 2;
        }
    }
    .mapa {
        margin: 80px auto;
        width: 100%;
        box-sizing: border-box;
        position: relative;
        @media (max-width: 680px) {
            transform: rotate(-90deg) scale(3);
            margin-top: 550px;
            margin-bottom: 550px;
        }
        .numeros {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            .item {
                position: absolute;
                cursor: pointer;
                width: 5vw;
                height: auto;
                .image {
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .texto {
                    display: none;
                    background-color: #984124;
                    color: white;
                    font-size: 30px;
                    padding: 5px 10px;
                    position: absolute;
                    top: 100%;
                    z-index: 5;
                    @media (max-width: 680px) {
                        transform: translate(-50%, -40%) scale(0.5);
                    }
                }
                &:nth-child(odd) {
                    animation: grow 850ms ease-in-out infinite forwards;
                }
                &:nth-child(even) {
                    animation: grow 850ms 425ms ease-in-out infinite forwards;
                }
            }
            @keyframes grow {
                0% {
                    transform: scale(1);
                }
                50% {
                    transform: scale(0.9);
                }
                0% {
                    transform: scale(1);
                }
            }
            .terraza {
                top: 27%;
                left: 5%;
                &:hover {
                    .texto {
                        display: block;
                    }
                }
            }
            .bar {
                bottom: 10%;
                left: 8%;
                &:hover {
                    .texto {
                        display: block;
                    }
                }
            }
            .alacena {
                bottom: 10%;
                left: 2%;
                &:hover {
                    .texto {
                        display: block;
                    }
                }
            }
            .asador {
                bottom: 10%;
                left: 20%;
                &:hover {
                    .texto {
                        display: block;
                    }
                }
            }
            .piscina {
                bottom: 33%;
                left: 14%;
                z-index: 9;
                &:hover {
                    .texto {
                        display: block;
                    }
                }
            }
            .asoleadero {
                bottom: 5%;
                left: 35%;
                &:hover {
                    .texto {
                        display: block;
                    }
                }
            }
            .hamacas {
                bottom: 33%;
                left: 31%;
                &:hover {
                    .texto {
                        display: block;
                    }
                }
            }
            .ninos {
                bottom: 33%;
                left: 42%;
                &:hover {
                    .texto {
                        display: block;
                        width: 150px;
                    }
                }
            }
            .firepit {
                bottom: 32%;
                left: 51.5%;
                &:hover {
                    .texto {
                        display: block;
                    }
                }
            }
            .beachclub {
                bottom: 26%;
                left: 76%;
                &:hover {
                    .texto {
                        display: block;
                    }
                }
            }
            .servicios {
                top: 10%;
                left: 2%;
                &:hover {
                    .texto {
                        display: block;
                    }
                }
            }
            .bodegas {
                top: 10%;
                left: 35%;
                &:hover {
                    .texto {
                        display: block;
                    }
                }
            }
            .regadera {
                top: 10%;
                left: 9%;
                &:hover {
                    .texto {
                        width: 250px;
                        display: block;
                    }
                }
            }
            .kitchen {
                bottom: 10%;
                left: 14%;
                &:hover {
                    .texto {
                        width: 200px;
                        display: block;
                    }
                }
            }
        }
    }
    
`

export default Amenidades