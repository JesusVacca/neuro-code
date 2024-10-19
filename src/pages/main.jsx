import React from 'react';
import { useState } from "react";
import HeaderComponent from '../components/headerComponent';
import Dashboard from './dashboard';

const Main =(props)=>{
    const [isLoggeIn, setIsLoggeIn] = useState(true);
    const [userLogged, setUserLogged] = useState(
      {
        name:"Jesus Rodolfo",
        lastname:"Vacca Romero",
        credentials:{
          username:"1007899440",
          password:"12345",
          roles:[
              "ADMIN",
              "PROFESSOR",
              "STUDENT",
              "VISITOR"
          ]
        }
      }
    );
    return (
      <>
        {
          isLoggeIn?
          <Logeado
            userLogged={userLogged}
            setIsLoggeIn={setIsLoggeIn}
          />
          :
          <NoLogeado
            setIsLoggeIn = {setIsLoggeIn}
            setUserLogged = {setUserLogged}
          />
        }
      </>
    );
  
}


const NoLogeado =(props)=>{
    return(
      <HeaderComponent
        setUserLogged = {props.setUserLogged}
      />
    )
  }

const Logeado=(props)=>{
    return(
        <Dashboard
        setIsLoggeIn={props.setIsLoggeIn}
        user={props.userLogged}
        />
    )
}

export default Main;