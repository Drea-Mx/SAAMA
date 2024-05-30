import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BlockContent from '@sanity/block-content-to-react';

const Numeralia = ({data}) => {

    const textGetDataImage = getImage(data.sanityNumeraliaPage.headline && data.sanityNumeraliaPage.headline.asset)
    const textGetDataImageAlt = data.sanityNumeraliaPage.headline && data.sanityNumeraliaPage.headline.alt

    const imageGetDataImage = getImage(data.sanityNumeraliaPage.image && data.sanityNumeraliaPage.image.asset)
    const imageGetDataImageAlt = data.sanityNumeraliaPage.image && data.sanityNumeraliaPage.image.alt

    return(
        <UbicacionContainer>
            <motion.div  
                className="top" 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="iz">
                    <div className="image">
                        <GatsbyImage
                            class="welcome"
                            style={{ height: "100%", width: "100%" }}
                            image={imageGetDataImage}
                            alt={imageGetDataImageAlt}
                        />
                    </div>
                </div>
                <div className="de">
                    <GatsbyImage
                        class="img"
                        image={textGetDataImage}
                        alt={textGetDataImageAlt}
                    />
                    <div className="text">
                        <BlockContent
                            blocks={data.sanityNumeraliaPage._rawText}
                        />
                    </div>
                </div>
            </motion.div>
            <AniLink cover bg="#2E331E" direction="up" to='/amenidades'>
                ↓
            </AniLink>
        </UbicacionContainer>
    )
}

const UbicacionContainer = styled.section`
    margin-top: 50px;
    text-align: center;
    position: relative;
    z-index: 1;
    @media (max-width: 1200px) {
        margin-top: 150px;
    }
    @media (max-width: 780px) {
        margin-bottom: 150px;
        margin-top: 120px;
    }
    .top {
        display: flex;
        @media (max-width: 780px) {
            flex-direction: column;
        }
        .iz, .de {
            width: 50%;
            @media (max-width: 780px) {
                margin: 0 auto;
            }
        }
        .iz {
            padding: 100px;

            @media (max-width: 1200px) {
                    padding: 50px;
            }
            @media (max-width: 780px) {
                width: 100%;
                padding: 20px;
            }
                
            .image {
                overflow: hidden;
                border-radius: 30px;
            }
        }
        .de {
            padding: 100px;
            @media (max-width: 1200px) {
                    padding: 50px;
                }
            @media (max-width: 780px) {
                width: 100%;
                padding: 20px;
            }
                .img {
                    margin-bottom: 50px;
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
    a {
        position: fixed;
        display: block;
        width: 50px;
        bottom: 50px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 60px;

        z-index: 5;
        @media (max-width: 780px) {
            font-size: 35px;
            position: static;
            transform: none;
            width: 100%;
            text-align: center;
        }
    }
`

export default Numeralia