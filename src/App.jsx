import { useState } from 'react'
import Card from './componentes/card/Card'
import Menu from './componentes/Menufix/menufix'
import Enquete from './componentes/EnqueteCard/Enquete'
import './App.css'

function App() {
  return (
    <div className='contente-site'>
      <Menu />
            <main>
             
                  <Enquete
                    titulo="Qual Melhor Linguagem de Programação?"
                    opcoes={["Javascript", "C#", "Python" , "Java", "Ruby", "Go", "Swift"]}
                  />
            </main>







    </div>
  )
}

export default App


