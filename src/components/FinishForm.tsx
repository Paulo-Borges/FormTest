// import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  nome: string;
  email: string;
  senha: string;
  cargo: string;
  curso: string;
};

const formFields = [
  {
    id: "1",
    label: "Nome",
    type: "text",
    name: "nome" as const,
  },
  {
    id: "2",
    label: "Email",
    type: "email",
    name: "email" as const,
  },
  {
    id: "3",
    label: "Senha",
    type: "password",
    name: "senha" as const,
  },
  {
    id: "4",
    label: "Cargo",
    type: "text",
    name: "cargo" as const,
  },
  {
    id: "5",
    label: "Curso",
    type: "text",
    name: "curso" as const,
  },
];

export const FinishForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Agora com Hook-Form", data);
  };
  // const [error, setError] = useState("");
  // const [formData, setFormData] = useState({
  //   nome: "",
  //   email: "",
  //   senha: "",
  //   cargo: "",
  //   curso: "",
  // });

  // const HandlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;

  //   setFormData({ ...formData, [name]: value });
  //   if (value.length > 0 && value.length < 6) {
  //     setError("A senha tem que ter pelo menos 6 caracteres.");
  //   } else {
  //     setError("");
  //   }
  // };

  // const handleSubmmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   if (formData.senha.length < 6) {
  //     setError("Não é possíve enviar: senha muito curta.");
  //     return;
  //   }
  //   console.log("Agora eu sei", formData);
  // };

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-screen max-w-5xl px-4"
    >
      <div>
        {formFields.map((field) => (
          <div key={field.id}>
            <label className="flex flex-col">
              {field.label}
              <input
                type={field.type}
                className="border"
                {...register(field.name, {
                  required: `${field.label} é obrigatório`,
                  ...(field.name === "senha" && {
                    minLength: {
                      value: 6,
                      message: "A Senha tem que ter pelo menos 6 caracteres.",
                    },
                  }),
                })}
              />
            </label>
            {errors[field.name] && (
              <span style={{ color: "red", fontSize: 16 }}>
                {errors[field.name]?.message}
              </span>
            )}
            {/* <label htmlFor="nome" className="flex flex-col">
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
            </label> */}
          </div>
        ))}
      </div>
      {/* {error && (
        <span style={{ color: "red", display: "block", fontSize: 16 }}>
          {error}
        </span>
      )} */}
      <button>Enviar</button>
    </form>
  );
};
