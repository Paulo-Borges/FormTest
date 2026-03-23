import { useState } from "react";

export const FormCerto = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    cargo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(" Graças a Deus", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">
        Nome :
        <input
          type="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="email">
        Email :
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="senha">
        Senha :
        <input
          type="password"
          name="senha"
          value={formData.senha}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="cargo">
        Cargo :
        <input
          type="cargo"
          name="cargo"
          value={formData.cargo}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Enviar</button>
    </form>
  );
};
