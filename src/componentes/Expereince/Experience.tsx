import {useContext} from "react";

import styles from "./ExperienceBar.module.css";
import {ChallengesContext} from  "../../Contexts/ChallegesContext";


export const ExperienceBar = () => {

    const { currentExperience,experienceToNextLevel}=useContext(ChallengesContext);

    const percentToNextLevel = Math.round((currentExperience*100))/experienceToNextLevel;
    return ( 
        <header className={styles.experience__bar}>
            <span> 0 Xp</span>
            <div>
                <div className={styles.experience__bar__progress} style={{width:`${percentToNextLevel}%`}}/>

                <span className={styles.current_xp} style={{left:`${percentToNextLevel}%`}}>{currentExperience} xp</span>
            </div>
            <span>{experienceToNextLevel} Xp</span>
        </header>
     );
}
