import React from "react";
import Filmes from "./components/Filmes";



// API_KEY:d93c97a85b930dd93e8a05ab4d92dbb3
// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1



// https://api.themoviedb.org/3/movie/popular?api_key=d93c97a85b930dd93e8a05ab4d92dbb3&language=en-US&page=1


export default class App extends React.Component{
  render(){
    return(
      <>
      < Filmes/>
      <h1></h1>
      </>
    )
  }
}
