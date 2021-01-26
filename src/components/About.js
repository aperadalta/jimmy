import React from 'react';
import Slide from 'react-reveal/Slide';
import styled from 'styled-components';
import funny from '../fotos/funny.jpg'

const About = () => {

    const Img = styled.div`
        width: 100vw;
        height: 65vh;
        background-image: url(${funny});

        background-position: 0px -220px; 
        background-repeat: no-repeat; 
        background-size: cover; 
        background-attachment: fixed;

        @media (max-width: 768px){
            height: 80vh;
            background-position: -450px -20px; 
        }
    `

    const Text = styled.div`
        width: 80%; 
        margin: 200px auto;

        p{
            font-size: 1.35rem;
            text-align: justify;
            text-justify: inter-word;
        }
    `

    return ( 
        <div>
            <Img></Img>
            <Text>
                <p >Vaig néixer el 1971 al Vendrell, vila nadiua del gran músic Pau Casals, i als deu anys ja
        tenia la primera bateria i les baquetes a les meves mans.
        Soc membre fundador i bateria del grup de rock Lax’n’Busto el 1986 just quan tenia catorze
        anys. Durant aquests anys he editat més de vint treballs discogràfics i he realitzat més de
        mil tres-cents concerts al llarg dels trenta quatre anys d’història del grup. Des de llavors
        que la bateria i la percussió m’han acompanyat sempre en la meva vida professional tant
        amb el grup Lax’n’Busto com en altres grups musicals en els quals he col·laborat i continuo
        col·laborant de manera activa amb més de tres-cents concerts realitzats arreu del territori.
        Vaig estudiar llenguatge musical al Conservatori de Música de Tarragona del 1980 al 1984
        i Saxo a l’Escola Municipal de Musica Pau Casals del Vendrell del 1986 al 1989. El 1990
        vaig fer un pas endavant i vaig anar a Barcelona a estudiar instrument i harmonia a l’Aula
        de Música i Jazz de Barcelona durant dos anys amb els professors Quim Solé, Julian
        Vaughn, Pep O’Callahan i Santi Arisa. El 1993 i durant 3 anys més fins el 1996 em vaig
        continuar formant en les especialitats d’Instrument i combos jazz amb en David Xirgu,
        Horacio Fumero, Victor de Diego, José Luís Gamez i també amb l’Oriol Bordas a l’àrea de
        jazz clàssic del Taller de Músics.
        L’any 2001 vaig començar el projecte Campus Rock, un projecte d’escola itinerant de pop
        rock del qual conjuntament amb el músic i productor musical Toni Xuclà. És un projecte
        educatiu musical itinerant del qual en soc el director i professor de bateria, combos i
        percussió. Hem programat més de cinquanta Campus en poblacions com: Sant Cugat del
        Vallès, Lleida, Girona, Montblanc, Granollers, Manacor (Mallorca), Ciutadella (Menorca),
        Maó (Menorca), Castellterçol, Hostalets de Pierola.
        He estat professor en diverses escoles de música: L’escola Municipal de Música Maria
        Dolors Calvet de Vilafranca del Penedès del 2001 al 2006; a Músics del Vendrell del 1998
        al 2004 i a l’Escola de música de Banyeres del Penedès. També he realitzat diversos
        tallers i Masterclass de bateria.
        El 2010 vaig ser el co-fundador del projecte educatiu musical Lax’n’Rock a les aules, una
        proposta de la qual hem fet més de cent actuacions. El projecte anava adreçat als
        alumnes de primària i secundària d’escoles i instituts de Catalunya i les Illes Balears. A
        partir de les nostres cançons explicàvem tot el procés d’elaboració d’un treball discogràfic
        des de la primera idea de les cançons fins a la seva arribada a les botigues en format físic
        o plataformes digitals.
        Com a productor musical i músic des del (2004) he treballat amb Buhos, Revolta 21,
        Cronistes, Martí Soriano, Joan Reig, JD Kellegher, Xavi Diaz, Botanica Oculta, Reevan
        Trupin, Sonic Brother, The Rippers, Peter M.Smith, In Extremis trio, La Banda Impossible.
        
        Graduat en Administració i Direcció d’Empreses per la UOC l’any 2018.</p>
            </Text>
            
        </div>
     );
}
 
export default About;