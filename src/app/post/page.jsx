import "./Post.css"

const page = () => {
  return (
    <div className="formContainer">
      <form className="form">
        <div className="title">Médico,<br /><span>use esse espaço para fazer a sua postagem:</span></div>
        <input className="input" name="titulo" placeholder="título" type="text" />
        <textarea className="input" id="conteudo" name="conteudo" placeholder="comece a digitar..." />
        <button className="button-confirm">Publicar →</button>
      </form>
    </div>
  )
}

export default page
