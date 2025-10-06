import './Estatisticas.css'
import { Link } from 'react-router-dom';
function Estatisticas() {
  return (
    <div className="estatisticas">
      <h1>Estatísticas</h1>
      <p>Aqui você pode ver as estatísticas das enquetes criadas.</p>
      {/* Exibição das estatísticas */}
   
        <Link to="/">
          <button className="btn_voltar">Voltar para Home</button>
        </Link>
    </div>
  )
}
export default Estatisticas;