import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';

const MyOrderAlls = () =>
{
    const { user, admin } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() =>
    {
        const url = `https://thawing-basin-76663.herokuapp.com/orders?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))


    }, [orders])

    return (

        <div class="d-flex mb-5">
            <div class="col-md-9">
                <h2>My All Orders</h2>
                <div class="container">
                    <div class="row row-cols-1 row-cols-md-3 g-4">

                        {
                            orders.map(order => <MyOrder
                                key={order._id}
                                order={order}

                            ></MyOrder>)
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

export default MyOrderAlls;



