import React, { useState } from "react";

export const MasForm = () => {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const fieldsForm = [
    {
      label: "Nome",
      name: "nome",
      type: "text",
      placeholder: "Digite seu nome",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Digite seu Email",
    },
    {
      label: "Senha",
      name: "senha",
      type: "password",
      placeholder: "Digite sua senha",
    },
  ];

  const HandlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // setPassword(value);
    setFormData({ ...formData, [name]: value });
    if (value.length > 0 && value.length < 6) {
      setError("A senha tem que ter pelo menos 6 caracteres.");
    } else {
      setError("");
    }
  };

  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.senha.length < 6) {
      setError("Não é possível enviar: senha muito curta.");
      return;
    }

    console.log("esses são os dados: ", formData);
  };

  return (
    <form
      onSubmit={HandleSubmit}
      className="flex flex-col w-screen max-w-5xl px-4"
    >
      {fieldsForm.map((field) => (
        <div key={field.label}>
          <label htmlFor="nome" className="flex flex-col">
            {field.label}
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name as keyof typeof formData]}
              placeholder={field.placeholder}
              onChange={
                field.type === "password" ? HandlePasswordChange : HandleChange
              }
            />
          </label>
        </div>
      ))}

      {error && <span style={{ color: "red", display: "block" }}>{error}</span>}
      <button>Enviar</button>
    </form>
  );
};
