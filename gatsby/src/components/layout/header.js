import { Link } from "gatsby";
import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion"

const Header = ({dark}) => {

    const [nav, showNav] = useState(false)


const HeaderContainer = styled.nav`
background-color: ${dark ? 'transparent' : 'var(--white)'};
position: fixed;
width: 100%;
top: 0;
z-index: 5;
transition: all 350ms ease-in-out;
    @media (max-width: 780px) {
        top: 0;
        overflow: hidden;
        border-bottom: solid 1px #2E331F;
        background-color: #EBE6DD;
        padding: 20px 50px;
    }
    .logoMov {
        display: none;
        @media (max-width: 780px) {
            display: block;
            width: 150px;
            position: absolute;
            top: 15px;
            left: 30px;
        }
    }
.ham {
    display: none;
    @media (max-width: 780px) {
        display: block;
        width: 30px;
        height: 30px;
        position: absolute;
        right: 30px;
        top: 30px;
        .line {
            width: 100%;
            height: 2px;
            background-color: #2E331F;
            margin-bottom: 7px;
        }
    }
}
ul.dark {
    a {
        color: var(--white);
        @media (max-width: 780px) {
            color: var(--green);
        }
        .line {
            background-color: var(--white);
            color: var(--green);
        }
    }
}
ul {
    display: flex;
    font-size: 1rem;
    max-width: 1500px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    padding: 20px 50px;
    @media (max-width: 1200px) {
        font-size: .8rem;
        display: inline-block;
    }
    @media (max-width: 780px) {
        width: 100%;
        margin-top: 100px;
        font-size: 1.5rem;
    }
    
    .logo {
        width: 200px;
        @media (max-width: 1200px) {
            width: 150px;
        }
        @media (max-width: 780px) {
            display: none;
        }
    }
    .active {
        .line {
            width: 100% !important;
        }
    }
    li {
        margin-right: 20px;
        position: relative;
        display: inline-block;
        @media (max-width: 1200px) {
            margin-bottom: 20px;
        }
        @media (max-width: 780px) {
            display: block;
            text-align: center;
            margin: 0 auto 30px;
            width: 300px;
        }
        
        .line {
            position: absolute;
            bottom: -8px;
            width: 0%;
            height: 4px;
            background-color: #2E331F;
            transition: width 250ms ease-in-out;
        }
        &:hover {
            .line {
                width: 100%;
            }
        }
    }
}
`

    return(
        <HeaderContainer 
        style={{
            height: nav ? '600px' : '80px',
            backgroundColor: nav ? '#EBE6DD' : '',
          }}
        >
            <button className="ham" onClick={() => showNav(!nav)}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </button>
            <Link to='/' className="logoMov">
                <img src="/logo.svg" alt='SAAMA Logo' />
            </Link>
            <motion.ul   
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className={dark === true ? 'dark' : ''}
            >
                <li className="logo">
                    <Link to='/'>
                        <img src="/logo.svg" alt='SAAMA Logo' />
                    </Link>
                </li>
                <li>
                    <Link 
                        activeClassName="active"
                        to='/concepto'>CONCEPTO<div className="line"></div></Link>
                </li>
                <li>
                    <Link
                        activeClassName="active" 
                        to='/ubicacion'>UBICACIÓN<div className="line"></div></Link>
                </li>
                <li>
                    <Link
                        activeClassName="active" 
                        to='/numeralia'>NUMERALIA<div className="line"></div></Link>
                </li>
                <li>
                    <Link 
                        activeClassName="active"
                        to='/amenidades'>AMENIDADES<div className="line"></div></Link>
                </li>
                <li>
                    <Link
                        activeClassName="active" 
                        to='/galeria'>GALERÍA<div className="line"></div></Link>
                </li>
                <li>
                    <Link 
                        activeClassName="active"
                        to='/cotizador'>COTIZADOR<div className="line"></div></Link>
                </li>
                <li>
                    <Link
                        activeClassName="active" 
                        to='/contacto'>CONTACTO<div className="line"></div></Link>
                </li>                
            </motion.ul>
                
        </HeaderContainer>
    )
    
}





export default Header