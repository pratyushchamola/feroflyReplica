import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {FaQuoteLeft} from 'react-icons/fa';

import './styles.css';

const GuestReview = () => {
    return (
            <div className="container">

                <div className="backgroundReviewImage">

                    <div className="reviewCard">
                        <div className="reviewHeading">
                            <h3>Guest Review</h3>
                        </div>

                        <div className="quoteIcon">
                            <p><FaQuoteLeft className="mx-3" /></p>
                    </div>

                        <Carousel
                        showArrows={true}
                        infiniteLoop={true}
                        showThumbs={false}
                        showStatus={false}
                        autoPlay={true}
                        interval={3000}
                        >
                                <div className="reviewCardWrapper">


                                    <div className="peopleReview">
                                        <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                                    </div>

                                </div>

                                <div className="reviewCardWrapper">

                                    <div className="peopleReview">
                                        <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                                    </div>

                                </div>

                                <div className="reviewCardWrapper">
                                    <div className="peopleReview">
                                        <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                                    </div>

                                </div>
                        </Carousel>
                    </div>
                </div>
            </div>
    )
}

export default GuestReview
