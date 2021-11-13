import React from 'react';
import Rating from 'react-rating';

const Review = (props) =>
{
    const { name, description, price } = props.review
    return (


        <div class="col">
            <div class="card">
                <div class="card-body">

                    <p class="card-text">{description}</p>
                    <h5 class="card-title">{name}</h5>
                    <Rating
                        initialRating={price}
                        readonly
                    />
                </div>
            </div>
        </div>


    );
};

export default Review;