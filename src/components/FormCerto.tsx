// import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  nome: string;
  email: string;
  senha: string;
  cargo: string;
};

const FormFields = [
  {
    label: "Nome",
    type: "text",
    name: "nome" as const,
  },
  {
    label: "Email",
    type: "email",
    name: "email" as const,
  },
  {
    label: "Senha",
    type: "password",
    name: "senha" as const,
  },
  {
    label: "Cargo",
    type: "text",
    name: "cargo" as const,
  },
];

export const FormCerto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Melhorando os hooks", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-screen max-w-5xl px-4"
    >
      <div>
        {FormFields.map((field) => (
          <div key={field.name}>
            <label className="flex flex-col">
              {field.label}
              <input
                type={field.type}
                className="border"
                {...register(field.name, {
                  required: `${field.label} precisar ter os dados!`,
                  ...(field.name === "senha" && {
                    minLength: {
                      value: 6,
                      message: "A senha tem que ter pelo menos 6 caracteres",
                    },
                  }),
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
};
