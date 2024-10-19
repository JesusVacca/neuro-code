import React from 'react';
import '../styles/footer.css';
import LogoComponent from './logoComponent';

const FooterComponent =(props)=>{
    return(
        <footer className='footer'>
            <div className='copy' >
                <span>Creado por equipo</span>
                <LogoComponent/>
            </div>
        </footer>
    )
}
export default FooterComponent;