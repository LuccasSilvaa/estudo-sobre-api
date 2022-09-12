import React from 'react';
import Header from './components/Header/Header';
import Movie from './components/Movie/Movie';
import Home from './components/Home/Home';
import Show from './components/Show/Show';

import styled, { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  color: white;
  font-family: 'Aboreto', cursive;
}
body{
  background-color:#020D18;
}
`;

const Navegation = styled.div`
font-size:1.5rem;
background-color:#1C3D5D;
display: flex;
align-items: center;
justify-content: center;
justify-content: space-around;

#logo{
  h2{
    color: red;
  }
  display: flex;
  align-items: center;
}

#nav{
  width:25rem;
  display:flex;
  justify-content:space-around;
}

input{
  width: 15rem;
  height:1.5rem;
  border: 1px solid black;
  border-radius: 50px;
  padding: 0.5rem 1rem;
  background-color: transparent;
  font-family: Arial, Helvetica, sans-serif;
  color:white;
}
input:focus{
  outline:0;
  background-color:#020D18;
}
input::placeholder{
  color:#020D18;
}
`


export default class App extends React.Component {
  render() {
    return (
      <>
      <GlobalStyle />
      <Header/>
      </>
    );
  }
}

// API_KEY:d93c97a85b930dd93e8a05ab4d92dbb3
// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

// https://api.themoviedb.org/3/movie/popular?api_key=d93c97a85b930dd93e8a05ab4d92dbb3&language=en-US&page=1