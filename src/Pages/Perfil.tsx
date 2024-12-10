import React from "react";
import { useNavigate } from "react-router-dom";


const Perfil = () => {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/registro");
  }



  return (
    <main className="grid bg-cinza  h-screen  w-full  ">
      <div className="flex flex-col  justify-center items-center text-center ">
        <h1 className="text-white text-4xl  ">
          Bem-Vindo de volta ao <span className="text-amarelo">Kenai</span>{" "}
        </h1>
        <p className="text-white mt-4 text-2xl">Quem está usando?</p>
        <div className="flex flex-col gap-8 ">
          <p className="text-white mt-12">Você ainda não tem um perfil</p>

          <button
            onClick={handleNavigate}
            className="bg-amarelo font-bold text-cinza rounded-sm p-12 py-2"
          >
            Criar Perfil
          </button>
        </div>
      </div>
    </main>
  );
};

export default Perfil;
