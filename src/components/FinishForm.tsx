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
    <form
      onSubmit={handleSubmmit}
      className="flex flex-col w-screen max-w-5xl px-4"
    >
      <label htmlFor="nome" className="flex flex-col">
        Nome :
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          className="border"
        />
      </label>
      <label htmlFor="email" className="flex flex-col">
        Email :
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border"
        />
      </label>
      <label htmlFor="senha" className="flex flex-col">
        Senha :
        <input
          type="password"
          name="senha"
          value={formData.senha}
          onChange={HandlePasswordChange}
          className="border"
        />
      </label>
      <label htmlFor="cargo" className="flex flex-col">
        Cargo :
        <input
          type="cargo"
          name="cargo"
          value={formData.cargo}
          onChange={handleChange}
          className="border"
        />
      </label>
      <label htmlFor="curso" className="flex flex-col">
        Curso :
        <input
          type="curso"
          name="curso"
          value={formData.curso}
          onChange={handleChange}
          className="border"
        />
      </label>
      {error && <span style={{ color: "red", display: "block" }}>{error}</span>}
      <button>Enviar</button>
    </form>
  );
};
