import { createContext,useState,ReactNode, useEffect} from "react";
import challenges from "../../challenges.json"
import Cookies from "js-cookie";

import {LevelUpModal} from "../componentes/LevelUpModal/LevelUpModal";

interface Challenge{
    type:"body" | "eye";
    description:string;
    amount:number;
}

interface ChallegesContextData{
    level:number;
    currentExperience:number;
    challengesCompleted:number;
    activeChallenge:Challenge;
    experienceToNextLevel:number;
    levelUp:()=>void;
    startNewChallenge:()=>void;
    resetChallenges:()=>void;
    completeChallenge:()=>void;
    closelevelUpModal:()=>void

}

interface ChallegesProviderProps{
    children:ReactNode;
    level:number;
    currentExperience:number;
    challengesCompleted:number;
}


export const ChallengesContext =createContext({} as ChallegesContextData);




export const ChallengesProvider=({children, ...rest}:ChallegesProviderProps)=>{

     const [level,setLevel]=useState(rest.level ?? 1);
     const [currentExperience, setcurrentExperience]= useState(rest.currentExperience ?? 0);
     const [challengesCompleted, setChallengesCompleted]= useState(rest.challengesCompleted ?? 0);

     const [activeChallenge, setActiveChallenge]=useState(null);

     const experienceToNextLevel=Math.pow((level+1)*4,2)

     const [isLevelUpModalOpen, setIsLevelUpModalOpen]=useState(false);

     function levelUp(){
        setLevel(level+1);
        setIsLevelUpModalOpen( true);
     } 
     function closelevelUpModal(){
        setIsLevelUpModalOpen( false);
    }


     function startNewChallenge(){

        const randomChallengeIndex=Math.floor(Math.random()*challenges.length);
        const challenge=challenges[randomChallengeIndex];

        setActiveChallenge(challenge);
        
        new Audio("notification.mp3").play();

        if(Notification.permission === "granted"){
            new Notification("Novo desafio",{
                body:`Valendo ${challenge.amount}xp!!`,
            })
        }
        
     }

     function resetChallenges(){
        setActiveChallenge(null);
   
    }

    //Permssoes

    useEffect(()=>{
        Notification.requestPermission();
    },[]);

    //use para salvar cookies
    useEffect(()=>{

        Cookies.set("level", String(level));//salva o level
        Cookies.set("currentExperience", String(currentExperience));//salva o currentExperience
        Cookies.set("challengesCompleted", String(challengesCompleted));//salva o challengesCompleted

    },[level,currentExperience,challengesCompleted]);

    //use para carregar Cookies
    useEffect(()=>{
        
    },[]);
    function completeChallenge(){
        if(!activeChallenge){
            return;
        }
        
        const {amount} =  activeChallenge;

        let finalExperience=currentExperience+amount;

        if(finalExperience >= experienceToNextLevel  )
        {
             finalExperience=finalExperience-experienceToNextLevel;
             levelUp();
        }
        setcurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted+1);
    }

     return(
        <ChallengesContext.Provider value={{
            level,
            levelUp,
            currentExperience,
            challengesCompleted,
            startNewChallenge,
            activeChallenge,
            resetChallenges,
            experienceToNextLevel,
            completeChallenge,
            closelevelUpModal
           
            }}>
             
            {children}
            {
                isLevelUpModalOpen && <LevelUpModal/>
            }
            
        </ChallengesContext.Provider>
     )

}