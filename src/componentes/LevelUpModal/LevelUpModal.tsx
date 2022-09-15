import { useContext } from "react";
import { ChallengesContext } from "../../Contexts/ChallegesContext";
import estilo from "./LevelUpModal.module.css";


export function LevelUpModal(){
    const {level,closelevelUpModal}=useContext(ChallengesContext)
    return(
        <div className={estilo.overlay}>
            <div className={estilo.container}>
                <header>{level}</header>

                <strong>Parabens</strong>
                <p>Você alcancou um novo nivel</p>
                    
                <button type="button" onClick={closelevelUpModal}>
                        <img src="/icons/close.svg" alt="fechar modal" />
                </button>
            </div>
        </div>
    )
}