import React from 'react';

import { useForm } from "react-hook-form";
import { NavLink, useHistory } from 'react-router-dom';
import "./Register.css"
import useAuth from '../../../hooks/useAuth';
const Register = () =>
{
    const { registerUser } = useAuth();
    const history = useHistory();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>
    {

        registerUser(data.name, data.email, data.password, history)
        reset()
    };

    return (
        <div class="register mb">
            <form onSubmit={handleSubmit(onSubmit)}>
                Please Your Name <input {...register("name", { required: true, maxLength: 20 })} />
                Please Your Email<input type="email" {...register("email", { required: true })} />
                Please Your Password <input type="password" {...register("password")} />
                <input type="submit" />
            </form>
            <NavLink
                style={{ textDecoration: 'none' }}
                to="/login">
                <h6>Already Registered? Please Login</h6>
            </NavLink>
        </div>
    );
};

export default Register;





