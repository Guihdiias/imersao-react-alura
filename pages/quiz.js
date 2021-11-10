import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/Router';
import React from 'react';

import db from '../db.json'; 
import Widget from '../src/components/Widgets';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Input, { InputBase } from '../src/components/Input';
import Button, { ButtonBase } from '../src/components/Button';


const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.secondary};
 `
 

export const QuizContainer = styled.div` 
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
    }
`;





export default function QuizPage(){
    const router = useRouter();
    const [name, setName] = React.useState('');
    return(
        <QuizBackground backgroundImage={db.bg}>
      <Head>
      <title>Alura Quiz - PW</title>
      </Head>
      <QuizContainer> 
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Perfect World</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (infosDoEvento){
              infosDoEvento.preventDefault();              
              
              router.push(`/quiz?name=${name}`)
              console.log('submit do react')
            }}>
            <p>Lorem ipsum sit dolor amet...</p>            
            <InputBase placeholder="escreva seu nome" onChange={function (infosDoEvento){
              // console.log(infosDoEvento.target.value);
              // //State
              // name = infosDoEvento.target.value;
              setName(infosDoEvento.target.value)
            }}/>
           

            </form>
          </Widget.Content>
        </Widget>

        <Widget>       
          <p>Lorem ipsum sit dolor amet...</p>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl = "https://github.com/Guihdiias"/>
    </QuizBackground>
    );
}