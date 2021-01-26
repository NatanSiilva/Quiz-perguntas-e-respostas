import React, { useState } from 'react'
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 54px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin:auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter()
  const [ name, setName ] = React.useState('');
  console.log('retorno do useState', name)

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuizz - Modulo Base</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>The legend zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(event) => {
              event.preventDefault();
              router.push(`/quizz?name=${name}`)
              console.log('Fazendo uma submissão por meio do react');
            }}>
              <input
                onChange={(event) => {
                  console.log(event.target.value)
                  // state
                  //name = event.target.value
                  setName(event.target.value)
                }} 
                placeholder="Digite o seu nome"
              />
              <button type="submit" disabled={ name.length === 0 }>
                jogar 
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>The legend zelda</h1>
            <p>lorem ipdum dolor ait amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/NatanSiilva" />
    </QuizBackground>
  );
}
