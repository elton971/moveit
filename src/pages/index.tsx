import {ExperienceBar} from "../componentes/Expereince/Experience";
import { Perfil } from "../componentes/Perfil/Perfil";
import global from "../Style/global.module.css";
import { DoneChallenges } from "../componentes/DoneChallenges/DoneChallenges";
import {CountDown} from "../componentes/CountDown/CountDown";
import Head from "next/head";
import { ChallegeBox } from "../componentes/ChallegeBox/ChallegeBox";
import { CountDownProvider } from "../Contexts/CountDownContext";
import { GetServerSideProps } from "next";
import { ChallengesProvider } from "../Contexts/ChallegesContext";

interface HomeProps {
  level:number;
  currentExperience:number;
  challengesCompleted:number;
}
// podemos importar o next/head para usar o title, link e meta
export default function Home (props:HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
      >
      <div className={global.container}>
        <Head>
            <title>Inicio | Home </title> 
        </Head>


        <ExperienceBar />
        <CountDownProvider>
          <section>
            <div>
              <Perfil/>
              <DoneChallenges/>
              <CountDown/>
            </div>
            <div>
                <ChallegeBox/>           
            </div>
          </section>
        </CountDownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps:GetServerSideProps = async (ctx) => {
  const {level, currentExperience, challengesCompleted}=ctx.req.cookies;

  return {
    props:{
      level:Number(level),
      currentExperience:Number(currentExperience),
      challengesCompleted:Number(challengesCompleted)
    }
  }
}