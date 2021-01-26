import React, {Fragment} from 'react';
import Slide from 'react-reveal/Slide';
import styled from 'styled-components';

import style from '../style';

const Home = () => {

    const Name = styled.h1`
        position: absolute;
        color: white;
        font-size: 7rem;
        margin-left: 60%;
        margin-top: 5%;
        padding: 50px;
        font-weight: 1200;
        line-height: 90%;
        border-radius: 15px;

        background-color: rgba(255, 255, 255, .15);  
        backdrop-filter: blur(10px);

        @media (max-width: 768px) {
            #mainPage h1{
                font-size: 3rem;
                margin-left: 13%;
                margin-top: 80%;
                padding: 50px 80px;
            }
        }
    `

    const Section = styled.section`
        width: 60%;
        margin: 10vh auto 20vh auto;
        position: relative;
        font-size: 1.5rem;

        h2{
            font-size: 2em;
            margin-bottom: 3rem;

            &::after{
                content: '';
                width: 170px;
                height: 15px;
                border-bottom: solid 7px ${style.mainColor};
                display: block;
            }
        }

        p{
            text-align: justify;
            text-justify: inter-word;
        }

        button{
            border: none;
            background-color: white;
            font-size: 1.5rem;
            margin-top: 2rem;
            color: ${style.mainColor};
            border-bottom: solid 2px ${style.mainColor};
            text-align: right;
            position: absolute;
            right: 0;
            cursor: pointer;
            outline: none;
            transition: color 0.5s, border-bottom 0.5s;

            &:hover{
                color: ${style.secondaryColor};
                border-bottom: solid 2px ${style.secondaryColor};
            }
        }

        @media (max-width: 768px) {
            font-size: 1rem;
            width: 80%;
        }
    `


    return ( 
        <Fragment>
            <div id="mainPage" style={{marginTop: "90px"}}>
                {/* <Name>JIMMY<br/>PIÑOL</Name> */}
            </div>
            <div id="letstry"></div>
            <Section>
                <Slide left><h2>Sobre mi</h2></Slide>
                <p>Bateria i membre fundador del grup de Rock  Lax’n’ Busto. 
                    Amb Lax’n’Busto ha realitzat prop del miler d’actuacions arreu dels Països Catalans, rebent nombrosos premis. 
                    També han actuat en diversos països d’Europa i Amèrica llatina. 
                    És professor de bateria, tècnic i productor als estudis La Casa</p>
                <button>Més info ...</button>
            </Section>
            
            <Section>
                <Slide left><h2>Videos</h2></Slide>
                <p>Bateria i membre fundador del grup de Rock  Lax’n’ Busto. 
                    Amb Lax’n’Busto ha realitzat prop del miler d’actuacions arreu dels Països Catalans, rebent nombrosos premis. 
                    També han actuat en diversos països d’Europa i Amèrica llatina. 
                    És professor de bateria, tècnic i productor als estudis La Casa</p>
                <button>Més info ...</button>
            </Section>
            <Section>
                <Slide left><h2>Classes</h2></Slide>
                <p>Bateria i membre fundador del grup de Rock  Lax’n’ Busto. 
                    Amb Lax’n’Busto ha realitzat prop del miler d’actuacions arreu dels Països Catalans, rebent nombrosos premis. 
                    També han actuat en diversos països d’Europa i Amèrica llatina. 
                    És professor de bateria, tècnic i productor als estudis La Casa</p>
                <button>Més info ...</button>
            </Section>
        </Fragment> 
        );
}
 
export default Home;