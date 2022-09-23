import { useState } from "react";
import { Input } from "../../components/Form";

import { FiAtSign, FiPhoneCall, FiEyeOff, FiEye, FiUser } from "react-icons/fi";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SingUpCredencial, useUser } from "../../Providers/User/Auth";

const singInSchema = yup.object().shape({
  name: yup
    .string()
    .required("Campo Obrigatório")
    .min(2, "O campo deve ser preenchido comum nome real!"),
  email: yup
    .string()
    .email("formato de email inválido")
    .required("Campo obrigatório! *"),
  accpept_terms: yup
    .boolean()
    .oneOf([true], "Você deve aceitar os termos de uso!"),
  password: yup
    .string()
    .required("Campo obrigatório! *")
    .min(6, "Minimo de 6 caracteres"),
  cel: yup
    .string()
    .required("Campo Obrigatório")
    .length(9, "campo de celular deve ter 9 caracteres"),
});

export function FormSingUp() {
  const [isFeedback, setIsFeedback] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SingUpCredencial>({
    resolver: yupResolver(singInSchema),
  });

  const { handleSingUp, loading } = useUser();

  const handleFeedback = () => setIsFeedback(!isFeedback);

  return (
    <form
      className="py-10 px-8 flex flex-col items-center  bg-white rounded w-[458px] border-zinc-300 border-2 ml-14"
      onSubmit={handleSubmit(handleSingUp)}
    >
      <Input
        label="Nome"
        {...register("name")}
        error={errors.name}
        icon={FiUser}
        type="text"
      />
      <Input
        label="Email"
        {...register("email")}
        icon={FiAtSign}
        type="email"
        error={errors.email}
      />
      <Input
        label="Senha"
        {...register("password")}
        icon={isFeedback ? FiEye : FiEyeOff}
        onActiveIcon={handleFeedback}
        type={isFeedback ? "text" : "password"}
        error={errors.password}
      />
      <Input
        label="Whatsapp"
        {...register("cel")}
        icon={FiPhoneCall}
        error={errors.cel}
      />

      <div className="flex items-center w-80 mb-2 mt-8">
        <input
          type="checkbox"
          className="w-6 h-6"
          {...register("accpept_terms")}
        />
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

      <span className="text-xs text-red-500 font-medium">
        {errors.accpept_terms?.message}
      </span>

      <button
        type="submit"
        className="bg-blue-400 w-60 h-12 mt-5 rounded-md text-white font-semibold hover:bg-blue-500 "
      >
        Cadastrar
      </button>

      {loading ? (
        <h3 className="text-blue-500 font-semibold m-1.5">LOADING...</h3>
      ) : null}
    </form>
  );
}
