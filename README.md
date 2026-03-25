# 📋 React Forms — Controlled Components & Validation

## Projeto de estudo focado em **formulários controlados com React**, desenvolvido com Vite e TypeScript. O objetivo foi explorar diferentes abordagens para gerenciamento de estado em formulários, desde a estrutura básica até validação e boas práticas de componentização.

## 📌 Progresso

- [x] Adicionar validação de campos com mensagens de erro inline
- [x] Gestão de Versão com Git: Utilização de branches para
      desenvolvimento de funcionalidades específicas e integração
      posterior via merge na branch main.
- [x] Componentes controlados com useState
- [x] Tipagem explícita de eventos com TypeScript
- [x] Interface FormData com keyof para acesso seguro ao estado
- [x] Geração dinâmica de campos a partir de array de configuração
- [x] Validação em tempo real da senha (mínimo 6 caracteres)
- [x] Bloqueio de submit com senha inválida
- [x] Mensagens de erro inline (sem `alert`)
- [x] Handlers diferenciados por tipo de campo (password vs demais)

---

## 📌 Próximos passos

- [ ] Integrar uma biblioteca de formulários como [React Hook Form](https://react-hook-form.com/) ou [Formik](https://formik.org/)
- [ ] Adicionar esquemas de validação com [Zod](https://zod.dev/) ou [Yup](https://github.com/jquense/yup)
- [ ] Estilização completa dos formulários com Tailwind CSS
- [ ] Testes unitários com [Vitest](https://vitest.dev/) e [Testing Library](https://testing-library.com/)

---

## 🚀 Tecnologias

- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ Git ](https://git-scm.com/install/)
- [ Github ](https://github.com/)

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

### Validação inline com mensagens de erro

```tsx
 A validação agora acontece em tempo real, sem uso de alert(). Mensagens de erro são exibidas diretamente abaixo do formulário via estado:
 Além da validação em tempo real, o submit também bloqueia o envio se a senha for inválida:
```

```tsx
 Handlers diferenciados por tipo de campo
Campos de senha recebem um handler dedicado (HandlePasswordChange) que dispara a validação a cada keystroke, enquanto os demais campos usam o handleChange genérico. A seleção é feita diretamente no array de configuração:

onChange={field.type === "password" ? HandlePasswordChange : handleChange}
```

### Formulários gerados a partir de arrays de configuração

```tsx
Em vez de repetir JSX para cada campo, todos os componentes usam um array declarativo de objetos para gerar os inputs dinamicamente:
```

## 📁 Estrutura do projeto

```
src/
├── components/
│   ├── MasForm.tsx
│   ├── Form.tsx           (ControlledForm)
│   ├── ValidationForm.tsx
│   ├── FormCerto.tsx
│   ├── FinishForm.tsx
│   └── Formulario.tsx
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

## 👤 Autor

Feito por **[Paulo Borges de Almeida]** — estudante de Análise e Desenvolvimento de Sistemas, em busca de oportunidades de estágio ou posição júnior em desenvolvimento frontend.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Paulo%20Borges-0077B5?style=flat&logo=linkedin)](https://www.linkedin.com/in/paulo-borges-de-almeida-b543b3242/)

[![GitHub](https://img.shields.io/badge/GitHub-Paulo--Borges-181717?style=flat&logo=github)](https://github.com/Paulo-Borges)
