import React, { useEffect, useState } from 'react';

import Product from '../Product/Product';

const AllProducts = () =>
{
    const [products, setProducts] = useState([]);
    useEffect(() =>
    {
        fetch('https://thawing-basin-76663.herokuapp.com/addOrder')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])
    return (
        <div class="container">
            <h2 class="my-2">Products</h2>


            <div class="row row-cols-1 row-cols-md-3 g-4">


                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}

                    ></Product>)
                }

            </div>

        </div>
    );
};

export default AllProducts;