import styled from "styled-components"
import React from "react"
import BaraoLogo from "../assets/img/LOGOLARANJA.png"
import BaraoText from "../assets/img/Ativo4.png"

export default function SignUpPage(){

  function HandleFocus(e){
    e.type="date"
  }

  return(
    <SignUpContainer>
      <Form>
        <input type="text" placeholder="nome" required />
        <input type="date" placeholder="aniversario"  onFocus={e => HandleFocus(e)} required />
        <input type="phone" placeholder="telefone" />
        <input type="text" placeholder="e-mail" required />
        <input type= "password" placeholder="senha" required/>
        <button>Cadastrar</button>
      </Form>
    </SignUpContainer>
  )
}

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #262626;
  min-width: 22.5rem;
  height: 100vh;
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
    transition: 300ms;
    margin-bottom: 0.375rem;
    padding-left: 0.625rem;
    padding-right: 0.625rem;
    width: 16.25rem;
    height: 2.5rem;
    background-color: transparent;
    color: white;
    ::placeholder,
    ::-webkit-input-placeholder {
    color: #5d5d5e;
  }
  }

  input:hover{
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