import React from 'react';
import '../styles/logo.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const LogoComponent =()=>{
    return(
        <div className='logotipe'>
            <h1>
                <i className="bi bi-mortarboard"></i>
                <span>
                    &lt;Neuro
                    <strong style={{
                        color:"#eb5e28ff"
                    }}>Code</strong>
                    /&gt;
                </span>
            </h1>
        </div>
    )
}
export default LogoComponent;