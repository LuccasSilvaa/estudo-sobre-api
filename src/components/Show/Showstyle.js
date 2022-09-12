import styled from "styled-components"

export const Series = styled.ul`

 margin-top: 2rem;
 display: grid;
 grid-template-columns: repeat(4, 350px);
 justify-content:center;
 grid-gap: 15px;
 
 
 @media (max-width: 768px){
   grid-template-columns: repeat(2, 150px);
 }

`
export const Descrition = styled.div`
  position: relative;
  width: 350px;
  border-radius: 3px;
  box-shadow: 0.2px 4px 5px rgba(0,0,0,0.1);
  transition: 1s all;
  background-color: #1C3D5D;
  overflow: hidden;

  &:hover{
    #sinopse{
      transform: translateY(0);
      
    }
    cursor: pointer;
    
  }
    

  img{
    width: 100%;
  }

  @media (max-width: 768px){
   width: 150px;
 }

`

export const Sinopse = styled.div`

position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #1C3D5D;
  padding: 1rem;
  max-height: 100%;
  transform: translateY(101%);
  transition: transform 0.3s ease-in;

`
export const Information = styled.div`
display: flex;
 align-items: center;
 justify-content: space-between;
 padding: 2rem;

 h3{
  width: 15rem;
  margin-top:0;
 }

 @media (max-width: 768px){
  h3{
    font-size: 0.5rem;
  }
  span{
    font-size: 0.8rem;
  }
 }
`

