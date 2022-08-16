import React from "react";
import axios from "axios";
// API_KEY:d93c97a85b930dd93e8a05ab4d92dbb3
// https://api.themoviedb.org/3/movie/popular?api_key=d93c97a85b930dd93e8a05ab4d92dbb3&language=en-US&page=1'

 const Mymovie_Api = axios.create({
  baseURL:"https://api.themoviedb.org/3/movie/popular?api_key=d93c97a85b930dd93e8a05ab4d92dbb3&language=en-US&page=1"
 })

export default class App extends React.Component{

  state={
    movies:[

    ]
  }
  componentDidMount(){
    this.handleMovies()
  }
  handleMovies = async () =>{
    const pegarApi = await Mymovie_Api.get()

    const InfosFIlmes = pegarApi.data.results.map(item => {
      return{
        nome:item.title,
        sinopse: item.overview
      }
    })

    this.setState({movies: InfosFIlmes})

    console.log(pegarApi)
  }
  render(){
    return(
      <>
      <h1>Aqui vai os filmes</h1>
      <ul>{this.state.movies.map(infos => (
        <li>
          {infos.nome}
          <p>{infos.sinopse}</p>
        </li>
      ))}</ul>
      </>
    )
  }
}