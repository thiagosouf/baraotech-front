import styled from "styled-components"
import React, {useState} from "react"
import BaraoLogo from "../assets/img/LOGOLARANJA.png"
import BaraoLogoBranco from "../assets/img/Reduzida.png"
import BaraoText from "../assets/img/Ativo4.png"
import { useNavigate } from "react-router-dom";

export default function LoginPage(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  console.log(email)
  console.log(typeof(email))

  function HandleSignUp(){
    navigate('/signup')
  }

  return(
    <LoginContainer>
      <Image>
        <img src={BaraoLogoBranco} alt="logo" />
        <Logo2>
          <img src={BaraoText} alt="logoJovem"/>
        </Logo2>
      </Image>
      <Form>
        <input type="email" selected={email !== ""} placeholder="e-mail" onChange={e => setEmail(e.target.value)} value={email} required/>
        <input type= "password" placeholder="senha" onChange={e => setPassword(e.target.value)} value={password} required/>
        <button>Entrar</button>
      </Form>
      <SignUp>
        <button onClick={() => HandleSignUp()}>QUERO CRIAR UMA CONTA</button>
      </SignUp>
    </LoginContainer>
  )
}

// CINZA: #262626; / LARANJA: #FF6500;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #262626;
  min-width: 22.5rem;
  height: 100vh;
`

const Image = styled.div`
  display: flex;
  flex-direction: row;  
  align-items: center;
  margin-bottom: 3.375em;

  img{
    width: 6.75rem;
    height: 4.75rem;
    border-right: 2px solid white;
    padding-right: 0.65rem;
  }
`

const Logo2 = styled.div`
  img{
    width: 7rem;
    height: 4.5rem;
    border: none;
    margin-left: 0.65rem;
    padding-top: 10px;
  }
`

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input{
    font-family: 'Source Sans Pro', sans-serif;
    outline: none;

    border: none;
    border-bottom: 2px solid white;
    border-radius: 0;

    transition: 500ms;
    transition-timing-function: linear;
    transition-delay: 100ms;

    margin-bottom: 0.375rem;
    padding-left: 0.625rem;
    padding-right: 0.625rem;

    width: 16.25rem;
    height: 2.5rem;

    background-color: transparent;
    color: white;
    ::placeholder,
    ::-webkit-input-placeholder {
    color: white;
    opacity: 0.2;
  }
  }

  input:focus{
    border-bottom: 2px solid #FF6500;
  }

  button{
    border-radius: 2.5rem;
    background-color: #FF6500;
    color: #262626;
    margin-top: 4rem;
    margin-bottom: 0.375rem;
    border: none;
    font-family: 'Source Sans Pro', sans-serif;
    width: 10rem;
    height: 2.5rem;
  }
`

const SignUp = styled.div`
  button{
    background-color: transparent;
    color: #FF6500;
    margin-bottom: 6px;
    border: none;
    font-family: 'Source Sans Pro', sans-serif;
    width: 10rem;
    height: 2.5rem;
  }
`