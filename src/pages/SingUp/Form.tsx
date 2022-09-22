import { Input } from "../../components/Form";

import { FiAtSign, FiPhoneCall, FiEyeOff, FiEye, FiUser } from "react-icons/fi";

export function FormSingUp() {
  return (
    <form className="py-10 px-8 flex flex-col items-center  bg-white rounded w-[458px] border-zinc-300 border-2 ml-14">
      <Input label="Nome" name="name" icon={FiUser} />
      <Input label="Email" name="email" icon={FiAtSign} />
      <Input label="Senha" name="password" icon={FiEyeOff} />
      <Input label="Whatsapp" name="contact" icon={FiPhoneCall} />

      <div className="flex items-center w-80 mb-8 mt-8">
        <input type="checkbox" className="w-6 h-6" />
        <label
          htmlFor="check"
          className="text-xs text-zinc-800 ml-2 leading-snug"
        >
          Por favor aceite nossos{" "}
          <a href="" className="text-blue-400 decoration-solid">
            termos de uso
          </a>{" "}
          para prosseguir
        </label>
      </div>

      <button className="bg-blue-400 w-60 h-12 mt-3 rounded-md text-white font-semibold hover:bg-blue-500 ">
        Cadastrar
      </button>
    </form>
  );
}
