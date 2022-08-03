import React from "react";
import logo from '../img/logo.png'
import styled from 'styled-components'

const Footerp = styled.div`
background: #BEB6BE;
display:flex;
justify-content: space-between;
align-items: center;
align-content: center;`

const Logo = styled.div`
margin-top:0vh;
padding: 0 0 0 10vw;
img{
    max-width:100px;
}`

const Credit = styled.div`
color:black;
padding: 0 10vw 0 0;`

function Footer(){
return <div>

<Footerp> 
<Logo> <img src={logo}/></Logo>
<Credit> Todos os direitos reservados</Credit>   
</Footerp>

</div>
}


export default Footer