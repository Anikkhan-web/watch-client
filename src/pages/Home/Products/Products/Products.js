import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () =>
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
                    products.slice(1, 7).map(product => <Product
                        key={product.id}
                        product={product}

                    ></Product>)
                }

            </div>
            <Link to="/allProducts"><div class=" my-2 col-md-1 "><button>See Products</button></div></Link>
        </div>
    );
};

export default Products;