import React from 'react';
import axios from 'axios';
import * as S from './Moviestyle';

const MyMovie_API = axios.create({
  baseURL:
    'https://api.themoviedb.org/3/movie/popular?api_key=d93c97a85b930dd93e8a05ab4d92dbb3&language=pt-BR&page=1',
});

export default class Movie extends React.Component {
  state = {
    movie: [],
  };

  componentDidMount() {
    this.getMovie();
  }

  // componentDidMount (){
  //   if(this.nota >= 8){
  //     document.style.color = 'green'
  //   }
  // }
  getMovie = async () => {
    const response = await MyMovie_API.get();

    const InfoMovie = response.data.results.map((item) => {
      return {
        nome: item.title,
        nota: item.vote_average,
        sinopse: item.overview,
        image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
      };
    });

    this.setState({ movie: InfoMovie });

    console.log(response);
  };

  render() {
    return (
      
      <S.Filmes>
        {this.state.movie.map((item) => (
          <S.Card>
            <img src={item.image} alt={item.nome}/>
            <S.Info>
            <h3>{item.nome}</h3>
            <span>{item.nota}</span>
            </S.Info>
            <S.Overview id='overview'>
              <h3>sinopse</h3>
              {item.sinopse}
            </S.Overview>

          </S.Card>
        ))}
      </S.Filmes>
    );
  }
}
