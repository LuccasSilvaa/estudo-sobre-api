import React from "react";
import axios from 'axios';

const MyMovie_API = axios.create({
  baseURL:'https://api.themoviedb.org/3/movie/popular?api_key=d93c97a85b930dd93e8a05ab4d92dbb3&language=en-US&page=1'
})

export default class Filmes extends React.Component{
    
    state={
      movie:[]
    }
  
    componentDidMount(){
      this.getMovie()
    }
    getMovie = async () =>{
      const response = await MyMovie_API.get()

      const InfoMovie = response.data.results.map(item => {
        return{
          nome: item.title,
          sinopse: item.overview,
          imagem:item.poster_path
        }
      })

      this.setState({movie:InfoMovie})

      console.log(response)
    }

  render(){
    return(
      <ul>{this.state.movie.map(item => (
      <>
       <img src={item.imagem}/>
        <li>{item.nome}</li>
        <p>{item.sinopse}</p>
      </>
      ))}</ul>
    )
  }
}