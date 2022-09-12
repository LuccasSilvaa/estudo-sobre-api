import React from 'react';
import MovieHome from './Movies-home/MovieHome';
import ShowHome from './Show-home/ShowHome';


export default class Home extends React.Component {
  render() {
    return (
      <div>
        < MovieHome/>
        <ShowHome />
      </div>
    );
  }
}
