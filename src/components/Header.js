import React, {Fragment, useEffect} from 'react';
import styled from 'styled-components';
import '../index.css';
import style from '../style';
import foto from '../fotos/logo.png'

const Header = () => {
    const ResponsiveX = styled.div`
        display: none;

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
        const responsiveNav = document.getElementById('responsiveNav');
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
    }, [])
    
    

    return ( 
        <Fragment>
            <ResponsiveX id="responsiveNav">
                <img src={foto} alt="logo"></img>
                <div>Hi</div>
            </ResponsiveX>
        {/* NAVBAR IN SPANISH*/}
            <div className="ES">
                <Header id="navbar" className = "center navbarLang">
                    <a href="#mainPage" className="ES ">
                        <img src={foto} alt="logo"></img>
                    </a>
                    <nav>
                        <Ul className = "center">
                            <li><p>Acerca de</p></li>
                            <li><p>Videos</p></li>
                            <li><p>Clases</p> </li>
                            <li><p>Contacto</p></li>
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
                    <a href="#mainPage"><img src={foto} alt="logo"></img></a>
                    <nav>
                        <Ul className = "center">
                            <li><p>Acerca de</p></li>
                            <li><p>Videos</p></li>
                            <li><p>Clases</p> </li>
                            <li><p>Contacto</p></li>
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
                    <a href="#mainPage" ><img src={foto} alt="logo"></img></a>
                    <nav>
                        <Ul className = "center">
                            <li><p>About</p></li>
                            <li><p>Videos</p></li>
                            <li><p>Classes</p> </li>
                            <li><p>Contact</p></li>
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