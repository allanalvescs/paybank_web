import { Input } from "../../components/Form";

import { FiAtSign, FiEye, FiEyeOff } from "react-icons/fi";

export function FormSingIn() {
  return (
    <form className="py-10 px-8 flex flex-col items-center  bg-white rounded w-[458px] border-zinc-300 border-2 ml-14">
      <Input label="Email" name="email" icon={FiAtSign} />
      <Input label="Senha" name="password" icon={FiEyeOff} />

      <button className="bg-blue-400 w-60 h-12 mt-3 rounded-md text-white font-semibold hover:bg-blue-500 ">
        Entrar
      </button>

      <div className="w-80 mt-12">
        <p className="text-zinc-800 text-sm">
          Não possui uma conta?{" "}
          <a href="" className="text-blue-400 decoration-solid">
            Cadastre-se gratuitamente
          </a>{" "}
        </p>
      </div>
    </form>
  );
}
