import { useState } from "react";

export const FinishForm = () => {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    cargo: "",
    curso: "",
  });

  const HandlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    if (value.length > 0 && value.length < 6) {
      setError("A senha tem que ter pelo menos 6 caracteres.");
    } else {
      setError("");
    }
  };

  const handleSubmmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.senha.length < 6) {
      setError("Não é possíve enviar: senha muito curta.");
      return;
    }
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
          type="text"
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
          onChange={HandlePasswordChange}
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
      {error && <span style={{ color: "red", display: "block" }}>{error}</span>}
      <button>Enviar</button>
    </form>
  );
};
