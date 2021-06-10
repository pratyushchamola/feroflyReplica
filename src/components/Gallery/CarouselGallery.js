import React, {useState, useEffect} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import gallery1 from '../../images/gallery1.webp';
import gallery2 from '../../images/gallery2.webp';
import gallery3 from '../../images/gallery3.webp';
import gallery4 from '../../images/gallery4.webp';
import gallery5 from '../../images/gallery5.webp';
import gallery6 from '../../images/gallery6.webp';

import './styles.css'


const CarouselGallery = () => {
    
    return (
        <div className="container">

            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={2000}
            >

                    <div className="row imgWrapper">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <img src={gallery1} alt="home-test" className="imgDimension" />
                        </div>
                    </div>

                        <div className="row imgWrapper">

                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <img src={gallery2} alt="home-test" className="imgDimension" />
                        </div>
                        </div>

                        <div className="row imgWrapper">

                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <img src={gallery3} alt="home-test" className="imgDimension" />
                        </div>
                        </div>

                    <div className="row imgWrapper">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <img src={gallery4} alt="home-test" className="imgDimension" />
                        </div>
                    </div>

                        <div className="row imgWrapper">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <img src={gallery5} alt="home-test" className="imgDimension" />
                            </div>
                        </div>

                        <div className="row imgWrapper">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <img src={gallery6} alt="home-test" className="imgDimension" />
                            </div>
                        </div>


                {/* <>
                            <img src={home} alt="Mayank" />
                            <div className='myCarousel'>
                                <h3>Mayank</h3>
                                <p>dseheheh hugugugug</p>
                            </div>
                </> */}
            </Carousel>
        </div>
    )
}

export default CarouselGallery
