import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.css'

const Home = () => {
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [adults, setAdults] = useState(null);
    const [kids, setKids] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            console.log(checkInDate, checkOutDate, adults, kids);
            setCheckInDate(null);
            setCheckOutDate(null);
            setAdults(null);
            setKids(null);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="header-wraper" id="home">
            <div className="container">
                <div className="top-text">
                    <p className="bolderText">Ferofly</p>
                    <p className="bottomText">Magnify your Journey</p>
                </div>
                <div className="backgroundImage"></div>
                <div className="rowWrapper">
                    <form onSubmit= {(e) => handleSubmit(e)}>
                        <div className="row inputModify">

                            <div className="dateRoute col-md-6 col-lg-3 col-sm-12">
                                <div className="dateWrapper">
                                    <div className="dateText">Check In</div>
                                    <DatePicker selected={checkInDate} onChange={(date)=> setCheckInDate(date)} />
                                </div>
                            </div>

                            <div className="dateRoute col-md-6 col-lg-3 col-sm-12">
                                <div className="dateWrapper">
                                    <div className="dateText">Check Out</div>
                                    <DatePicker selected={checkOutDate} onChange={(date)=> setCheckOutDate(date)} />
                                </div>
                            </div>

                            <div className="dateRoute col-md-6 col-lg-2 col-sm-12">
                                <div className="dateWrapper">
                                    <div className="dateText">Adults</div>
                                    <div class="input-group">
                                        <input type="text" onChange={(e) => setAdults(e.target.value)}  />
                                    </div>
                                </div>
                            </div>

                            <div className="dateRoute col-md-6 col-lg-2 col-sm-12">
                                <div className="dateWrapper">
                                    <div className="dateText">Kids</div>
                                    <div class="input-group">
                                        <input type="text" onChange={(e) => setKids(e.target.value)}  />
                                    </div>
                                </div>
                            </div>

                            <div className="dateRoute col-md-12 col-lg-2 col-sm-12 col-xs-12">
                                <div className="dateWrapper">
                                    {/* <div className="dateText">Kids</div> */}
                                    <div class="input-group">
                                        {/* <input type="text" class="form-control" /> */}
                                        <button type="submit" className="submitButton">Submit</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Home
