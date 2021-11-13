import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) =>
{
    const { _id, img, name, price, description } = props.product
    return (

        <div class="col">
            <div class="card">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description}</p>
                    <div class="d-flex justify-content-between">
                        <h5 class="card-title mr-auto ">${price}</h5>
                        <Link to={`/product/${_id}`}> <button class="ml-auto">Buy Now</button></Link>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Product;