import React from 'react';
import * as S from './ErrorStyle';

export default class Error extends React.Component {
  render() {
    return (
      <>
      <S.ContainerError>
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      </S.ContainerError>
      
      </>
    );
  }
}
