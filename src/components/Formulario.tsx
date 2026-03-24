import { useState } from "react";

export const Formulario = () => {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const FormField = [
    {
      label: "Nome :",
      name: "nome",
      type: "text",
      placeholder: "Digite o seu nome",
    },
    {
      label: "Email :",
      name: "email",
      type: "email",
      placeholder: "Digite o seu email",
    },
    {
      label: "Senha :",
      name: "senha",
      type: "password",
      placeholder: "Digite a sua senha",
    },
  ];

  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.senha.length < 6) {
      setError("Não é possível enviar: senha muito curta.");
      return;
    }
    console.log("Clicou!!!", formData);
  };

  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form
      onSubmit={HandleSubmit}
      className="flex flex-col gap-4 w-screen max-w-5xl px-4"
    >
      {FormField.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name} className="flex flex-col gap-4">
            {field.label}
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name as keyof typeof formData]}
              placeholder={field.placeholder}
              onChange={HandleChange}
            />
          </label>
        </div>
      ))}

      {error && (
        <span className=" text-red-600 font-medium text-xl">{error}</span>
      )}
      <button type="submit">Enviar</button>
    </form>
  );
};
