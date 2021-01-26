import React from 'react';
import styled from 'styled-components';
import style from '../style';

const Footer = () => {

    const Footer = styled.footer`
        width: 100vw;
        min-height: 200px;
        
        background:
        radial-gradient(${style.mainColor} 15%, transparent 16%) 0 0,
        radial-gradient(${style.mainColor} 15%, transparent 16%) 8px 8px,
        radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px,
        radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 9px;
        background-size:16px 16px;
        background-color:${style.mainColor};
        

        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        align-items: center;
        justify-self: center;
        padding-top: 30px;

        @media (max-width: 768px){
            div{
                h4{margin-top: 30px;}
                padding-bottom: 40px;
            }
        }

        div{
            margin: auto;
            h4{
                margin-bottom: 15px;
            }
            p{
                color: white;
            }
            a{
                i{transform: scale(1.3)}
                margin-right: 40px;
            }
        }
    `

    return ( 
        <Footer>
            <div>
                <h4>Patrocinat per:</h4>
                <img src="https://zildjian.com/media/wysiwyg/zildjian-logo-f-dt.png" alt="zildjian-icon"></img>
            </div>
            <div>
                <h4>Contacte: </h4>
                <p><b>Telf:</b> 999 666 444</p>
                <p><b>Correu: </b>somethingcool@gmail.com</p>
            </div>
            <div>
                <h4>Segueix-me: </h4>
                <a href="https://www.instagram.com/jimmyplaxen/"><i className="fa fa-instagram" ></i></a>
                <a href="https://www.facebook.com/JIMMY-PI%C3%91OL-727444077620220"><i className="fa fa-facebook" ></i></a>
                <a href="https://www.instagram.com/monetsbrunch/"><i className="fa fa-youtube-play" ></i></a>
                <a href="mailto:monetsbrunch@gmail.com"><i className="fa fa-envelope" ></i></a>
            </div>
        </Footer> 
    );
}
 
export default Footer;