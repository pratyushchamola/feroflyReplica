import React from 'react';
import {MdFreeBreakfast, MdLocalDining} from 'react-icons/md';
import {GiParkBench, GiHanger} from 'react-icons/gi'
import {FaSwimmingPool, FaWifi} from 'react-icons/fa'

import "./styles.css"

const Services = () => {
    return (
        <div className="container serviceMainWrapper" id="services">
            <div className="serviceHeading">
                <h3>Our Services</h3>
            </div>
            <div className="servicesWrapper">
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="iconAndText">
                            <div className="serviceIcon"><MdFreeBreakfast className="mx-3" /></div>
                            <div className="iconText">
                                <p>Breakfast</p>
                            </div>
                        </div>
                        <div className="serviceText">
                            <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="iconAndText">
                            <div className="serviceIcon"><GiParkBench className="mx-3" /></div>
                            <div className="iconText">
                                <p>Garden</p>
                            </div>
                        </div>
                        <div className="serviceText">
                            <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="iconAndText">
                            <div className="serviceIcon"><FaSwimmingPool className="mx-3" /></div>
                            <div className="iconText">
                                <p>Pool</p>
                            </div>
                        </div>
                        <div className="serviceText">
                            <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="iconAndText">
                            <div className="serviceIcon"><FaWifi className="mx-3" /></div>
                            <div className="iconText">
                                <p>Free Wifi</p>
                            </div>
                        </div>
                        <div className="serviceText">
                            <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="iconAndText">
                            <div className="serviceIcon"><GiHanger className="mx-3" /></div>
                            <div className="iconText">
                                <p>Daily Housekeeping</p>
                            </div>
                        </div>
                        <div className="serviceText">
                            <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="iconAndText">
                            <div className="serviceIcon"><MdLocalDining className="mx-3" /></div>
                            <div className="iconText">
                                <p>In-Room Dining Service</p>
                            </div>
                        </div>
                        <div className="serviceText">
                            <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services
