import React from 'react'
import styled from 'styled-components'
import { useHistory } from "react-router-dom";



const Align = styled.div`
width:80vw;
margin: 0 auto;
padding-left:1vw;
padding-top: 5vh;
padding-bottom: 15vh;`


const H2 = styled.h2`
width:30vw;
font-size:40px;
color:black;
`

const Clear = styled.div`
  flex-basis: 100%;
  height: 5vh;`



const ButtonBack = styled.button`
background: #961D41 url("data:image/svg+xml;utf8,<svg viewBox='0 0 24 24' width='24' 
height='24' fill='white'  xmlns='http://www.w3.org/2000/svg'>
<path d='M13.427 3.021h-7.427v-3.021l-6 5.39 6 5.61v-3h7.427c3.071 0 5.561 2.356 5.561 5.427 0 3.071-2.489 5.573-5.561 5.573h-7.427v5h7.427c5.84 0 10.573-4.734 10.573-10.573s-4.733-10.406-10.573-10.406z' /></svg>") no-repeat;
background-position: left 5px bottom 50%;
margin-left:0.5vw;
padding:10px 10px 10px 35px;
border:0;
border-radius: 5px;
font-size:0.90em;
color:black;
transition: 0.9s ease-in;
:hover{background-color: #2E1138 ;
    color:white;}`

;



function ErrorPage() {

  const history = useHistory();

return <div>





<Align>

<H2>Ops, algo de errado não está certo.</H2>

Tem certeza que digitou o endereço correto? Essa página não existe. 

<Clear />
<ButtonBack onClick={history.goBack}> Voltar </ButtonBack>


</Align>


</div>
    
    
}

export default ErrorPage