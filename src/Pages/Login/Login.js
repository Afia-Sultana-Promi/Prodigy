import React, { useContext, useState } from 'react';
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import { AuthContext } from '../../Context/Auth/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const Login = () => {

    const { loginUser, providerLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const [errors, setErrors] = useState("");
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user

                navigate('/home');
            })
            .catch(error => console.log(error.message))
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginUser(email, password)
            .then(result => {
                navigate('/home');
            })
            .catch(err => setErrors(err.code)
            )
    };

    return (
        <div className=' mx-auto max-w-4xl max-h-4xl my-auto hover:shadow-2xl duration-200 shadow-lg py-10 px-10 mt-20 '>
            <div className='flex justify-center flex-col items-center my-auto max-h-3xl md:flex-row-reverse'>
                <Card color="transparent" shadow={false}>
                    <Typography variant="h4" color="blue-gray">
                        Sign in
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Enter your email and password to login
                    </Typography>
                    <form onSubmit={handleOnSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-4 flex flex-col gap-6">
                            <Input name='email' size="lg" label="Email" color='amber' />
                            <Input name='password' type="password" size="lg" label="Password" color='amber' />
                        </div>

                        <Button type='submit' className="mt-6" fullWidth color='purple'>
                            Login
                        </Button>

                        <Button onClick={handleGoogleLogin} className="mt-6" fullWidth color="red">
                            Login with google
                        </Button>

                        <Typography color="Red" className="mt-4 text-center text-red-600 font-normal">
                            {errors}
                        </Typography>

                        <Link to="/signup">
                            <Typography color="gray" className="mt-4 text-center font-normal">
                                Don't have an account?{" "}
                                <a
                                    href="/"
                                    className="font-medium text-purple-500 transition-colors hover:text-deep-purple-700"
                                >
                                    Sign Up
                                </a>
                            </Typography>
                        </Link>
                    </form>
                </Card>
                <div className=''>
                    <Player
                        src='https://assets8.lottiefiles.com/private_files/lf30_kj1v7uim.json'
                        className="player"
                        loop
                        autoplay
                        style={{ height: '400px', width: '400px' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;