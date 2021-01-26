import React, { useEffect } from 'react';

import styled from 'styled-components';

const Lang = () => {

    const Lang = styled.div`
        position: fixed;
        bottom: 20px;
        background-color: rgb(19, 18, 18);
        color: white;
        width: 50px;
        height: 50px;
        padding-top: 16px;
        border-radius: 50%;
        right: 30px;
        text-align: center;
        z-index: 5;
        border: 2px solid white;;
        cursor: pointer;
        transition: bottom 0.3s;

        &:hover{
            background-color: rgb(67, 67, 67)
        }
    `
    
    useEffect(() => {
          const es = document.getElementById('es');
          const ca = document.getElementById('ca');
          const en = document.getElementById('en');

          const ES = document.getElementsByClassName("ES");
          const CA = document.getElementsByClassName("CA");
          const EN = document.getElementsByClassName("EN");
          var deployed = false;

          function rollUp(){
            es.style.bottom = "140px";
            ca.style.bottom = "80px";

            ca.style.zIndex = "1";
            es.style.zIndex = "1";
            en.style.zIndex = "1";
            
            deployed = true;
          }

          function rollDown(e){
            es.style.bottom = "20px";
            ca.style.bottom = "20px";

            document.getElementById(e).style.zIndex = "9";

            var languageChosen = e.toUpperCase();
            var languages = document.getElementsByClassName(languageChosen);

            function deleteLang(lang){
                [].forEach.call(lang, function (el) {
                    el.style.display = 'none';
                }); 
            }

            deleteLang(ES);
            deleteLang(CA);
            deleteLang(EN);
            
            [].forEach.call(languages, function (el) {
                el.style.display = 'block';
            });

            deployed = false;
          }


          var items = document.getElementsByClassName("lang");
          [].forEach.call(items, function (el) {
                el.addEventListener("click", (e) => {
                let chosen = e.target.id;
                deployed ? rollDown(chosen) : rollUp()
            });
          });

      },[]);

    return ( 
        <div>
            <Lang 
                className="lang" 
                id="es" 
            >ES</Lang>
            <Lang 
                className="lang" 
                id="ca"
            >CA</Lang>
            <Lang 
                className="lang" 
                id="en"
            >EN</Lang>
        </div> );
}
 
export default Lang;