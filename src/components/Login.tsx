const Login: React.FC<{}> = ({ }) => {
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
                <div>
                    <button>Log In</button>
                </div>
            </form>
        </>
    )
}

export default Login;