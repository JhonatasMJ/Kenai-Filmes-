import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Perfil from '../Pages/Perfil';
import Registro from '../Pages/Registro';




const AppRoutes: React.FC = () => {

  return (
    <Routes>
      <Route path="/" element={<Perfil/>} />
      <Route path="/registro" element={<Registro/>} />
    
    </Routes>
  );
};

export default AppRoutes;
