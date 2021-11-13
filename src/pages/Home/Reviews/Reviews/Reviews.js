import React, { useEffect, useState } from 'react';
import Review from "../Review/Review"

const Reviews = () =>
{

    const [reviews, setReviews] = useState([]);
    useEffect(() =>
    {

        fetch('https://thawing-basin-76663.herokuapp.com/reviewSite')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <>
            <h3 class="my-5">Reviews All</h3>
            <div class="row row-cols-1 row-cols-md-3 g-4" >
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }




            </div>
        </>
    );
};

export default Reviews;