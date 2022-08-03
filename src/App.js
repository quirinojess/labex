import Footer from './components/footer'
import { createGlobalStyle } from 'styled-components'
import back from './img/back.png'
import backmobile from './img/back-mob.png'
import "./assets/css/fonts.css";
import Router from './routes/router'
import React from "react";

const GlobalStyle = createGlobalStyle`
div{
margin:0;
padding:0;
}
body{
background: #E7E4E7 url(${back}) no-repeat top right;
font-family: 'Poppins', sans-serif;
}
button, input, textarea, select{
font-family: 'Poppins', sans-serif;
color: #180E3B;
}
::placeholder{color: #180E3B;
opacity:1;
font-size:13px;
}
  
span{
padding-top: 5px;
padding-bottom:5px;
border-bottom: 1px solid #DB4472;
}
li{
padding-top: 5px;
padding-bottom:5px;
border-bottom: 1px solid #DB4472;
list-style-image:url("data:image/svg+xml;utf8,<svg viewBox='0 0 24 24' width='25' height='20' fill='white'  
xmlns='http://www.w3.org/2000/svg'><path d='M21.856 10.303c.086.554.144 1.118.144 1.697 0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11c2.347 0 4.518.741 6.304 1.993l-1.422 1.457c-1.408-.913-3.082-1.45-4.882-1.45-4.962 0-9 4.038-9 9s4.038 9 9 9c4.894 0 8.879-3.928 8.99-8.795l1.866-1.902zm-.952-8.136l-9.404 9.639-3.843-3.614-3.095 3.098 6.938 6.71 12.5-12.737-3.096-3.096z' /></svg>");
}
h1{
font-size:30px;
color:white;
}
@media screen and (max-width: 900px) {
body {
background: #E7E4E7 url(${backmobile}) no-repeat top right;
}
}`

function App() {
return (

<div>
<GlobalStyle />     
<Router/>
<Footer/>
</div>
);
}

export default App;