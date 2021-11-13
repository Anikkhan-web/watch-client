import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PayLink = () =>
{
    const { admin } = useAuth();
    return (

        <div class="d-flex mb-5">
            <div class="col-md-9">
                <h1>Comming Soon Payment System</h1>
                <Link to="/orders">     <button>Check Your Order</button> </Link>
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

export default PayLink;