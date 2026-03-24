import { useState } from "react";

export const ValidationForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    nome: "",
  });

  const formFields = [
    {
      label: "Nome :",
      type: "text",
      name: "nome",
      placeholder: "Digite o seu nome",
    },
    {
      label: "Email :",
      type: "email",
      name: "email",
      placeholder: "Digite o seu email",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Dados enviados: ", formData);
  };

  return (
    <form
      onSubmit={handleSubmmit}
      className="flex flex-col gap-4 w-screen max-w-5xl px-4"
    >
      {formFields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name} className="flex flex-col">
            {field.label}
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name as keyof typeof formData]}
              onChange={handleChange}
              placeholder="Digite o seu nome"
            />
          </label>
        </div>
      ))}

      <button type="submit">Enviar</button>
    </form>
  );
};
