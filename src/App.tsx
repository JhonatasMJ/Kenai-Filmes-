import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import AppRoutes from './Routes/Routes';


const App = () => {
  return <div >
    <>
    <BrowserRouter>
      
        <AppRoutes/>
  
    </BrowserRouter>
    </>
  </div>;
};

export default App;
