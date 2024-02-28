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
            <section className="info-card w-4/12 m-auto bg-purple-800 bg-opacity-15 rounded-lg py-5 px-5">
                <form className="flex justify-center items-center flex-col">
                    <div>
                        <label className="block text-center mb-5 text-fuchsia-700 font-bold" htmlFor='email'>Your Email: </label>
                        <input className="text-black" type='email' id='email' required />
                    </div>
                    <div>
                        <label className="block text-center my-5 text-fuchsia-700 font-bold" htmlFor='password'>Your Password: </label>
                        <input className="text-black" type='password' id='password' required />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <button className="m-5 py-3 px-8 rounded-lg bg-fuchsia-700 loginButton font-bold">{isLogin ? 'Login' : 'Create Account'}</button>
                        <button
                            type='button'
                            onClick={switchAuthModeHandler}
                            className="block text-fuchsia-700"
                        >
                            {isLogin ? 'Create new account' : 'Login with existing account'}
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Login;