import React, { useState } from "react";

export const MasForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("esses são os dados: ", formData);
  };

  return (
    <form onSubmit={HandleSubmit}>
      <label htmlFor="nome">
        Nome:
        <input
          type="nome"
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
          type="senha"
          name="senha"
          value={formData.senha}
          placeholder="Digite o seu senha"
          onChange={HandleChange}
        />
      </label>
      <button>Enviar</button>
    </form>
  );
};
