import { useState } from "react";

export const FinishForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    cargo: "",
    curso: "",
  });

  const handleSubmmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Agora eu sei", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmmit}>
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
          type="senha"
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
      <label htmlFor="curso">
        Curso :
        <input
          type="curso"
          name="curso"
          value={formData.curso}
          onChange={handleChange}
        />
      </label>

      <button>Enviar</button>
    </form>
  );
};
