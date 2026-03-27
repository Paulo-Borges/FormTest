// import { useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  email: string;
  nome: string;
}

const formFields = [
  {
    label: "Email",
    name: "email" as const,
    type: "email",
  },
  {
    label: "Nome",
    name: "nome" as const,
    type: "text",
  },
];

export function ControlledForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log("Melhorando o Hook", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 w-screen max-w-5xl px-4"
    >
      <div className="flex flex-col gap-4">
        {formFields.map((field) => (
          <div key={field.name} className="flex flex-col gap-4">
            <label>
              {field.label}
              <input
                type={field.type}
                className="border"
                {...register(field.name, {
                  required: `${field.label} é obrigatório`,
                })}
              />
            </label>
            {errors[field.name] && <span>{errors[field.name]?.message}</span>}
          </div>
        ))}
      </div>

      <button>Enviar</button>
    </form>
  );
}
