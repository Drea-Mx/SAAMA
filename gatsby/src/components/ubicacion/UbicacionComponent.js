import React from "react";
import styled from "styled-components";
import Parser from 'html-react-parser';
import AniLink from "gatsby-plugin-transition-link/AniLink";

const UbicacionComponent = () => {

    const mapa = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14865.070399808581!2d-89.2959375!3d21.3399375!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x85f3ad652a48380d!2sSAAMA%20-%20Departamentos%20Telchac!5e0!3m2!1ses!2smx!4v1668109812734!5m2!1ses!2smx" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    return(
        <UbicacionContainer>
            <img className="icono" src='/iconoDark.svg' alt="Pertenece, Explorando" />
            <div className="map">
                {Parser(mapa)}
            </div>
            <AniLink cover bg="#2E331E" direction="up" to='/numeralia'>
                ↓
                </AniLink>
        </UbicacionContainer>
    )
}

const UbicacionContainer = styled.section`
    margin-top: 150px;
    text-align: center;
    position: relative;
    z-index: 1;
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
        }
    }
    .map {
        margin-top: 50px;
        width: 70%;
        margin-left: auto;
        margin-right: auto;
        height: 500px;
        border-radius: 100px;
        @media (max-width: 780px) {
            width: 85%;
            height: 400px;
        }
        iframe {
            height: 100%;
            width: 100%;
            border-radius: 50px;
        }
    }
`

export default UbicacionComponent