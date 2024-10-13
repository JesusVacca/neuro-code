import { useState } from "react";
import HeaderComponent from "./components/headerComponent";


function App() {
  const [isLoggeIn, setIsLoggeIn] = useState(false);
  const [userLogged, setUserLogged] = useState(null);

  return (
    <>
      {
        isLoggeIn?
        Logeado
        :
        NoLogeado
      }
    </>
  );
}


const NoLogeado =(props)=>{
  return(
    <HeaderComponent/>
  )
}

const Logeado=(props)=>{
  return(
    <h2>Hola mundo</h2>
  )
}

export default App;
