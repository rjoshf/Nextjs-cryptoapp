'use client'

import { useState } from 'react';

const Login: React.FC<{}> = ({ }) => {
    const [isLogin, setIsLogin] = useState(true);

    function switchAuthModeHandler() {
        setIsLogin((prevState) => !prevState);
    }

    return (
        <>
            <h1 className="text-center">Login</h1>
            <form className="flex justify-center items-center flex-col">
                <div>
                    <label className="block text-center" htmlFor='email'>Your Email: </label>
                    <input type='email' id='email' required />
                </div>
                <div>
                    <label className="block text-center" htmlFor='password'>Your Password: </label>
                    <input type='password' id='password' required />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <button>{isLogin ? 'Login' : 'Create Account'}</button>
                    <button
                        type='button'
                        onClick={switchAuthModeHandler}
                        className="block"
                    >
                        {isLogin ? 'Create new account' : 'Login with existing account'}
                    </button>
                </div>
            </form>
        </>
    )
}

export default Login;