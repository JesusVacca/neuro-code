import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import '../styles/header.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import LogoComponent from './logoComponent';
import Login from '../pages/login';


const HeaderComponent =(props)=>{
    const links = [
        {
            path:"/",
            value:"Inicio",
            content:<h2>Home</h2>,
            icon:<i className="bi bi-house"></i>
        },
        {
            path:"/contact",
            value:"Contacto",
            content:<h2>Contacto</h2>,
            icon:<i className="bi bi-phone"></i>
        },
        {
            path:"/about",
            value:"Sobre nosotros",
            content:<h2>Sobre nosotros</h2>,
            icon:<i className="bi bi-binoculars"></i>
        },
        {
            path:"/register",
            value:"Registrate",
            content:<Login/>,
            icon:<i className="bi bi-door-open"></i>
        },
    ]
    const [linkFocus, setLinkFocus] = useState(0);

    const [hiddenNav, setHiddenNav] = useState(false);

    const handlePress=(index)=>{
        setLinkFocus(index);
    }

    return(    
        <BrowserRouter>
            <header className='header__main'>
                <LogoComponent/>
                <nav className={
                    hiddenNav?
                    'navbar visible'
                    :
                    'navbar'
                }>
                    <ul>
                        {
                            links.map((item,index)=>{
                                return <li
                                    key={index}
                                >
                                    <Link
                                        className={
                                            linkFocus === index?
                                            'active'
                                            :
                                            ''
                                        }
                                        to={item.path}
                                        onClick={()=>handlePress(index)}
                                    >
                                        {item.icon}
                                        <span>{item.value}</span>
                                    </Link>
                                </li>
                            })
                        }                     
                    </ul>
                </nav>
                <button 
                    type='button' 
                    className='hamburguesa'
                    onClick={()=>setHiddenNav(!hiddenNav)}
                >
                    {
                        hiddenNav?
                        <i className="bi bi-x-lg"></i>
                        :
                        <i className="bi bi-list"></i>
                    }
                </button>
            </header>
            <Routes>
                {
                    links.map((item,index)=>{
                        return <Route
                            path={item.path}
                            element={item.content}
                            key={index}
                        />
                    })
                }
            </Routes>
        </BrowserRouter>
    )
}

export default HeaderComponent;