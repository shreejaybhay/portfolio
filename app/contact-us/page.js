"use client"
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { MdEmail } from "react-icons/md";


const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitting, setSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const response = await fetch('/api/contact-us', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const { success, error } = await response.json();
            if (success) {
                alert('Message sent successfully');
                setFormData({ name: '', email: '', message: '' });
            } else {
                alert(error);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while submitting the form.');
        } finally {
            setSubmitting(false);
        }
    };
    return (
        <div>
            <div className="lg:h-[500px] h-[300px] sm:h-[350px] w-full relative">
                <div className='absolute top-0 left-0 w-full h-full bg-black/20'></div>
                <div className='absolute inset-0 flex flex-col items-center justify-center w-full h-full'>
                    <h1 className='text-4xl font-bold uppercase text-slate-200'>Contacts</h1>
                    <div className="text-sm breadcrumbs">
                        <ul className='font-medium uppercase text-slate-200'>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/contact-us'>Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <img
                    src="https://militarology.ancorathemes.com/wp-content/uploads/2017/09/slider_1.jpg"
                    alt="img"
                    className="object-cover object-right-top w-full h-full"
                />
            </div>

            <div className='flex flex-col items-center justify-center p-5'>
                <div className='mt-20 text-center'>
                    <h1 className='font-medium'>FIND US</h1>
                    <h1 className='mt-3 text-3xl font-medium'>CONTACT INFO</h1>
                </div>
                <div className='flex-col mt-20 sm:items-center sm:flex sm:flex-col md:flex md:flex-col lg:flex-row'>
                    <a href='tel:+918828620892' className='flex flex-col items-center justify-center gap-5 px-20 py-10 border cursor-pointer border-slate-400' >
                        <MdOutlinePhoneCallback size={24} />
                        +91 8769457283
                    </a>
                    <a href='https://maps.app.goo.gl/dFJo9DKpgmnPUEBP8' target="_blank" className='flex-col px-20 py-10 border border-slate-400 w-[292px] flex items-center justify-center gap-5 text-center'>
                        <FaLocationDot size={24} />

                        <h1 className='uppercase'>44 SHIRLEY AVE.
                            WEST CHICAGO, IL 60185</h1>
                    </a>
                    <a href='mailto:shreejaybhay00@gmail.com' className='flex flex-col items-center justify-center gap-5 px-20 py-10 border border-slate-400 w-[292px]'>
                        <MdEmail size={24} />
                        <h1>example26@gmail.com</h1>
                    </a>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center w-full p-4 lg:grid-cols-2 lg:grid sm:p-0'>
                <div className='w-full'>
                    <div className="flex items-center justify-center w-full my-20 sm:pr-10 lg:flex lg:items-center lg:justify-end">
                        <div className=" w-[500px] p-6 shadow-lg bg-base-200 rounded-xl ">
                            <h2 className="mb-4 text-2xl font-semibold">Contact Us</h2>
                            <form onSubmit={null}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block mb-1">Name</label>
                                    <input
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full input input-bordered"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block mb-1">Email</label>
                                    <input
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full input input-bordered"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="block mb-1">Message</label>
                                    <textarea
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        id="message"
                                        name="message"
                                        className="w-full h-32 input input-bordered"
                                        placeholder="Type your message here"
                                    ></textarea>
                                </div>
                                <div className="flex justify-end w-full">
                                    <button onClick={handleSubmit} type='submit' className="w-full btn btn-primary">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex items-center sm:pl-10'>
                    <iframe className='rounded-xl w-[340px] h-[500px] sm:w-[500px] sm:-[506px]' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d60302.28348820761!2d72.9448448!3d19.156172799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1718137119586!5m2!1sen!2sin" width="500" height="506" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

            </div>
        </div>
    );
};

export default ContactPage;
