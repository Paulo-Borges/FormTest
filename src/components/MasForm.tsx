import React, { useState } from "react";

export const MasForm = () => {
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const HandlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // setPassword(value);
    setFormData({ ...formData, [name]: value });
    if (value.length > 0 && value.length < 6) {
      setError("A senha tem que ter pelo menos 6 caracteres.");
    } else {
      setError("");
    }
  };

  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.senha.length < 6) {
      setError("Não é possível enviar: senha muito curta.");
      return;
    }

    console.log("esses são os dados: ", formData);
  };

  return (
    <form onSubmit={HandleSubmit}>
      <label htmlFor="nome">
        Nome:
        <input
          type="text"
          name="nome"
          value={formData.nome}
          placeholder="Digite o seu Nome"
          onChange={HandleChange}
        />
      </label>

      <label htmlFor="email">
        Email :
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Digite o seu Email"
          onChange={HandleChange}
        />
      </label>

      <label htmlFor="senha">
        Senha :
        <input
          type="password"
          name="senha"
          value={formData.senha}
          placeholder="Digite o seu senha"
          onChange={HandlePasswordChange}
        />
      </label>
      {error && <span style={{ color: "red", display: "block" }}>{error}</span>}
      <button>Enviar</button>
    </form>
  );
};
