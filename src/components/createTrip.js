import React, {useState} from 'react'
import styled from 'styled-components'
import useInput from '../hooks/useInput'
import useSend from '../hooks/useSend'

const Section = styled.div`
background: #961D41;
padding: 10vh 0 10vh 0;
margin-top:0;
display:flex;
flex-wrap:wrap;
justify-content: center;
align-items:center;
align-content:center;
text-align:center;`

const Align = styled.div`
width:80vw;
margin: 0 auto;`

const H1 = styled.h1`
width:100vw;
text-align:center;`

const Input = styled.input`
border:0;
width:85%;
margin:1vh;
padding:15px;
border-radius:5px;
box-shadow: 4px 7px 5px -4px rgba(0,0,0,0.75);`

const Textarea = styled.textarea`
border:0;
width:85%;
margin:1vh;
padding:15px;
border-radius:5px;
box-shadow: 4px 7px 5px -4px rgba(0,0,0,0.75);`

const ButtonSubmit = styled.button`
background: #180E3B url("data:image/svg+xml;utf8,<svg viewBox='0 0 24 24' width='24' 
height='24' fill='white'  xmlns='http://www.w3.org/2000/svg'>
<path d='M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z' /></svg>") no-repeat;
background-position: left 5px bottom 50%;
margin:1vw;
padding:10px 10px 10px 35px;
border:0;
border-radius: 5px;
font-size:0.90em;
color:white;
font-weight:600;
transition: 0.9s ease-in;
:hover{background-color: #482B60;
color:white}`
;

function CreateTrip() {
const [name, handleName] = useInput()
const [planet, handlePlanet] = useInput()
const [date, handleDate] = useInput()
const [description, handleDescription] = useInput()
const [durationInDays, handleDurationInDays] = useInput()
const [body, setBody] = useState({})

const submitButton = () => {
setBody({name, planet, date, description, durationInDays})
}

const headers = {
auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im93T2g5ZWo2bW50akZqNUNRMVB4IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1ODk1NjI5MDh9.aB4dNbTCkToXB7pdzEa-tuMa-QbRQDUd93eva4-cec0"
}

const trip = useSend("https://us-central1-labenu-apis.cloudfunctions.net/labeX/jessica-alcantara-quirino-cruz/trips", body, headers)

return <div>

<Section>
<Align>
<h1>Criar uma viagem</h1>

<Input value={name} onChange={handleName} placeholder={"digite aqui um nome"}/>
<Input value={planet} onChange={handlePlanet}  placeholder={"digite aqui o planeta"}/>
<Input value={date} onChange={handleDate}  type="date" placeholder={"escolha a data"}/>
<Input value={durationInDays} onChange={handleDurationInDays}  type="number" placeholder={"qual tempo de duração da viagem?"}/>
<Textarea  value={description} onChange={handleDescription}  placeholder={"digite aqui a descrição"}/>
<p><ButtonSubmit onClick={submitButton}> Enviar </ButtonSubmit></p>
</Align>
</Section>

</div>  
}

export default CreateTrip