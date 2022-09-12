import React from 'react';
import axios from 'axios';
import * as S from './Showstyle';

const MyShow_API = axios.create({
  baseURL:
    'https://api.themoviedb.org/3/tv/popular?api_key=d93c97a85b930dd93e8a05ab4d92dbb3&language=pt-BR&page=1',
});

export default class Show extends React.Component {
  state = {
    show: [],
  };

  componentDidMount() {
    this.getShow();
  }
  getShow = async () => {
    const response = await MyShow_API.get();

    const InfoMovie = response.data.results.map((item) => {
      return {
        nome: item.name,
        sinopse: item.overview,
        nota:item.vote_average,
        image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
      };
    });

    this.setState({ show: InfoMovie });

    console.log(response);
  };

  render() {
    return (
      <S.Series>
        {this.state.show.map((item) => (
          <S.Descrition>
            <img src={item.image} alt={item.nome}/>
            <S.Information>
            <h3>{item.nome}</h3>
            <span>{item.nota}</span>
            </S.Information>
            <S.Sinopse id='sinopse'>
            <h3>sinopse</h3>
            <p>{item.sinopse}</p>
            </S.Sinopse>
          </S.Descrition>
        ))}
      </S.Series>
    );
  }
}
























  //   state = {
//     frutas: [
//       'uva',
//       'limao',
//       'pera',
//       'morango',
//       'tomate',
//       'abacaxi',
//       'maça',
//       'banana',
//       'tangerina',
//       'melancia'
//     ],
//     listaFiltrada:[]
//   }

//   handleFrutas = (e) =>{
//     const frutasFiltrada = this.state.frutas.filter(item => {
//       if(item.includes(e.target.value)){
//           return true
//       }
//     })
//       this.setState({listaFiltrada: frutasFiltrada})
//   }
