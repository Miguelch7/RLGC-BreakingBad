import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 320px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;
  transition: border .5s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
    border: 2px solid rgba(255, 255, 255, .3);
  }
`;


function App() {

  // State de frases
  const [frase, guardarFrase] = useState({});

  const consultarAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json();
    guardarFrase(frase[0]);
  };

  // Cargar una frase al iniciar
  useEffect(() => {
    consultarAPI();
  }, [])

  return (
    <Contenedor>
      <Frase 
        frase={frase}
      />
      <Boton
        onClick={consultarAPI}
      >
        Obtener Frase
      </Boton>
    </Contenedor>
  );
}

export default App;
