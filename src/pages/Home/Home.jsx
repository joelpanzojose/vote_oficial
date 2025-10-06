import Enquete from "../../componentes/EnqueteCard/Enquete";
   function Home() {
    return (
         <Enquete
                    titulo="Qual Melhor Linguagem de Programação?"
                    opcoes={["Javascript", "C#", "Python" , "Java", "Ruby", "Go", "Swift"]}

                    primeirotexto="Escolha a linguagem que você mais gosta ou que você acha mais interessante para aprender. Cada linguagem tem suas próprias características e usos, então pense bem antes de votar!"

                    segundotexto="E você ainda poderá ver os resultados desta enquete, todas as estatísticas ficarão disponíveis na aba das estatístivas. Lá poderá ver o número de votação total, votação média, opção vencedora etc."
            />
    );
   }
    export default Home;