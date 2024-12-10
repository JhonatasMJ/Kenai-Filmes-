import React from "react";
import Input from "../Components/Input";
import useForm from "../Contexts/UseForm";

const Registro = () => {
  const username = useForm("usernameSchema");
  const email = useForm("emailSchema");

  return (
    <section className=" w-full h-screen bg-cinza flex flex-col justify-center mx-auto">
    {/*   <h1 className="text-white">Registro</h1> */}
      <form action="" className="justify-center flex flex-col align-center max-w-7xl mx-auto">
        <div>
          <Input
            label="Usuário"
            type="text"
            name="username"
            value={username.value}
            onChange={username.onChange}
            onBlur={username.onBlur}
            error={username.error}
          />
        </div>
        <div>
          <Input
            label="Email"
            type="email"
            name="email"
            value={email.value}
            onChange={email.onChange}
            onBlur={email.onBlur}
            error={email.error}
          />
        </div>
      <button className="bg-amarelo font-bold text-cinza rounded-sm p-12 py-2 mt-12">Entrar</button>
      </form>
    </section>
  );
};

export default Registro;
