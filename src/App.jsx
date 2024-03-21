import React, { useState, useEffect } from 'react'

import './App.css'
import logo from "./assets/logo.png"
import SinteseProteica from './sintese'
import MultipleDropdownPage from './dropDown'


function App() {

  return (
    <>

      <div className='header'>
        <div className='titulo'>
          <h1> WikiCrias</h1>
        </div>

      </div>
      <MultipleDropdownPage/>
      

      <div  className='page'>

        <div className='sumario'>

          <div className='sumario-titulo'>Conteudo</div>

          <a href="#1.">1. Sintese de Proteína</a>
          <a href="#1.1">1.1 Conceitos</a>
          <a href="#1.2"> 1.2 Transcrição - RNAm</a>
          <a href="#1.3">1.3 Processamento do RNAm</a>
          <a href="#1.4">1.4 Tradução</a>

        </div>

        <div className='content'>

          <SinteseProteica/>

        </div>

        <div className='anuncios'>
          <img src="https://i.pinimg.com/originals/46/e0/26/46e026d2244cc75f7cfdd546573ce666.jpg" alt="" />

          <img src="https://static.vecteezy.com/ti/vetor-gratis/p3/2687498-online-casino-on-a-green-background-dice-gold-coins-cards-rolette-and-chips-vector-illustration-of-a-vertical-format-gratis-vetor.jpg" alt="" />

          <img src="https://s2-techtudo.glbimg.com/P_Mqn7tyNxKXP9kOakTxG4QJ0XA=/0x0:1280x680/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/6/Y/ZS3nTMQUig0BaaqH8pKg/blaze.png" alt="roblox" />
        </div>
      </div>
    </>
  )
}

export default App
