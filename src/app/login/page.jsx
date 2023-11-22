import "./Login.css"

const page = () => {
  return (
    <div className="formContainer">
      <form className="form">
        <div className="title">Bem-vindo,<br /><span>faça login para continuar</span></div>
        <input className="input" name="email" placeholder="Email" type="email" />
        <input className="input" name="password" placeholder="Password" type="password" />
        <button className="button-confirm">Entrar →</button>
      </form>
    </div>
  )
}

export default page
