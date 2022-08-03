import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from 'styled-components'
import CreateTrip from '../components/createTrip'
import {Link} from 'react-scroll'
import useRequestData from '../hooks/useRequest'
import useProtectedPage from '../hooks/useProtectPage'
import axios from 'axios'

import { goToTrip } from '../routes/coordinator'

const Main = styled.div`
width:80vw;
margin:0 auto;
margin-top:10vh;
`

const Section = styled.div`
background: #3C234A;
padding: 10vh 0 10vh 0;
display:flex;
flex-wrap:wrap;
justify-content: center;
align-items:center;
align-content:center;
margin-top:10vh;
`

const H1 = styled.h1`
width:100vw;
text-align:center;
`

const H2 = styled.h2`
text-align:left;
padding-left:1vw;
font-size:30px;
`
const Card = styled.div`
width:60%;
margin:1vh;
display:flex;
flex-wrap:wrap;
justify-content: space-between;
background: white;
padding:15px;
border-radius:5px;
box-shadow: 4px 7px 5px -4px rgba(0,0,0,0.75);
`
const Name = styled.span``


const ButtonDelete = styled.button`
background: #961D41 url("data:image/svg+xml;utf8,<svg viewBox='0 0 24 24' width='24' 
height='24' fill='white'  xmlns='http://www.w3.org/2000/svg'>
<path d='M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z' /></svg>") no-repeat;
background-position: left 5px bottom 50%;
margin-left:0.5vw;
padding:10px 10px 10px 35px;
border:0;
border-radius: 5px;
font-size:0.90em;
color:black;
font-weight:600;
transition: 0.9s ease-in;
:hover{background-color: #2E1138 ;
    color:white}`

const ButtonTravel = styled.button`
 
background: #961D41 url("data:image/svg+xml;utf8,<svg viewBox='0 0 24 24' width='24' 
height='24' fill='white'  xmlns='http://www.w3.org/2000/svg'>
<path d='M18 14.45v6.55h-16v-12h6.743l1.978-2h-10.721v16h20v-10.573l-2 2.023zm1.473-10.615l1.707 1.707-9.281 9.378-2.23.472.512-2.169 9.292-9.388zm-.008-2.835l-11.104 11.216-1.361 5.784 5.898-1.248 11.103-11.218-4.536-4.534z' /></svg>") no-repeat;
background-position: left 5px bottom 50%;
margin:1vw;
padding:10px 10px 10px 35px;
border:0;
border-radius: 5px;
font-size:0.90em;
color:black;
font-weight:600;
transition: 0.9s ease-in;
:hover{background-color: #2E1138 ;
    color:white}`

const ButtonLogout = styled.button`
background: #961D41 url("data:image/svg+xml;utf8,<svg viewBox='0 0 24 24' width='24' 
height='24' fill='white'  xmlns='http://www.w3.org/2000/svg'>
<path d='M10 2v2h12v16h-12v2h14v-20h-14zm0 7.408l2.963 2.592-2.963 2.592v-1.592h-8v-2h8v-1.592zm-2-4.408v4h-8v6h8v4l8-7-8-7z' /></svg>") no-repeat;
background-position: left 5px bottom 50%;
margin:1vw;
padding:10px 10px 10px 35px;
border:0;
border-radius: 5px;
font-size:0.90em;
color:black;
font-weight:600;
transition: 0.9s ease-in;
:hover{background-color: #2E1138;
color:white}`

const Clear = styled.div`
  flex-basis: 100%;
  height: 5vh;`

;

const AdminHomePage = () => {
  const history = useHistory();

  const goToTrip = (id) => {
    history.push(`/tripDetailPage/${id}`);
    };

 

  const deleteTrip = async (id) => {
    try {
      const result = window.confirm("Deseja excluir o item");
      if (result == true) {
        const res = await axios.delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labeX/jessica-alcantara-quirino-cruz/trips/${id}`,
          {
            headers: {
              auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ilp3N0tNUEp2RmFqRmtmUlE4N3RBIiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE2MTc5MDE4NDd9.yKi2emMJ-Ln3fNigx09HNZIDWPEhF8e_WnbYAAd1r2k"
            }
          }
        );
        
        window.location.reload();

      }
    } catch (e) {
      console.log(e);
    }
  };



const trip = useRequestData("https://us-central1-labenu-apis.cloudfunctions.net/labeX/jessica-alcantara-quirino-cruz/trips", {})
const tripsDetails =
    trip.trips &&
    trip.trips.map((travel) => {
      return  <Card>
        <Name key={travel.id} onClick={ ()=> goToTrip(travel.id)}> {travel.name}</Name>
        <ButtonDelete onClick={() => deleteTrip(travel.id)}> X </ButtonDelete>
      </Card>;
    });


      useProtectedPage();
  
    
      useEffect(() => {
        getLogin("rwXgyZFPWNYRo3KR2F9r");
      }, []);
    
      const getLogin = (id) => {
        const token = window.localStorage.getItem("token");
    
        axios
          .get(
            `https://us-central1-labenu-apis.cloudfunctions.net/labeX/jessica-alcantara-quirino-cruz/trip/${id}`,
            {
              headers: {
                auth: token
              }
            }
          )
          .then((res) => {
            console.log("ok")
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
      const logout = () => {
        window.localStorage.removeItem("token");
        history.push("/loginpage");
      };

      


return (<div> 



<Main>

<H2>Seja Bem vindo admin!</H2>
</Main>


    <Section>
    <H1>Lista de viagens</H1>
       
   


                
    
                <ButtonTravel> <Link  to="createTravels" spy={true} smooth={true}> Criar viagem</Link> </ButtonTravel>
                <ButtonLogout onClick={logout}> Sair </ButtonLogout>
                
<Clear />


{tripsDetails}





      
                
                </Section>


                
<div  id="createTravels">

<CreateTrip />
</div>


                    </div>
    )
                
}


export default AdminHomePage