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

                    primeirotexto="Escolha a linguagem que você mais gosta ou que você acha mais interessante para aprender. Cada linguagem tem suas próprias características e usos, então pense bem antes de votar!"

                    segundotexto="E você ainda poderá ver os resultados desta enquete, todas as estatísticas ficarão disponíveis na aba das estatístivas. Lá poderá ver o número de votação total, votação média, opção vencedora etc."
                  />

                  
            </main>







    </div>
  )
}

export default App


