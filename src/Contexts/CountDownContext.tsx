import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import { ChallengesContext } from './ChallegesContext';

interface CountDownContextData {
    minutos: number;
    segundos: number;
    hashFinished: boolean;
    active: boolean;
    startCountDown:()=>void;
    stopCountDown:()=>void;
}

interface ChallegesProviderProps{
    children:ReactNode;
}

export const CountDownContext =createContext({} as CountDownContextData);


export function CountDownProvider({children}:ChallegesProviderProps){


    const {startNewChallenge}=useContext(ChallengesContext);


    const [time, setTime] = useState(25*60);

    const [active, setActive] = useState(false);

    const [hashFinished,  setHashFinished]= useState(false);

    let countDownTimeOut:NodeJS.Timeout;

    const minutos = Math.floor(time/60);//calcula os minutos
    const segundos = time%60;//cacula os segundos
    


     
    function startCountDown(){
        setActive(true);
       
    }

    function stopCountDown(){
        clearTimeout(countDownTimeOut);
        setActive(false);
        setTime(25*60);
        setHashFinished(false);
    }

    useEffect(()=>{
        if(active && time > 0){
            // eslint-disable-next-line react-hooks/exhaustive-deps
            countDownTimeOut= setTimeout(()=>{
                setTime(time-1);
            },1000);
        }else if(active && time === 0){
            setHashFinished(true);
            setActive(false);
            startNewChallenge();
        }
    },[active, time]);
    
    return(
        <CountDownContext.Provider value={{
            minutos,
            segundos,
            hashFinished,
            active,
            startCountDown,
            stopCountDown


        }}>
            {children}      
        </CountDownContext.Provider>
    )
}