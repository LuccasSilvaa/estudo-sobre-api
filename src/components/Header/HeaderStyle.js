import styled from "styled-components"

export const Navegation = styled.div`
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
@media (max-width: 768px){
  
  font-size: 0.8rem;

  input{
    width: 6rem;
  }

  #logo{
    font-size:0.7rem;
  }
  


}
`