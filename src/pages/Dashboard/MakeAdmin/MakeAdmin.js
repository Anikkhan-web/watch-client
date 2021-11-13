import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
const MakeAdmin = () =>
{
    const { admin } = useAuth();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>
    {
        const user = { data }
        fetch('https://thawing-basin-76663.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data =>
            {
                if (data.modifiedCount)
                {
                    console.log(data);
                    reset()



                }
            })
    };
    return (

        <div class="d-flex mb-5">
            <div class="col-md-9">
                <h2>make admin</h2>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input type="email" {...register("email", { required: true })} />

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
            </div >


        </div >
    );
};

export default MakeAdmin;


