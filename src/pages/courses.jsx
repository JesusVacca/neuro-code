import React from 'react';
import { useState } from 'react';
import '../styles/courses.css';

const Courses =(props)=>{
    const courses = [
        {
            code:"0001",
            name:"¡Aprende Python ahora!",
            tutor:"Jesus Rodolfo Vacca",
            student:30,
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores ullam eos provident corrupti cupiditate vitae delectus vero veritatis aspernatur obcaecati assumenda sit debitis expedita quod voluptatibus illum corporis, earum voluptatum.",
            image:"https://th.bing.com/th/id/OIP.Mf0DaQ0xs6DVFWmkA7DKOgHaEK?rs=1&pid=ImgDetMain"
        },
        {
            code:"0001",
            name:"¿Aún no sabes JavaScript?",
            tutor:"Jesus Rodolfo Vacca",
            student:30,
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores ullam eos provident corrupti cupiditate vitae delectus vero veritatis aspernatur obcaecati assumenda sit debitis expedita quod voluptatibus illum corporis, earum voluptatum.",
            image:"https://th.bing.com/th/id/OIP.DEt_TbohHcb6KhpldP6vMwHaEK?rs=1&pid=ImgDetMain"
        },
        {
            code:"0001",
            name:"Django primeros pasos",
            tutor:"Jesus Rodolfo Vacca",
            student:30,
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores ullam eos provident corrupti cupiditate vitae delectus vero veritatis aspernatur obcaecati assumenda sit debitis expedita quod voluptatibus illum corporis, earum voluptatum.",
            image:"https://th.bing.com/th/id/R.e19973f442424e865c950bde0b8dc668?rik=YUOkS5jxs12%2bGw&pid=ImgRaw&r=0"
        },
        {
            code:"0001",
            name:"Introducción a React",
            tutor:"Jesus Rodolfo Vacca",
            student:30,
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores ullam eos provident corrupti cupiditate vitae delectus vero veritatis aspernatur obcaecati assumenda sit debitis expedita quod voluptatibus illum corporis, earum voluptatum.",
            image:"https://th.bing.com/th/id/OIP.kjfTrV988ZCycIQLAuZFywHaEK?rs=1&pid=ImgDetMain"
        },
        {
            code:"0001",
            name:"C# nunca había sido tan facil",
            tutor:"Jesus Rodolfo Vacca",
            student:30,
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores ullam eos provident corrupti cupiditate vitae delectus vero veritatis aspernatur obcaecati assumenda sit debitis expedita quod voluptatibus illum corporis, earum voluptatum.",
            image:"https://www.dongee.com/tutoriales/content/images/2023/01/image-44.png"
        },
        {
            code:"0001",
            name:"Aprende Java ahora",
            tutor:"Jesus Rodolfo Vacca",
            student:30,
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores ullam eos provident corrupti cupiditate vitae delectus vero veritatis aspernatur obcaecati assumenda sit debitis expedita quod voluptatibus illum corporis, earum voluptatum.",
            image:"https://th.bing.com/th/id/OIP.jap_cRszSOiPk-lu65mFLwHaEK?rs=1&pid=ImgDetMain"
        },
        {
            code:"0001",
            name:"Primeros pasos en Docker",
            tutor:"Jesus Rodolfo Vacca",
            student:30,
            description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores ullam eos provident corrupti cupiditate vitae delectus vero veritatis aspernatur obcaecati assumenda sit debitis expedita quod voluptatibus illum corporis, earum voluptatum.",
            image:"https://th.bing.com/th/id/R.6fd72fa0eb7435978c942532b911d4d0?rik=Eq2yPepMVhaLYQ&pid=ImgRaw&r=0"
        },
    ]
    
    const[openModal, setOpenModal] = useState(false);
    const[codeCourse, setCodeCourse] = useState('');
    const[nameCourse,setNameCourse] = useState('');
    return(
        <div className='courses__secction'>
            {
                openModal&&(
                    <BoxModal
                        code={codeCourse}
                        name={nameCourse}
                        closeModale={setOpenModal}
                    />
                )
            }
            {
                courses.map((course,index)=>{
                    return <div className='items__course' key={index}>
                            <img src={course.image} alt='course about programming'/>
                            <div className='description'>
                                <h3>{course.name}</h3>
                                <p>
                                    {course.description}
                                </p>
                                <p>
                                    <i className='bi bi-person'></i>
                                    <span>
                                        <strong>Docente</strong>
                                        {course.tutor}
                                    </span>
                                </p>
                                <p>
                                    <i className='bi bi-people'></i>
                                    <span>
                                        <strong>Total estudiantes </strong>
                                        {course.student}
                                    </span>
                                </p>
                            </div>
                            <button 
                                type='button'
                                onClick={()=>{
                                    setNameCourse(course.name);
                                    setCodeCourse(course.code);
                                    setOpenModal(true);
                                }}
                            >
                                Matriculate ya
                            </button>
                        </div>
                    
                })
            }
        </div>
    )
}

const BoxModal=(props)=>{
    return(
        <div className='box__modal'>
            <div className='box__content'>
                <h2>Ventana de registro</h2>
                <div>
                    <h3>{props.name}</h3>
                    <p>¿Desea inscribirse en este curso?</p>
                    
                </div>
                <div className='buttons'>
                    <button 
                        type='button' 
                        className='cancel'
                        onClick={()=>props.closeModale(false)}
                    >Cancelar</button>
                    <button type='button'>Inscribirse</button>
                </div>
            </div>
        </div>
    )
}

export default Courses;