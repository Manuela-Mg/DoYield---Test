import React from 'react';
import DocumentTitle from 'react-document-title';
import "./style/Login.scss";

const Login = () => {
    return (
        <div className='loginBody'>
            <DocumentTitle title='Login'>
            </DocumentTitle>
            <div className="container">
                
                <section className='image-box'>
                    <img src="./image/image-log.png" alt="background"/>
                </section>
                <section className='login-box'>
                    <h1 className='login-title'>log in</h1>
                    <form className='log-form'>
                        <input type="email" name="email" placeholder="Email address"/>
                        <input type="password" name="password" placeholder="Password"/>
                        <button type="submit" name="submit">LOG IN</button>
                    </form>
                </section>
            </div>
            
        </div>
    );
}

export default Login;
