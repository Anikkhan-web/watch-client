import React from 'react';
import { Link } from 'react-router-dom';


const ShowOrder = (props) =>
{

    const { _id, img, name, price, email } = props.allOrder



    const handleDelete = id =>
    {
        const url = `https://thawing-basin-76663.herokuapp.com/showOrder/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data =>
            {
                console.log(data);
                if (data.deletedCount)
                {
                    alert('deleted');
                    window.location.reload()



                }

            })

    }
    return (

        <div class="col">
            <div class="card">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>

                    <h5 class="card-title mr-auto ">email:{email}</h5>
                    <div class="d-flex justify-content-between">
                        <h5 class="card-title mr-auto ">${price}</h5>

                        <button onClick={() => handleDelete(_id)} class="ml-auto">Delete Now</button>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default ShowOrder;

