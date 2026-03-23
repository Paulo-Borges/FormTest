import { useState } from "react";

export const ValidationForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    nome: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados: ", formData);
    alert(`Obrigado, ${formData.nome}`);
  };

  return (
    <form onSubmit={handleSubmmit} className="">
      <div>
        <label htmlFor="nome">
          Nome:
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
        <label htmlFor="email">
          Email:
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
