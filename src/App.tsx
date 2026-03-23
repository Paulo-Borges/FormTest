import { ControlledForm } from "./components/Form";
import { FormCerto } from "./components/FormCerto";
import { MasForm } from "./components/MasForm";
import { ValidationForm } from "./components/ValidationForm";

function App() {
  return (
    <div className="flex flex-col gap-10 text-3xl font-bold justify-center items-center h-screen bg-gray-500 ">
      <div className=" bg-blue-950 ">
        <MasForm />
      </div>

      <div className=" bg-blue-950 ">
        <ControlledForm />
      </div>

      <div className=" bg-blue-950 ">
        <ValidationForm />
      </div>
      <div className=" bg-blue-950 ">
        <FormCerto />
      </div>
    </div>
  );
}

export default App;
