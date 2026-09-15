import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  // Array usado para guardar as credenciais válidas.
  const usuarios = [
    {
      email: 'eduardo.lino@pucpr.br',
      senha: '123456',
    },
  ];

  function acessar() {
    const usuarioValido = usuarios.some(
      (usuario) => usuario.email === email && usuario.senha === senha
    );

    if (usuarioValido) {
      setMensagem('Acessado com sucesso!');
    } else {
      setMensagem('Usuário ou senha incorretos!');
    }
  }

  return (
    <div className="pagina">
      <div className="login">
        <h1>Login</h1>

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
        />

        <button onClick={acessar}>Acessar</button>

        <p className="mensagem">{mensagem}</p>
      </div>
    </div>
  );
}

export default App;
