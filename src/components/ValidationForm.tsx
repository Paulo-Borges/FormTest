import { useState } from "react";

export const ValidationForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    nome: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Dados enviados: ", formData);
    alert(`Obrigado, ${formData.nome}`);
  };

  return (
    <form
      onSubmit={handleSubmmit}
      className="flex flex-col gap-4 w-screen max-w-5xl px-4"
    >
      <div>
        <label htmlFor="nome" className="flex flex-col">
          Nome :
          <input
            type="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Digite o seu nome"
          />
        </label>
      </div>
      <div>
        <label htmlFor="email" className="flex flex-col">
          Email :
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Digite o seu email"
          />
        </label>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};
