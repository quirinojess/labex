import React from 'react'
import styled from 'styled-components'
import useRequestData from '../hooks/useRequest'
import { useParams, useHistory } from 'react-router-dom'

const Main = styled.div`
width:80vw;
margin:0 auto;
margin-top:10vh;`


const Section = styled.div`
background: #180E3B;
padding: 10vh 0 10vh 0;
display:flex;
flex-wrap:wrap;
justify-content: center;
align-items:center;
align-content:center;
color:white;`

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
background: #961D41;
margin: 2vw;
padding:0.5vw;
width:80vw;
min-width:300px;
display:flex;
flex-wrap:wrap;
color:white;`

const Name = styled.span`
width:100vw;
background: url("data:image/svg+xml;utf8,<svg viewBox='0 0 24 24' width='25' height='20' fill='white'  
xmlns='http://www.w3.org/2000/svg'><path d='M11 6.999c2.395.731 4.27 2.607 4.999 5.001.733-2.395 2.608-4.269 5.001-5-2.393-.731-4.268-2.605-5.001-5-.729 2.394-2.604 4.268-4.999 4.999zm7 7c1.437.438 2.562 1.564 2.999 3.001.44-1.437 1.565-2.562 3.001-3-1.436-.439-2.561-1.563-3.001-3-.437 1.436-1.562 2.561-2.999 2.999zm-6 5.501c1.198.365 2.135 1.303 2.499 2.5.366-1.198 1.304-2.135 2.501-2.5-1.197-.366-2.134-1.302-2.501-2.5-.364 1.197-1.301 2.134-2.499 2.5zm-6.001-12.5c-.875 2.873-3.128 5.125-5.999 6.001 2.876.88 5.124 3.128 6.004 6.004.875-2.874 3.128-5.124 5.996-6.004-2.868-.874-5.121-3.127-6.001-6.001z' /></svg>") no-repeat;
background-position: left 5px bottom 50%;
padding-left:35px;
font-size:1em;
font-weight: 600;
`
const Description = styled.span`
width:100vw;
background: url("data:image/svg+xml;utf8,<svg viewBox='0 0 24 24' width='25' height='20' fill='white'  xmlns='http://www.w3.org/2000/svg'><path d='M9 21h-9v-2h9v2zm6.695-2.88l-3.314-3.13-1.381 1.47 4.699 4.54 8.301-8.441-1.384-1.439-6.921 7zm-6.695-1.144h-9v-2h9v2zm8-3.976h-17v-2h17v2zm7-4h-24v-2h24v2zm0-4h-24v-2h24v2z' /></svg>") no-repeat;
background-position: left 5px bottom 50%;
padding-left:35px;
font-size:1em;
font-weight: 400;`

const Planet = styled.span`width:100vw;
background: url("data:image/svg+xml;utf8,<svg viewBox='0 0 24 24' width='25' height='20' fill='white'  xmlns='http://www.w3.org/2000/svg'><path d='M15.246 17c-.927 3.701-2.547 6-3.246 7-.699-1-2.32-3.298-3.246-7h6.492zm7.664 0c-1.558 3.391-4.65 5.933-8.386 6.733 1.315-2.068 2.242-4.362 2.777-6.733h5.609zm-21.82 0h5.609c.539 2.386 1.47 4.678 2.777 6.733-3.736-.8-6.828-3.342-8.386-6.733zm14.55-2h-7.28c-.29-1.985-.29-4.014 0-6h7.281c.288 1.986.288 4.015-.001 6zm-9.299 0h-5.962c-.248-.958-.379-1.964-.379-3s.131-2.041.379-3h5.962c-.263 1.988-.263 4.012 0 6zm17.28 0h-5.963c.265-1.988.265-4.012.001-6h5.962c.247.959.379 1.964.379 3s-.132 2.042-.379 3zm-8.375-8h-6.492c.925-3.702 2.546-6 3.246-7 1.194 1.708 2.444 3.799 3.246 7zm-8.548-.001h-5.609c1.559-3.39 4.651-5.932 8.387-6.733-1.237 1.94-2.214 4.237-2.778 6.733zm16.212 0h-5.609c-.557-2.462-1.513-4.75-2.778-6.733 3.736.801 6.829 3.343 8.387 6.733z' /></svg>") no-repeat;
background-position: left 5px bottom 50%;
padding-left:35px;
font-size:1em;
font-weight: 400;`

const Time = styled.span`width:100vw;
background: url("data:image/svg+xml;utf8,<svg viewBox='0 0 24 24' width='25' height='20' fill='white'  xmlns='http://www.w3.org/2000/svg'><path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.848 12.459c.202.038.202.333.001.372-1.907.361-6.045 1.111-6.547 1.111-.719 0-1.301-.582-1.301-1.301 0-.512.77-5.447 1.125-7.445.034-.192.312-.181.343.014l.985 6.238 5.394 1.011z' /></svg>") no-repeat;
background-position: left 5px bottom 50%;
padding-left:35px;
font-size:1em;
font-weight: 400;`

const Date = styled.span`width:100vw;
background: url("data:image/svg+xml;utf8,<svg viewBox='0 0 24 24' width='25' height='20' fill='white'  xmlns='http://www.w3.org/2000/svg'><path d='M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z' /></svg>") no-repeat;
background-position: left 5px bottom 50%;
padding-left:35px;
font-size:1em;
font-weight: 400;`


const Clear = styled.div`
  flex-basis: 100%;
  height: 5vh;`


const ButtonBack = styled.button`
background: #ffffff url("data:image/svg+xml;utf8,<svg viewBox='0 0 24 24' width='24' 
height='24' fill='black'  xmlns='http://www.w3.org/2000/svg'>
<path d='M13.427 3.021h-7.427v-3.021l-6 5.39 6 5.61v-3h7.427c3.071 0 5.561 2.356 5.561 5.427 0 3.071-2.489 5.573-5.561 5.573h-7.427v5h7.427c5.84 0 10.573-4.734 10.573-10.573s-4.733-10.406-10.573-10.406z' /></svg>") no-repeat;
background-position: left 5px bottom 50%;
margin-left:0.5vw;
padding:10px 10px 10px 35px;
border:0;
border-radius: 5px;
font-size:0.90em;
color:black;
transition: 0.9s ease-in;
:hover{background-color: #2E1138 ;}`

;

function TripDetail () {

const params = useParams()
const headers = {
auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im93T2g5ZWo2bW50akZqNUNRMVB4IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1ODk1NjI5MDh9.aB4dNbTCkToXB7pdzEa-tuMa-QbRQDUd93eva4-cec0"
}


const history = useHistory()

const trips =useRequestData(
  `https://us-central1-labenu-apis.cloudfunctions.net/labeX/jessica-alcantara-quirino-cruz/trip/${params.id}`,
  {}, headers)
  

  const candidatesList =
  trips.trip &&
  trips.trip.candidates.map((user) => {
   return <li> {user.name} </li>
      });

      const approvedList =
      trips.trip &&
      trips.trip.approved.map((user) => {
        return <li> {user.name} </li>
          });



console.log(trips)
 
  
    return <div> 


<Main>

<H2>Detalhes da página</H2>
</Main>


    <Section>
    <H1>Detalhes da viagem</H1>
       
{trips.trip && <Card>
<Name>{trips.trip.name}</Name>
<Description>{trips.trip.description}</Description>
<Planet> {trips.trip.planet} </Planet>
<Time> {trips.trip.durationInDays} </Time>
<Date>{trips.trip.date} </Date>
</Card> }
            
                
<Clear />

<H1>Candidatos</H1>

{trips.trip &&  <ul> {candidatesList} </ul> }
<Clear />

<H1>Candidatos aprovados</H1>


{trips.trip &&  <ul> {approvedList} </ul> }
<Clear />



<ButtonBack onClick={history.goBack}> Voltar </ButtonBack></Section>
                    </div>
}


export default TripDetail