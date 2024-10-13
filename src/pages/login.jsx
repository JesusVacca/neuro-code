import React, { useState } from 'react';
import '../styles/login.css'

const Login =(props)=>{
    const [nextForm, setNextForm] = useState(true);
    return(
        <section className='login'>
            {
                nextForm?
                <LoginForm  
                    nextForm = {nextForm}
                    setNextForm = {setNextForm}
                />
                :
                <RegisterForm   
                    nextForm = {nextForm}
                    setNextForm = {setNextForm}
                />
            }
        </section>
    )
}


const LoginForm =(props)=>{

    const [data, setData] = useState({
        username:"",
        password:""
    })

    const handleChangeInput =(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(values => (
            {
                ...values,
                [name]:value
            }
        ));
    }


    const handleSubmit =(event)=>{
        event.preventDefault();
        console.log(data);
        
        fetch(
            'http://localhost:8080/login/',
            {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(data)
            }
        )
        .then((response)=>{
            response.json();
            if(!response.ok){
                console.error("Ocurrio un error");
            }
        })
        .then((d)=>{
            
        })
        .catch((error)=>{
            console.error('Error',error);
        })


    }

    return(
        <form className='form' onSubmit={handleSubmit}>
            <h3>Inicia sesión</h3>
            <div className='row'>
                <i className="bi bi-person"></i>
                <input 
                    type='text' 
                    placeholder='Username' 
                    name='username'
                    id='username'
                    required
                    onChange={handleChangeInput}
                /> 
            </div>
            <div className='row'>
                <i className="bi bi-key-fill"></i>
                <input 
                    type='password' 
                    placeholder='Password' 
                    name='password'
                    id='password'
                    required
                    onChange={handleChangeInput}
                /> 
            </div>
            <div className='row enlaces'>
                <a 
                    href='#'
                    onClick={()=> props.setNextForm(!props.nextForm)}
                >¿No tienes cuenta?</a>
                <a href='#'>¿Olvidó su contraseña?</a>
            </div>
            <div className='row'>
                <input type='submit' value='Entrar'/>
            </div>

        </form>
    )
}

const RegisterForm =(props)=>{
    const [data, setData] = useState({
        name:"",
        lastname:"",
        dni:0,
        email:"",
        phone:"",
        password__user:""

    })
    const handleChangeInput =(event)=>{

        const name = event.target.name;
        const value = event.target.value;

        setData(values => (
            {
                ...values,
                [name]:value
            }
        ));

    }
    const handleSubmit =(event)=>{
        event.preventDefault();
        console.log(data);
        
        fetch(
            'http://localhost:8080/student/register/',
            {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(data)
            }
        )
        .then((response)=>{
            response.json();
            if(!response.ok){
                console.error("Ocurrio un error");
            }
        })
        .then((d)=>{
            
        })
        .catch((error)=>{
            console.error('Error',error);
        })


    }
    return(
        <form className='form register' onSubmit={handleSubmit}>
            <h3>Registrate</h3>
            <div className='row'>
                <input 
                    type='text' 
                    placeholder='¿Cual es tu nombre?' 
                    name='name'
                    id='name'
                    onChange={handleChangeInput}
                /> 
            </div>
            <div className='row'>
                <input 
                    type='test' 
                    placeholder='¿Cuales son tus apellidos?' 
                    name='lastname'
                    id='lastname'
                    onChange={handleChangeInput}
                /> 
            </div>
            <div className='row'>
                <input 
                    type='number' 
                    placeholder='¿Cual es tu numero de cedula?' 
                    name='dni'
                    id='dni'
                    onChange={handleChangeInput}
                /> 
            </div>
            <div className='row'>
                <input 
                    type='number' 
                    placeholder='¿Cual es número de telefono?' 
                    name='phone'
                    id='phone'
                    onChange={handleChangeInput}
                /> 
            </div>
            <div className='row'>
                <input 
                    type='email' 
                    placeholder='¿Cual es tu correo electronico?' 
                    name='email'
                    id='email'
                    onChange={handleChangeInput}
                /> 
            </div>
            <div className='row'>
                <input 
                    type='email' 
                    placeholder='Ingrese una contraseña' 
                    name='password__user'
                    id='password__user'
                    onChange={handleChangeInput}
                /> 
            </div>
            <div className='row enlaces'>
                <a 
                    href='#'
                    onClick={()=> props.setNextForm(!props.nextForm)}
                >¿Ya tienes cuenta?</a>
            </div>
            <div className='row'>
                <input type='submit' value='Registrate'/>
            </div>

        </form>
    )
}


export default Login;
