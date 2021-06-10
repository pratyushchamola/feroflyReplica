import React from 'react';
import { useForm } from 'react-hook-form';

import './styles.css'

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data,r) => {
        try {
            console.log(data);
            r.target.reset();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container contactWrapper" id="contact">
            <div className="contactHeading"><h1>Contact Us</h1></div>

            <div className="contactInfo">
                <p>info@mysite.com</p>
                <p>/</p>
                <p>500 Terry Francois Street, San Francisco, CA 94158</p>
                <p>/</p>
                <p>Tel: 123-456-7890</p>
            </div>

            <div className="contactForm">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="contactName">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Full Name"
                                        {...register("name",{
										required: 'First and last name are required!',
										pattern: {
											value: /^([a-zA-Z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{1,}\s?([a-zA-Z]{1,})?)/i,
											message: 'Invalid First and Last Name!',
										}
									})}
                                    />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="contactEmail">
                                    <input
                                        className="form-control"
                                        type="email"
                                        placeholder='Email'
                                        // name='email'
                                        {...register("email",{
                                            required: 'Email address is required!',
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: 'Invalid Email Address!',
                                            },
                                        })}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="contactSubject">
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Subject"
                                        {...register("subject",{
										required: 'A Subject is required!',
									    })}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">

                                <div className="contactMessage">
                                        <textarea
                                            className='form-control'
                                            type='text'
                                            placeholder='Brief Message'
                                            // name='description'
                                            {...register("description",{
                                                required: 'A Brief Message is required!',
                                                minLength: {
                                                    value: 10,
                                                    message:
                                                        'Your message must be at least 10 characters!',
                                                },
                                            })}
                                        ></textarea> 
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12">

                                <div className="contactSend">
                                    <button
                                        className='btn-main-offer contact-btn'
                                        type='submit'
                                    >
                                        send
                                    </button>
                                </div>
                            </div>


                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
