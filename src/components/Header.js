import React, {Fragment} from 'react';
import styled from 'styled-components';
import '../index.css';
import style from '../style';
import foto from '../fotos/logo.png'

const Header = () => {
    const ResponsiveX = styled.div`
        display: none;

        @media (max-width: 768px) {
            display: block;
            position: fixed;
            top: 30px;
            right: 30px;
            z-index: 99;
            color: white;
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
        }
    `
    const Ul = styled.ul`
        width: 50vw;
        list-style-type: none;
        cursor: pointer;
        li{
            height: 80px;
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
    var prevScrollpos = window.pageYOffset;
    
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-80px";
        }
        prevScrollpos = currentScrollPos;
    }

    return ( 
        <Fragment>
            <ResponsiveX>
                Hi
            </ResponsiveX>
        {/* NAVBAR IN SPANISH*/}
            <div className="ES">
                <Header id="navbar" className = "center">
                    <a href="#mainPage" className="ES">
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
                <Header id="navbar" className = "center">
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
                <Header id="navbar" className = "center">
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