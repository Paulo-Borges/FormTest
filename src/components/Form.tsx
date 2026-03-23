import { useState } from "react";

export function ControlledForm() {
  const [formData, setFormData] = useState({
    email: "",
    nome: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    // Atualiza apenas o campo que mudou, mantendo os outros
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enviado:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex flex-col">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={formData.email}
          className="border"
          //   onChange={(e) => setFormData {}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col ">
        <label htmlFor="nome">Nome:</label>
        <input
          id="nome"
          type="nome"
          value={formData.nome}
          className="border"
          //   onChange={(e) => setFormData(e.target.value)}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="border">
        Enviar
      </button>
    </form>
  );
}
