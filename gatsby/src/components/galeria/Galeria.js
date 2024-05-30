import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"


function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        className={className}
        onClick={onClick}
      >
        ↓
      </button>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        className={className}
        onClick={onClick}
      >
        ↓
      </button>
    );
  }

const Galeria = ({data}) => {

    const iconoGetDataImage = getImage(data.sanityGaleriaPage.icono && data.sanityGaleriaPage.icono.asset)
    const iconoGetDataImageAlt = data.sanityGaleriaPage.icono && data.sanityGaleriaPage.icono.alt


    const settings = {
        autoplay: true,
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

    return(
        <UbicacionContainer>
            <div className="icono">
                <GatsbyImage
                    class="welcome"
                    style={{ height: "100%", width: "100%" }}
                    image={iconoGetDataImage}
                    alt={iconoGetDataImageAlt}
                />
            </div>
            <motion.div  
                className="slider" 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >


                <Slider {...settings}>

                {data.sanityGaleriaPage.galleria.images.map((imagen) => {
                        const imagenGetDataImage = getImage(imagen && imagen.asset)
                    
                                return (
                                    <div className="slide" key={imagen._key}>
                                        <Link href="/galeria/001.webp" target='_blank'>
                                            <GatsbyImage
                                                class="welcome"
                                                style={{ height: "100%", width: "100%" }}
                                                image={imagenGetDataImage}
                                                alt='Imagen Saama'
                                            />
                                        </Link>
                                    </div>
                                )
                            })}





                
                </Slider>
            </motion.div>

            <Link to='/cotizador' className="arrow">
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
    a.arrow {
        position: relative;
        display: block;
        width: 50px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 30px;
        font-size: 60px;
        z-index: 5;
        @media (max-width: 680px) {
            font-size: 35px;
        }
    }
    .icono {
        width: 46px;
        margin: 0 auto;
        @media (max-width: 780px) {
            width: 40px;
        }
    }
    .slider {
        max-width: 800px;
        width: 80%;
        margin: 50px auto 0;
        @media (max-width: 780px) {
            width: 70%;
        }
        .slide {
            height: 450px;
            border-radius: 30px;
            overflow: hidden;
        }
        .slick-prev {
            cursor: pointer;
            position: absolute;
            left: -50px;
            top: 50%;
            transform: rotate(90deg);
            font-size: 2rem;
        }
        .slick-next {
            cursor: pointer;
            position: absolute;
            right: -50px;
            top: 50%;
            transform: rotate(-90deg);
            font-size: 2rem;
        }
    }
`

export default Galeria