import './Estatisticas.css'
import { Link } from 'react-router-dom';
import Card from '../../componentes/card/Card';
import { Participacaomedia, EstatisticasCard, Man, Woman } from '../../componentes/card/svgs/mysvg';
function Estatisticas() {
  return (
    <div className="estatisticas">
      <h1>Estatísticas</h1>
      
      <div className="divCards-Estatisticas">
                <Card
                  IconCard_estatisticas={<Participacaomedia />}
                  titulo="Total de Votos"
                  totalvotos="95"
                  bgClass="bg-azul"
                />

                <Card
                  IconCard_estatisticas={<EstatisticasCard />}
                  titulo="Participação Média"
                  totalvotos="72%"
                  bgClass="bg-laranja"
                />

                <Card
                  IconCard_estatisticas={<Man />}
                  titulo="Votos Masculinos"
                  totalvotos="60"
                  bgClass="bg-verde"
                />

                <Card
                  IconCard_estatisticas={<Woman />}
                  titulo="Votos Femininos"
                  totalvotos="35"
                  bgClass="gb-roxo"
                />
      </div>
               



      <Link to="/">
        <button className="btn_voltar">Voltar para Home</button>
      </Link>
    </div>
  )
}
export default Estatisticas;