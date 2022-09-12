import React from 'react'
import Movie from '../Movie/Movie';
import Home from '../Home/Home';
import Show from '../Show/Show';
import Error from '../Error/Error'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import * as S from './HeaderStyle';

export default class Header extends React.Component {
  render() {
    return (
      <Router>

      <S.Navegation>

      <Link to="/">
          <div id='logo'>
            <h1>SLIM</h1>
            <h2>FLIX</h2>
          </div>
        </Link>
          <form>
            <input type="text" placeholder="Search"/>
          </form>
          <div id='nav'>
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/movie">
          <p>Movies</p>
        </Link>
        <Link to="/show">
          <p>Series</p>
        </Link>
          </div>
        </S.Navegation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Movie" element={<Movie />} />
          <Route path="Show" element={<Show />} />
          <Route path="*" element={<Error />} />
        </Routes>
        </Router>
    )
  }
}
