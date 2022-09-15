/* eslint-disable @next/next/no-img-element */
import estilo from "./Perfil.module.css";

import { useContext } from "react";
import {ChallengesContext} from  "../../Contexts/ChallegesContext";


export function Perfil() {

    const {level}=useContext(ChallengesContext);
  return (
    <div className={estilo.perfil_content}>
        <img src="https://github.com/elton971.png" alt="" />
        <div>
             <strong>Elton Carlos</strong>
            
             <p>
                <img src="icons/level-up.svg" alt="level" />
                Level {level}
             </p>
        </div>
    </div>
  );
}