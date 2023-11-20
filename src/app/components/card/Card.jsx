import './Card.css'
export default function Card(){
    return(
        <div className="card">
      <img src="/saude.jpg" alt="Imagem da Notícia" className="card-image" />
      <div className="card-content">
        <h2>Título da Notícia</h2>
        <p>Descrição da notícia. Clique abaixo para mais detalhes.</p>
        <a href="#">Leia Mais</a>
      </div>
    </div>

    )
}