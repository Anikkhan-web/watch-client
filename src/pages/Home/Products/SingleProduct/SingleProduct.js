import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useForm, Controller } from "react-hook-form";

import useAuth from "../../../../hooks/useAuth"
import { Link } from 'react-router-dom';

const Booking = () =>
{
    const { user } = useAuth()
    const { productId } = useParams();
    const [singleProduct, setSingleProduct] = useState({});
    // const [orderInfo, setOrderInfo] = useState({})
    let initialInfo = { name: singleProduct.name, email: user.email, img: singleProduct.img, description: singleProduct.description, price: singleProduct.price }


    const orderSubmit = e =>
    {
        const productorder = {

            ...initialInfo

        }



        axios.post(`https://thawing-basin-76663.herokuapp.com/orders`, productorder)
            .then(res =>
            {
                if (res.data.insertedId)
                {
                    alert('added successfully');


                }
            })

        e.preventDefault();
    };

    useEffect(() =>
    {

        fetch(`https://thawing-basin-76663.herokuapp.com/addOrder/${productId}`)
            .then(res => res.json())
            .then(data => setSingleProduct(data))

    }, [])
    return (
        <div class="d-flex">

            <div class="col-md-1"></div>
            <div class="card col-md-4" style={{ width: "400px" }}>
                <img src={singleProduct.img
                } class="card-img-top" alt="..." />

            </div>
            <div class="col-md-1"></div>
            <div class="col-md-6">



                <form onSubmit={orderSubmit}>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input disabled type="email" class="form-control " id="exampleFormControlInput1" value={user.email} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <input disabled type="email" class="form-control" id="exampleFormControlInput1" value={singleProduct.name} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">price</label>
                        <input disabled type="email" class="form-control" id="exampleFormControlInput1" value={singleProduct.price} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                        <textarea disabled class="form-control" value={singleProduct.description} id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" >Order</button>
                </form>

            </div>
        </div >
    );
};

export default Booking;