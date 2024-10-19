import React, { useEffect, useState } from 'react';
import '../styles/dashboard.css';
import LogoComponent from '../components/logoComponent';
import FooterComponent from '../components/footerComponent';
import Courses from './courses';

const Dashboard =(props)=>{
    const [openSideBar, setOpenSideBar] = useState(false);
    const [hiddenSideBar, setHiddenSideBar] = useState(false);
    const [className, setClassName] = useState('sidebar');
    const [buttonIndex, setButtonIndex] = useState(0);

    const [content,setContent] = useState(<Courses/>);
    const [rol, setRol] = useState(props.user.credentials.roles[0] || '');

    return(
        <section className='dashboard'>
            <SideBar
                openSideBar={openSideBar}
                setOpenSideBar={setOpenSideBar}
                className={className}
                setClassName={setClassName}
                rol={rol}
                setContent={setContent}
            />
            <Header
                setOpenSideBar={setOpenSideBar}
                className={className}
                setClassName={setClassName}
                hiddenSideBar={hiddenSideBar}
                setHiddenSideBar={setHiddenSideBar}
                buttonIndex={buttonIndex}
                setButtonIndex={setButtonIndex}
                rol={rol}
                setRol={setRol}
                user={props.user}
                setContent={setContent}
                setIsLoggeIn={props.setIsLoggeIn}
            />
            <Content
                openSideBar={openSideBar}
                hiddenSideBar={hiddenSideBar}
                content={content}
            />
        </section>
    )
}


const SideBar =(props)=>{
    const handleChangeContent =(content)=>{
        props.setContent(content);
    }
    return(
        <aside className={props.className}>
            <nav>
                <a 
                    href='#'
                    onClick={()=>handleChangeContent(<h2>Inicio</h2>)}
                >
                    <i className='bi bi-house-fill'></i>
                    <span>Inicio</span>
                </a>
                {
                    props.rol === "ADMIN" &&(
                        <>
                            <a 
                                href='#'
                                onClick={()=>handleChangeContent(<h2>Gestion de cursos</h2>)}
                            >
                                <i className='bi bi-book'></i>
                                <span>Gestion de cursos</span>
                            </a>
                            <a 
                                href='#'
                                onClick={()=>handleChangeContent(<h2>Gestion de alumnos</h2>)}
                            >
                                <i className='bi bi-people'></i>
                                <span>Gestion de alumnos</span>
                            </a>
                            <a 
                                href='#'
                                onClick={()=>handleChangeContent(<h2>Gestion de docentes</h2>)}
                            >
                                <i className='bi bi-mortarboard'></i>
                                <span>Gestion de docentes</span>
                            </a>
                            <a 
                                href='#'
                                onClick={()=>handleChangeContent(<h2>Inicio</h2>)}
                            >
                                <i className='bi bi-gear'></i>
                                <span>Gestion de roles</span>
                            </a>
                        </>
                    )
                }
                {
                    props.rol === "STUDENT" &&(
                        <>
                            <a href='#'>
                                <i className='bi bi-book'></i>
                                <span>Todos los cursos</span>
                            </a>
                        </>
                    )
                }
               
            </nav>
            <button 
                type='button'
                onClick={()=>{
                    props.setOpenSideBar(!props.openSideBar);
                    if(!props.openSideBar){
                        props.setClassName('sidebar open');
                    }else props.setClassName('sidebar');
                }}
            >
                {
                    props.openSideBar?
                    <i className="bi bi-arrow-left-square"></i>
                    :
                    <i className="bi bi-arrow-right-square"></i>
                }
                <span>Colapsar menú</span>
            </button>
        </aside>
    )
}

const Header =(props)=>{

    const handleChangeSelect =(event)=>{
        props.setRol(event.target.value);
    }
 
    const [isFocused, setIsFocused] = useState(true);

    const handleChangeIndex =(index)=>{
        setIsFocused(!isFocused);
        props.setButtonIndex(index)
        if(!isFocused)props.setButtonIndex(0);
    }
    

    return(
        <header className='header'>
            <button 
                type='button' 
                className='hamburguesa'
                onClick={()=>{
                    props.setOpenSideBar(false);
                    props.setHiddenSideBar(!props.hiddenSideBar);
                    if(!props.hiddenSideBar){
                        props.setClassName("sidebar close");
                    }else props.setClassName("sidebar");
                }}
            >
                {
                    props.hiddenSideBar?
                    <i className='bi bi-x'></i>
                    :
                    <i className='bi bi-list'></i>
                }
            </button>
            <LogoComponent/>
            <nav className='navbar'>   
                <button 
                    type='button'
                    className={
                        props.buttonIndex === 2?
                        'focus':
                        ''
                    }
                >
                    <i 
                        className='bi bi-bell-fill'
                        onClick={()=>handleChangeIndex(2)}
                    ></i>
                    <div 
                        className='profile item1'
                    >
                        <div className='notification'>
                            <span>
                                {<i className='bi bi-check-square'></i>}
                            </span>
                            <p>
                                {}
                            </p>
                        </div>
                        
                    </div>
                    
                </button>
                <button 
                    type='button'
                    className={
                        props.buttonIndex === 3?
                        'focus':
                        ''
                    }
                >
                    <i 
                        className='bi bi-person-circle'
                        onClick={()=>handleChangeIndex(3)}
                    ></i>
                    <div 
                        className='profile'
                    >
                        <header>
                            <h3>{props.user.name}</h3>
                           
                            <select onChange={handleChangeSelect} value={props.rol}>
                                {
                                    props.user.credentials.roles.map((rol,index)=>{
                                        return <option key={index} value={rol}>{rol}</option>
                                    })
                                }
                            </select>
                        </header>
                        <a href='#'>
                            <i className='bi bi-person'></i>
                            <span>Perfil</span>
                        </a>
                        <a href='#'>
                            <i className='bi bi-mortarboard'></i>
                            <span>Mi aprendizaje</span>
                        </a>
                        <a href='#'>
                            <i className='bi bi-graph-up-arrow'></i>
                            <span>Clasificación</span>
                        </a>
                        <a href='#'>
                            <i className='bi bi-pencil'></i>
                            <span>Aplica para docente</span>
                        </a>
                        <a 
                            href='#' className='logaut'
                            onClick={()=>props.setIsLoggeIn(false)}
                        >
                            <i className='bi bi-door-closed'></i>
                            <span>Salir</span>
                        </a>
                    </div>
                </button>
            </nav>
        </header>
    )
}

const Content =(props)=>{

    const [className, setClassName] = useState('content');

    useEffect(()=>{
        if(props.hiddenSideBar){
            setClassName('content');
        }if(!props.openSideBar && !props.hiddenSideBar){
            setClassName('content normal');
        }
        if(props.openSideBar){
            setClassName('content open');
        }
    },[props.openSideBar, props.hiddenSideBar])


    return(
        <div 
            className={className}
        >
           {props.content}
           <FooterComponent/>
        </div>
    )
}

export default Dashboard;