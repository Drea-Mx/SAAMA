import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion"
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BlockContent from '@sanity/block-content-to-react';


const Concepto = ({data}) => {

    const textGetDataImage = getImage(data.sanityConceptoPage.headline && data.sanityConceptoPage.headline.asset)
    const textGetDataImageAlt = data.sanityConceptoPage.headline && data.sanityConceptoPage.headline.alt

    const imageGetDataImage = getImage(data.sanityConceptoPage.image && data.sanityConceptoPage.image.asset)
    const imageGetDataImageAlt = data.sanityConceptoPage.image && data.sanityConceptoPage.image.alt

    return(
        <ConceptoContainer>
            <motion.div  
                className="top" 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="iz">
                    <GatsbyImage
                        class="welcome"
                        style={{ height: "100%", width: "100%" }}
                        image={textGetDataImage}
                        alt={textGetDataImageAlt}
                    />
                </div>
                <div className="de">
                    <BlockContent
                        blocks={data.sanityConceptoPage._rawText}
                    />
                </div>
            </motion.div>
            <motion.div  
                className="bot" 
                initial={{ y: '100%', scale: 0.5 }}
                animate={{ y: '0', scale: 1 }}
                transition={{ delay: .5, duration: 1 }}
            >
                <GatsbyImage
                        class="welcome"
                        style={{ height: "100%", width: "100%" }}
                        image={imageGetDataImage}
                        alt={imageGetDataImageAlt}
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
                position: static !important;
                filter: invert(1);
                width: 100%;
                text-align: center;
                display: block;
                margin-top: 40px;
            }
        }
    @media (max-width: 850px) {
        margin-top: 150px;
    }
    @media (max-width: 780px) {
        margin-top: 100px;
        margin-bottom: 130px;
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
                width: 100%;
                padding: 20px;
            }
        }
        .de {
            @media (max-width: 780px) {
                width: 100%;
                padding: 20px;
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