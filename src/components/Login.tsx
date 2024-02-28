'use client'

import { useState } from 'react';

import { motion } from 'framer-motion';

const Login: React.FC<{}> = ({ }) => {
    const [isLogin, setIsLogin] = useState(true);

    function switchAuthModeHandler() {
        setIsLogin((prevState) => !prevState);
    }

    return (
        <>
            <motion.section viewport={{ once: true, amount: 0.8 }} initial={{ opacity: 0, y: 15, scale: 0.99 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ type: 'tween', duration: 0.75 }}>
                <h1 className="text-center mb-8 font-bold">Login</h1>
                <form className="flex justify-center items-center flex-col info-card w-4/12 m-auto bg-purple-800 bg-opacity-15 rounded-lg py-5 px-5">
                    <div>
                        <label className="block text-center mb-5 text-fuchsia-700 font-bold" htmlFor='email'>Your Email: </label>
                        <input className="text-black" type='email' id='email' required />
                    </div>
                    <div>
                        <label className="block text-center my-5 text-fuchsia-700 font-bold" htmlFor='password'>Your Password: </label>
                        <input className="text-black" type='password' id='password' required />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <motion.button whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 100 }} className="m-5 py-3 px-8 rounded-lg bg-fuchsia-700 loginButton font-bold">{isLogin ? 'Login' : 'Create Account'}</motion.button>
                        <button
                            type='button'
                            onClick={switchAuthModeHandler}
                            className="block text-fuchsia-700"
                        >
                            {isLogin ? 'Create new account' : 'Login with existing account'}
                        </button>
                    </div>
                </form>
            </motion.section>
        </>
    )
}

export default Login;