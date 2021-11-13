import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import useAuth from '../../../hooks/useAuth';
const MakeAdmin = () =>
{
    const { admin } = useAuth();
    const [email, setEmail] = useState('');

    const handleOnBlur = e =>
    {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e =>
    {
        const user = { email }
        fetch('http://localhost:5000/users/admin', {
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

                    alert('Admin Added');
                    window.location.reload()



                }
            })


        e.preventDefault();

    }
    return (

        <div class="d-flex mb-5">
            <div class="col-md-9">
                <h2>make admin</h2>
                <div>

                    <form onSubmit={handleAdminSubmit}>

                        <input

                            type="email"

                            onBlur={handleOnBlur}
                        />
                        <button type="submit" variant="contained">Make Admin</button>

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






