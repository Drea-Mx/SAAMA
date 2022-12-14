import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import { StaticImage } from "gatsby-plugin-image"
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

const Galeria = () => {

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
            <img className="icono" src='/iconoDark.svg' alt="Pertenece, Explorando" />
            <motion.div  
                className="slider" 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >


                <Slider {...settings}>
                    <div className="slide">
                        <StaticImage
                            src="../../assets/images/galeria/001.jpg"
                            alt="SAAMA"
                            placeholder="blurred"
                            layout="FULL_WIDTH"
                            style={{ height: "100%", width: "100%" }}
                        />
                    </div>
                    <div className="slide">
                        <StaticImage
                            src="../../assets/images/galeria/002.jpg"
                            alt="SAAMA"
                            placeholder="blurred"
                            layout="FULL_WIDTH"
                            style={{ height: "100%", width: "100%" }}
                        />
                    </div>
                    <div className="slide">
                        <StaticImage
                            src="../../assets/images/galeria/003.jpg"
                            alt="SAAMA"
                            placeholder="blurred"
                            layout="FULL_WIDTH"
                            style={{ height: "100%", width: "100%" }}

                        />
                    </div>
                    <div className="slide">
                        <StaticImage
                            src="../../assets/images/galeria/004.jpg"
                            alt="SAAMA"
                            placeholder="blurred"
                            layout="FULL_WIDTH"
                            style={{ height: "100%", width: "100%" }}

                        />
                    </div>
                    <div className="slide">
                        <StaticImage
                            src="../../assets/images/galeria/005.jpg"
                            alt="SAAMA"
                            placeholder="blurred"
                            layout="FULL_WIDTH"
                            style={{ height: "100%", width: "100%" }}

                        />
                    </div>
                    <div className="slide">
                        <StaticImage
                            src="../../assets/images/galeria/006.jpg"
                            alt="SAAMA"
                            placeholder="blurred"
                            layout="FULL_WIDTH"
                            style={{ height: "100%", width: "100%" }}

                        />
                    </div>
                    <div className="slide">
                        <StaticImage
                            src="../../assets/images/galeria/006.png"
                            alt="SAAMA"
                            placeholder="blurred"
                            layout="FULL_WIDTH"
                            style={{ height: "100%", width: "100%" }}

                        />
                    </div>
                    <div className="slide">
                        <StaticImage
                            src="../../assets/images/galeria/007.jpg"
                            alt="SAAMA"
                            placeholder="blurred"
                            layout="FULL_WIDTH"
                            style={{ height: "100%", width: "100%" }}

                        />
                    </div>
                    <div className="slide">
                        <StaticImage
                            src="../../assets/images/galeria/008.jpg"
                            alt="SAAMA"
                            placeholder="blurred"
                            layout="FULL_WIDTH"
                            style={{ height: "100%", width: "100%" }}

                        />
                    </div>
                    <div className="slide">
                        <StaticImage
                            src="../../assets/images/galeria/009.jpg"
                            alt="SAAMA"
                            placeholder="blurred"
                            layout="FULL_WIDTH"
                            style={{ height: "100%", width: "100%" }}

                        />
                    </div>
                    <div className="slide">
                        <StaticImage
                            src="../../assets/images/galeria/010.jpg"
                            alt="SAAMA"
                            placeholder="blurred"
                            layout="FULL_WIDTH"
                            style={{ height: "100%", width: "100%" }}

                        />
                    </div>
                    <div className="slide">
                        <StaticImage
                            src="../../assets/images/galeria/011.jpg"
                            alt="SAAMA"
                            placeholder="blurred"
                            layout="FULL_WIDTH"
                            style={{ height: "100%", width: "100%" }}

                        />
                    </div>
                    <div className="slide">
                        <StaticImage
                            src="../../assets/images/galeria/012.jpg"
                            alt="SAAMA"
                            placeholder="blurred"
                            layout="FULL_WIDTH"
                            style={{ height: "100%", width: "100%" }}

                        />
                    </div>
                
                    

                
                </Slider>
            </motion.div>

            <Link to='/numeralia'>
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
    .slider {
        max-width: 800px;
        width: 80%;
        margin: 50px auto;
        @media (max-width: 780px) {
            width: 70%;
        }
        .slide {
            height: 500px;
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