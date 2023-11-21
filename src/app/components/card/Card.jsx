import './Card.css'
export default function Card(){
    return(
        <div className="card">
      <img src="https://i1.wp.com/petsbagunceiros.com/wp-content/uploads/2020/03/cachorro-racao.png?fit=1024%2C682&ssl=1" alt="Imagem da Notícia" className="card-image" />
      <div className="card-content">
        <h2>Título da Notícia</h2>
        <p>Descrição da notícia. Clique abaixo para mais detalhes.</p>
        <a href="#">Leia Mais</a>
      </div>
    </div>

    )
}