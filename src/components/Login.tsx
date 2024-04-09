'use client'

import { useState, useRef } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from "next/navigation";
import { motion } from 'framer-motion';

import ErrorCard from './UI/ErrorCard';

async function createUser(email: string, password: string) {
    const response = await fetch('/api/createuser', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    return data;
}

const Login: React.FC<{}> = ({ }) => {
    const router = useRouter();
    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);
    const [isLogin, setIsLogin] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    function switchAuthModeHandler() {
        setIsLogin((prevState) => !prevState);
    }

    async function submitHandler(event: React.FormEvent) {
        event.preventDefault();

        setIsSubmitting(true);
        setIsError(false);
        const enteredEmail = emailInputRef.current?.value;
        const enteredPassword = passwordInputRef.current?.value;

        if (enteredEmail === undefined || enteredPassword === undefined) {
            setIsSubmitting(false);
            return;
        }

        if (isLogin) {
            const result = await signIn('credentials', { redirect: false, email: enteredEmail, password: enteredPassword, })

            if (!result!.error) {
                router.replace('/')
            } else {
                console.log(result?.error)
                setIsSubmitting(false);
            }
        } else {
            try {
                await createUser(enteredEmail, enteredPassword);
                // Sign user in if no errors and the user was created.
                await signIn('credentials', { redirect: false, email: enteredEmail, password: enteredPassword });
                router.replace('/');
            } catch (error) {
                if (error instanceof Error) {
                    setIsError(true);
                    setErrorMessage(error.message);
                } else {
                    setIsError(true);
                    setErrorMessage("An unexpected error occurred.");
                }
                setIsSubmitting(false);
            }
        }
    }

    return (
        <>
            <motion.section viewport={{ once: true, amount: 0.8 }} initial={{ opacity: 0, y: 15, scale: 0.99 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ type: 'tween', duration: 0.75 }}>
                <h1 className="text-center mb-8 font-bold">Login</h1>
                <form onSubmit={submitHandler} className="flex justify-center items-center flex-col info-card w-4/12 m-auto bg-purple-800 bg-opacity-15 rounded-lg py-5 px-5">
                    <div>
                        <label className="block text-center mb-5 text-fuchsia-700 font-bold" htmlFor='email'>Your Email: </label>
                        <input className="text-black" type='email' id='email' ref={emailInputRef} required />
                    </div>
                    <div>
                        <label className="block text-center my-5 text-fuchsia-700 font-bold" htmlFor='password'>Your Password: </label>
                        <input className="text-black" type='password' id='password' required ref={passwordInputRef} />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <motion.button whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 100 }} className="m-5 py-3 px-8 rounded-lg bg-fuchsia-700 button font-bold">{isLogin ? `${isSubmitting ? 'Logging In...' : 'Login'}` : `${isSubmitting ? 'Creating Account...' : 'Create Account'}`}</motion.button>
                        <button
                            type='button'
                            onClick={switchAuthModeHandler}
                            className="block text-fuchsia-700"
                        >
                            {isLogin ? 'Create new account' : 'Login with existing account'}
                        </button>
                        {isError && <ErrorCard errorMessage={errorMessage} />}
                    </div>
                </form>
            </motion.section>
        </>
    )
}

export default Login;