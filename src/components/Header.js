import React, {Fragment, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import '../index.css';
import style from '../style';

import foto from '../fotos/logo.png'

const Header = () => {
    const ResponsiveX = styled.div`
        display: none;

        #openNav{
            cursor: pointer;
            position: relative;
            div{
                width: 23px;
                height: 2px;
                background-color: white;
                margin: 4px 0;
                position: absolute;
            }
            div:nth-child(1){
                top: -7px;
                transition: transform 0.5s, top .5s;
            }
            div:nth-child(2){
                transition: opacity 0.5s;
            }
            div:nth-child(3){
                top: 7px;
                transition: transform 0.5s, top .5s;
            }
        }

        @media (max-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: space-around;

            position: fixed;
            top: 0px;
            left: 0px;
            z-index: 99;
            width: 100%;
            height: 100px;
            background-color: ${style.mainColor};
            color: white;

            img{
                height: 90px;
                width: auto;
            }
        }
        
    `
    const Header = styled.header`
        position: fixed;
        top: 0;
        font-size: 1.1rem;
        transition: top 0.3s;
        z-index: 3;
        background-color: ${style.mainColor};
        width: 100%;
        color: white;
        font-weight: 700;

        img{
            height: 90px;
            width: auto;
        }

        @media (max-width: 768px) {
            flex-direction: column;
            padding: 50px 0;
            top: -550px;
        }
    `
    const Ul = styled.ul`
        width: 50vw;
        list-style-type: none;
        cursor: pointer;
        li{
            height: 100px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-around;
            &:hover{
                color: ${style.secondaryColor};
                border-bottom: solid 7px ${style.secondaryColor};
            }
        }
        @media (max-width: 768px) {
            flex-direction: column;
            li{
                margin: -6px;
            }
            margin: 20px 0;
        }
    `
    // END OF CSS
    

    useEffect(()=>{
        var prevScrollpos = window.pageYOffset;
        var windowWidth = window.innerWidth;

        function navbarMove(height){
            [].forEach.call(navbarLang, function (el) {
                el.style.top = height;
            });
        }
        
        // SCROLL UP NAVBAR
        const navbarLang = document.getElementsByClassName('navbarLang');

        if(windowWidth > 768){
            window.onscroll = function() {
                var currentScrollPos = window.pageYOffset;
                if (prevScrollpos > currentScrollPos) {
                    navbarMove("0");
                } else {
                    navbarMove("-100px");
                }
                prevScrollpos = currentScrollPos;
            }
        }
        
        // RESPONSIVE NAVBAR
        const responsiveNav = document.getElementById('openNav');
        var responsiveNavPosition = true;

        responsiveNav.addEventListener("click", ()=> {
            if(responsiveNavPosition){
                navbarMove("-35px");
                responsiveNavPosition = false;
            }else{
                navbarMove("-500px");
                responsiveNavPosition = true;
            }
        })

        // ANIMATE RESPONSIVE BUTTON
        const respButton = document.getElementById('openNav'),
              first = document.querySelector("#openNav div:nth-child(1)"),
              second = document.querySelector("#openNav div:nth-child(2)"),
              third = document.querySelector("#openNav div:nth-child(3)");

        var downOrUp = true;
        respButton.addEventListener("click", ()=>{
            
            if(downOrUp){
                first.style.cssText = "transform: rotate(45deg); top: 0";
                second.style.opacity = "0";
                third.style.cssText = "transform: rotate(-45deg); top: 0";
                downOrUp = false;
            }else{
                first.style.cssText = "transform: rotate(0deg); top: -7px";
                second.style.opacity = "1";
                third.style.cssText = "transform: rotate(0deg); top: 7px";
                downOrUp = true;
            }
            
        })

    }, [])
    
    

    return ( 
        <Fragment>
            <ResponsiveX id="responsiveNav">
                <img src={foto} alt="logo"></img>
                <div id="openNav">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </ResponsiveX>

        {/* NAVBAR IN SPANISH*/}
            <div className="ES">
                <Header id="navbar" className = "center navbarLang">
                    <a href="#mainPage" className="ES ">
                        <Link to='/'><img src={foto} alt="logo"></img></Link>
                    </a>
                    <nav>
                        <Ul className = "center">
                            <Link to='/about'><li><p>Acerca de</p></li></Link>
                            <Link to='/videos'><li><p>Videos</p></li></Link>
                            <Link to='/videos'><li><p>Clases</p> </li></Link>
                            <Link to='/contact'><li><p>Contacto</p></li></Link>
                        </Ul>
                    </nav>
                    <nav >
                        <a href="https://www.instagram.com/monetsbrunch/"><i className="fa fa-instagram" ></i></a>
                        <a href="https://www.instagram.com/monetsbrunch/"><i className="fa fa-facebook" ></i></a>
                        <a href="https://www.instagram.com/monetsbrunch/"><i className="fa fa-youtube-play" ></i></a>
                        <a href="mailto:monetsbrunch@gmail.com"><i className="fa fa-envelope" ></i></a>
                    </nav> 
                </Header>
            </div>

        {/* NAVBAR IN CATALAN*/}
            <div className="CA">
                <Header id="navbar" className = "center navbarLang">
                    <a href="#mainPage"><Link to='/'><img src={foto} alt="logo"></img></Link></a>
                    <nav>
                        <Ul className = "center">
                            <Link to='/about'><li><p>Sobre mi</p></li></Link>
                            <Link to='/videos'><li><p>Videos</p></li></Link>
                            <Link to='/videos'><li><p>Clases</p> </li></Link>
                            <Link to='/contact'><li><p>Contacte</p></li></Link>
                        </Ul>
                    </nav>
                    <nav >
                        <a href="https://www.instagram.com/monetsbrunch/"><i className="fa fa-instagram" ></i></a>
                        <a href="https://www.instagram.com/monetsbrunch/"><i className="fa fa-facebook" ></i></a>
                        <a href="https://www.instagram.com/monetsbrunch/"><i className="fa fa-youtube-play" ></i></a>
                        <a href="mailto:monetsbrunch@gmail.com"><i className="fa fa-envelope" ></i></a>
                    </nav> 
                </Header>
            </div>

        {/* NAVBAR IN ENGLISH*/}
            <div className="EN">
                <Header id="navbar" className = "center navbarLang">
                    <a href="#mainPage" ><Link to='/'><img src={foto} alt="logo"></img></Link></a>
                    <nav>
                        <Ul className = "center">
                        <Link to='/about'><li><p>About</p></li></Link>
                            <Link to='/videos'><li><p>Videos</p></li></Link>
                            <Link to='/videos'><li><p>Classes</p> </li></Link>
                            <Link to='/contact'><li><p>Contact</p></li></Link>
                        </Ul>
                    </nav>
                    <nav >
                        <a href="https://www.instagram.com/monetsbrunch/"><i className="fa fa-instagram" ></i></a>
                        <a href="https://www.instagram.com/monetsbrunch/"><i className="fa fa-facebook" ></i></a>
                        <a href="https://www.instagram.com/monetsbrunch/"><i className="fa fa-youtube-play" ></i></a>
                        <a href="mailto:monetsbrunch@gmail.com"><i className="fa fa-envelope" ></i></a>
                    </nav> 
                </Header>
            </div>
            
        </Fragment>
        
     );
}
 
export default Header;