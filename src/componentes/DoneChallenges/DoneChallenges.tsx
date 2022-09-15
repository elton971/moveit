import estilo from "./Done.module.css";
import {ChallengesContext} from  "../../Contexts/ChallegesContext";
import { useContext } from "react";

export function DoneChallenges() {

  const {challengesCompleted }=useContext(ChallengesContext);
  
  return (
    <div  className={estilo.container}>
        <span>Desafios Completos</span>
        <span>{challengesCompleted}</span>
    </div>
  );
}