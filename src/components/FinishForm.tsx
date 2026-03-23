import { useState } from "react";

const formFields = [
  {
    id: "1",
    label: "Nome",
    type: "text",
    name: "nome",
  },
  {
    id: "2",
    label: "Email",
    type: "email",
    name: "email",
  },
  {
    id: "3",
    label: "Senha",
    type: "password",
    name: "senha",
  },
  {
    id: "4",
    label: "Cargo",
    type: "text",
    name: "cargo",
  },
  {
    id: "5",
    label: "Curso",
    type: "text",
    name: "curso",
  },
];

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
      <div>
        {formFields.map((field) => (
          <div key={field.id}>
            <label htmlFor="nome" className="flex flex-col">
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
        <span style={{ color: "red", display: "block", fontSize: 16 }}>
          {error}
        </span>
      )}
      <button>Enviar</button>
    </form>
  );
};
