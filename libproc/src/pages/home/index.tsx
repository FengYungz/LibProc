import React from "react";
import Header from "../../components/Header";
import { Container } from './styles'

function Page(){
    return(
        <>
        <Container>
          <Header />
          <h1>LIBPROC</h1>
          <h2>Teoria e questões da disciplina Laboratório de Processadores!</h2>
          <h2>Utilize nosso Emulador ARM! </h2>
          <a href="https://react-arm-emulator-bkiputr02-fengyungz.vercel.app/">Clique aqui! para testar nosso Emulador ARM!</a>
        </Container>
        </>
    )
}

export default Page