// import React, { useState } from 'react';
import { useLocation, useHistory, NavLink } from 'react-router-dom';
import useAuth from "../../../hooks/useAuth"
import { useForm } from "react-hook-form";

const Login = () =>
{


    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();




    const { registerUser } = useAuth();

    const { register, handleSubmit } = useForm();
    const onSubmit = data =>
    {
        loginUser(data.email, data.password, location, history);

    };




    const handleGoogleSignIn = () =>
    {
        signInWithGoogle(location, history)
    }
    return (
        <div>
            <div class="register mb">
                <form onSubmit={handleSubmit(onSubmit)}>

                    Please Your Email<input type="email" {...register("email", { required: true })} />
                    Please Your Password <input type="password" {...register("password")} />
                    <input type="submit" />
                </form>
                <NavLink
                    style={{ textDecoration: 'none' }}
                    to="/register">
                    <h6>New User? Please Register</h6>
                </NavLink>
                {isLoading && <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>}
            </div>

            <p>------------------------------------</p>
            <button onClick={handleGoogleSignIn}>Google Sign In</button>

        </div >
    );
};

export default Login;