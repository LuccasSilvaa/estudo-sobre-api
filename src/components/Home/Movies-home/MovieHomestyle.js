import styled from "styled-components"

export const ContainerMovies = styled.div`

margin-top: 7rem;
display: flex;
overflow-x: auto;

::-webkit-scrollbar{
  width:15px;
 }
 ::-webkit-scrollbar-track{
  background-color:#020D18;
  box-shadow:0 0 5px rgba(0,0,0,1);
 }
 ::-webkit-scrollbar-thumb{
  background-color:#1C3D5D;
  box-shadow:0 0 5px rgba(0,0,0,1);
 }

 
 @media (max-width: 768px){
  overflow-y:auto;
  ::-webkit-scrollbar{
  width:0;
 }
}




`

export const ContainerCard = styled.div`
position: relative;
margin-left: 10px;
width: 13rem;
border-radius: 3px;
box-shadow: 0.2px 4px 5px rgba(0,0,0,0.1);
transition: 1s all;
background-color: #1C3D5D;



&:hover{
#overview{
  display:block;
transform: translateY(0);
  
}
cursor: pointer;

}

img{
width: 100%;
}
   
`
export const ContainerInfo = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 2rem;


 h3{
  font-size: 0.8rem;
  width: 15rem;
  margin-top:0;
 }

 span{
  background-color: #020D18;
  padding: 0.25rem 0.5rem;
 }

`
export const ContainerOverview = styled.div`

overflow:hidden;
display: none;
position: absolute;
left: 0;
right: 0;
bottom: 0;
background-color: #1C3D5D;
padding: 1rem;
max-height: 100%;
transform: translateY(0%);
transition: transform 0.3s ease-in;


`