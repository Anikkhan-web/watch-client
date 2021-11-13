import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from "../../../hooks/useAuth"
const Navigation = () =>
{

    const { user, logout } = useAuth();
    return (
        <nav class="navbar navbar-expand-lg navbar-light  bg-secondary">
            <div class="container-fluid">
                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/"><h3 class=" text-light">World watch</h3></NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NavLink style={isActive => ({
                                color: isActive ? "white" : "gray"
                            })}
                                to="/home"><h5 class="nav-link" >Home</h5></NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink style={isActive => ({
                                color: isActive ? "white" : "gray"
                            })}
                                to="/products"><h5 class="nav-link" >Products</h5></NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink style={isActive => ({
                                color: isActive ? "white" : "gray"
                            })}
                                to="/review"><h5 class="nav-link" >Review</h5></NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink style={isActive => ({
                                color: isActive ? "white" : "gray"
                            })}
                                to="/about"><h5 class="nav-link" >Contact</h5></NavLink>
                        </li>
                    </ul>
                    <span class="navbar-text d-flex">

                        {user?.email ? <div class="d-flex ">
                            <h3 class="me-2">{user.displayName}</h3>
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard"><button color="inherit">Dashboard</button></NavLink>

                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/"><button class="mx-2" color="inherit" onClick={logout}>Logout</button></NavLink>

                        </div> :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login"><button color="inherit">Login</button></NavLink>
                        }




                    </span>
                </div>
            </div>
        </nav >
    );
};

export default Navigation;