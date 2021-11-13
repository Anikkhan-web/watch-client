import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

import ShowOrder from '../ShowOrder/ShowOrder';

const ShowAllOrders = () =>
{
    const { admin } = useAuth();
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() =>
    {

        fetch("https://thawing-basin-76663.herokuapp.com/showOrder")
            .then(res => res.json())
            .then(data => setAllOrders(data))


    }, [allOrders])

    return (

        <div class="d-flex mb-5">
            <div class="col-md-9">
                <h2> All orders</h2>
                <div class="container">

                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        {
                            allOrders.map(allOrder => <ShowOrder
                                key={allOrder._id}
                                allOrder={allOrder}

                            ></ShowOrder>)
                        }

                    </div>

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

export default ShowAllOrders;