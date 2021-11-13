import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import "./AddProduct.css"
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';

const AddProduct = () =>
{
    const { admin } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>
    {


        axios.post(`https://thawing-basin-76663.herokuapp.com/addOrder`, data)
            .then(res =>
            {
                if (res.data.insertedId)
                {
                    alert('added successfully');
                    reset();
                }
            })
    }



    return (


        <div class="d-flex mb-5" >
            <div class="col-md-9">
                <div class="add-product">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                        <textarea {...register("description")} placeholder="Description" />

                        <input className='mb' type="number" {...register("price")} placeholder="Price" />
                        <input {...register("img")} placeholder="image url" />
                        <input type="submit" />
                    </form>
                </div>

            </div>
            <div class="col-md-3 border  border-left ">

                <ul class="list-group ">
                    <li class="list-group-item active">Dashboard</li>
                    {!admin && <div>
                        <Link to="/paylink">   <li class="list-group-item">Pay Link</li>   </Link>
                        <Link to="/orders">   <li class="list-group-item">My orders Link</li>   </Link>
                        <Link to="/reviewSite">   <li class="list-group-item">Review</li>   </Link>
                    </div>}
                    {
                        admin && <div>
                            <Link to="/adminMake">   <li class="list-group-item">Make Admin</li>   </Link>
                            <Link to="/addProduct">   <li class="list-group-item">Add Product</li>   </Link>
                            <Link to="/showOrder">   <li class="list-group-item">Show All Order</li>   </Link>

                        </div>
                    }


                </ul>
            </div>

        </div >
    );
};

export default AddProduct;