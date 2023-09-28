import api from '../../services/api'


import './home.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from '../../componentes/navbar';

const Home = () => {
 
    return (
        <>
      <NavBar />
      <div className="App flex row">
        <div className='container'>
          <div className="welcome-message">
            <h1>Seja bem-vindo ao Quiz </h1>
            <p>Teste seus conhecimentos no Desafio do Conhecimento!</p>
          </div>
          <div className="options">
            <Link to="/quiz">Ir para o Quiz</Link>
            <Link to="/ranking">Ir para o Ranking</Link>
          </div>
        </div>
      </div>
    </>
    )
}

export default Home;