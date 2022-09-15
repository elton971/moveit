/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import estilo from './ChallegeBox.module.css';	
import {ChallengesContext} from  "../../Contexts/ChallegesContext";
import {CountDownContext} from "../../Contexts/CountDownContext";

import {useContext} from "react";


export const ChallegeBox=()=>{

    const {activeChallenge,resetChallenges,completeChallenge}=useContext(ChallengesContext);
    const {stopCountDown}=useContext(CountDownContext);
    
        function handleChallengeSuceeded(){
            completeChallenge();
            stopCountDown();
        }

        function handleChallengeFailed(){
            resetChallenges();
            stopCountDown();
        }
   
     return( 
         <div className={estilo.challegeBoxContainer}>

           {
               activeChallenge ? (

                <div className={estilo.challegeActive}>
                        <header>Ganhe {activeChallenge.amount} xp</header>

                        <main>
                            <img src={`icons/${activeChallenge.type}.svg`} />
                            <strong>Novo desafio</strong>
                            <p>{activeChallenge.description}</p>
                        </main>

                        <footer>

                            <button
                             type="button"
                             className={estilo.challegeFailedButton}
                             onClick={handleChallengeFailed}
                            >
                                Falhei
                            </button>

                            <button 
                            type="button"
                            className={estilo.challegeSuccededButton}
                            onClick={ handleChallengeSuceeded}
                            >
                                Completei
                            </button>
                        </footer>

                </div>
               ) : (
                <div className={estilo.challegeNotActive}>
                    <strong>Finalise um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="level Ip"/>
                        Avance de level completando desafios.
                    </p>
                </div>
               )
           }
         </div>
     )
}  