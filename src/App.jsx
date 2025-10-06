import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Card from './componentes/card/Card'
import Menu from './componentes/Menufix/menufix'
import Enquete from './componentes/EnqueteCard/Enquete'
import Header from './componentes/Header/Header'
import perfil from './assets/img/perfil.png'
import Home from './pages/Home/Home'
import CriarEnquete from './pages/CriarEnquete/CriarEnquete'
import Estatisticas from './pages/Estatisticas/Estatisticas'
import './App.css'

function App() {
  return (
    <BrowserRouter >
      <div className='contente-site'>
        <Menu />
        <main>
          <Header nomeUser="Joel José" img={perfil} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/estatisticas" element={<Estatisticas />} />
            <Route path="/criar-enquete" element={<CriarEnquete />} />
          </Routes>
        </main>
      </div>

    </BrowserRouter>

  )
}




export default App



