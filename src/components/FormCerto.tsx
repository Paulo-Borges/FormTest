import { useState } from "react";

export const FormCerto = () => {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    cargo: "",
  });

  const HandlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    if (value.length > 0 && value.length < 6) {
      setError("A senha tem que ter pelo menos 6 carcteres");
    } else {
      setError("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.senha.length < 6) {
      setError("Não é possíve enviar: senha muito curta.");
      return;
    }
    console.log(" Graças a Deus", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-screen max-w-5xl px-4"
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
      {error && <span style={{ color: "red", display: "block" }}>{error}</span>}
      <button type="submit">Enviar</button>
    </form>
  );
};
