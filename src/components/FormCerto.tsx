import { useState } from "react";

export const FormCerto = () => {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    cargo: "",
  });

  const FormFields = [
    {
      label: "Nome",
      type: "text",
      name: "nome",
    },
    {
      label: "Email",
      type: "email",
      name: "email",
    },
    {
      label: "Senha",
      type: "password",
      name: "senha",
    },
    {
      label: "Cargo",
      type: "text",
      name: "cargo",
    },
  ];

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
      <div>
        {FormFields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className="flex flex-col">
              {field.label}
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name as keyof typeof formData]}
                onChange={
                  field.type === "password"
                    ? HandlePasswordChange
                    : handleChange
                }
                className="border"
              />
            </label>
          </div>
        ))}
      </div>

      {error && (
        <span style={{ color: "red", display: "block", fontSize: "16" }}>
          {error}
        </span>
      )}
      <button type="submit">Enviar</button>
    </form>
  );
};
