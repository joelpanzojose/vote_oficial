import './CriarEnquete.css'
import { Link } from 'react-router-dom';

function CriarEnquete() {
  return (
    <div className="criar-enquete">
      <h1>Criar Enquete</h1>
      <p>Aqui você pode criar uma nova enquete para seus usuários votarem.</p>

        <Link to="/">
          <button className="btn_voltar">Voltar para Home</button>
        </Link>
      {/* Formulário para criar enquete */}
    </div>
  )
}
export default CriarEnquete;