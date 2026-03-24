import { useState } from "react";

interface FormData {
  email: string;
  nome: string;
}

const formFields: {
  label: string;
  name: keyof FormData;
  type: string;
}[] = [
  {
    label: "Email",
    name: "email",
    type: "email",
  },
  {
    label: "Nome",
    name: "nome",
    type: "text",
  },
];

export function ControlledForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    nome: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Atualiza apenas o campo que mudou, mantendo os outros
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Enviado:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 w-screen max-w-5xl px-4"
    >
      <div className="flex flex-col gap-4">
        {formFields.map((field) => (
          <div key={field.name} className="flex flex-col gap-4">
            <label htmlFor={field.label}>{field.label}</label>
            <input
              name={field.name}
              type={field.type}
              value={formData[field.name]}
              className="border"
              //   onChange={(e) => setFormData {}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>

      <button type="submit" className="">
        Enviar
      </button>
    </form>
  );
}
