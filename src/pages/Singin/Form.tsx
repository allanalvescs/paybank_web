import { useState } from "react";
import { SingInCredentials, useUser } from "../../Providers/User/Auth";
import { Input } from "../../components/Form";

import { FiAtSign, FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const singInSchema = yup.object().shape({
  email: yup
    .string()
    .email("formato de email inválido")
    .required("Campo obrigatório! *"),
  password: yup
    .string()
    .required("Campo obrigatório! *")
    .min(6, "Minimo de 6 caracteres"),
});

export function FormSingIn() {
  const [isFeedback, setIsFeedback] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SingInCredentials>({
    resolver: yupResolver(singInSchema),
  });

  const { userSingIn, loading } = useUser();

  const handlesIngInUser = (data: SingInCredentials) => userSingIn(data);

  const feedbackPassword = () => {
    setIsFeedback(!isFeedback);
  };

  return (
    <form
      className="py-10 px-8 flex flex-col items-center  bg-white rounded w-[458px] border-zinc-300 border-2 ml-14"
      onSubmit={handleSubmit(handlesIngInUser)}
    >
      <Input
        label="Email"
        {...register("email")}
        error={errors.email}
        type="email"
        icon={FiAtSign}
      />

      <Input
        label="Senha"
        {...register("password")}
        error={errors.password}
        type={isFeedback ? "text" : "password"}
        icon={isFeedback ? FiEye : FiEyeOff}
        onActiveIcon={feedbackPassword}
      />

      <button className="bg-blue-400 w-60 flex items-center justify-center h-12 mt-3 rounded-md text-white font-semibold hover:bg-blue-500 ">
        Entrar
      </button>

      <div className="mt-1">
        {loading ? (
          <p className="text-blue-500 font-semibold">LOADING...</p>
        ) : null}
      </div>

      <div className="w-80 mt-12">
        <p className="text-zinc-800 text-sm">
          Não possui uma conta?{" "}
          <Link to="/register" className="text-blue-400 decoration-solid">
            Cadastre-se gratuitamente
          </Link>{" "}
        </p>
      </div>
    </form>
  );
}
