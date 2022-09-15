import estilo from "./CountDown.module.css";
import{ useContext } from "react";

import { CountDownContext } from "../../Contexts/CountDownContext";



export const CountDown =()=>{

    const {minutos, segundos, hashFinished, active, startCountDown, stopCountDown}=useContext(CountDownContext);

    const [minutoLeft,minutoRight] = String(minutos).padStart(2, "0").split(""); //reparte  e cria um array a a variavel minutos
    const [segundosLeft,segundosRight] = String(segundos).padStart(2, "0").split("");// //reparte  e cria um array a a variavel segundos

  

    return(
        <div>
            <div className={estilo.container}>
                <div>
                    <span>{minutoLeft}</span>
                    <span>{minutoRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{segundosLeft}</span>
                    <span>{segundosRight}</span>
                </div>
            </div>

            {
                hashFinished ? (
                    
                    <button type="button" 
                    disabled 
                    className={estilo.startbutton} 
                    >
                        Ciclo Encerrado
                    </button>
                ):(
                    <>
                        {active ? (
                            <button type="button"  
                            className={`${estilo.startbutton} ${estilo.stopbutton}`} 
                            onClick={stopCountDown}
                            >
                                Abandonar o clico
                            </button>
                        ) : (
                            <button type="button"  className={estilo.startbutton} onClick={startCountDown}>
                            Iniciar um  ciclo
                            </button>
                        )}
                    </>
                )
            }   


        </div>
    )
}