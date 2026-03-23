# 📋 React Forms — Controlled Components & Validation

Projeto de estudo focado em **formulários controlados com React**, desenvolvido com Vite e TypeScript. O objetivo foi explorar diferentes abordagens para gerenciamento de estado em formulários, desde a estrutura básica até validação e boas práticas de componentização.

---

## 🚀 Tecnologias

- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 🧠 O que foi praticado

### Controlled Components

Todos os inputs do projeto são **componentes controlados**, ou seja, o valor de cada campo é sempre gerenciado pelo estado do React via `useState`. Isso garante que a UI esteja sempre sincronizada com os dados da aplicação — padrão fundamental no mundo React.

```tsx
const [formData, setFormData] = useState({ nome: "", email: "" });

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};
```

### Tipagem com TypeScript

Todos os eventos de formulário foram tipados explicitamente:

- `React.ChangeEvent<HTMLInputElement>` — para captura de mudanças nos campos
- `React.FormEvent<HTMLFormElement>` — para o evento de submit

Isso evita erros em tempo de execução e melhora muito a experiência de desenvolvimento com autocomplete e segurança de tipos.

### Atualização de estado com spread operator

Para atualizar apenas o campo que mudou sem perder os outros dados do formulário:

```tsx
setFormData({ ...formData, [name]: value });
// ou usando o id do elemento como chave dinâmica:
setFormData({ ...formData, [id]: value });
```

### Prevenção do comportamento padrão do formulário

```tsx
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault(); // impede o reload da página
  console.log(formData);
};
```

---

## 🗂️ Componentes

| Componente       | Descrição                                                                           |
| ---------------- | ----------------------------------------------------------------------------------- |
| `MasForm`        | Formulário base com `nome`, `email` e `senha`. Ponto de partida do estudo.          |
| `ControlledForm` | Versão refatorada usando `id` em vez de `name` para chave dinâmica de estado.       |
| `ValidationForm` | Formulário com feedback ao usuário via `alert` no submit.                           |
| `FormCerto`      | Versão mais completa com campo de `cargo`, consolidando os aprendizados anteriores. |

---

## 📁 Estrutura do projeto

```
src/
├── components/
│   ├── MasForm.tsx
│   ├── ControlledForm.tsx
│   ├── ValidationForm.tsx
│   └── FormCerto.tsx
└── App.tsx
```

---

## ▶️ Como rodar

```bash
# Instalar dependências
npm install

# Iniciar o servidor de desenvolvimento
npm run dev
```

---

## 📌 Próximos passos

- [x ] Adicionar validação de campos com mensagens de erro inline (sem `alert`)
- [ ] Integrar uma biblioteca de formulários como [React Hook Form](https://react-hook-form.com/) ou [Formik](https://formik.org/)
- [ ] Adicionar esquemas de validação com [Zod](https://zod.dev/) ou [Yup](https://github.com/jquense/yup)
- [ ] Estilização dos formulários com Tailwind CSS
- [ ] Testes unitários com [Vitest](https://vitest.dev/) e [Testing Library](https://testing-library.com/)

---

## 👤 Autor

Feito por **[Paulo Borges de Almeida]** — estudante de Análise e Desenvolvimento de Sistemas, em busca de oportunidades de estágio ou posição júnior em desenvolvimento frontend.

[![LinkedIn](https://www.linkedin.com/in/paulo-borges-de-almeida-b543b3242/)]
[![GitHub](https://github.com/Paulo-Borges)]
