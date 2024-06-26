/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

const Career = () => {
    return (
        <div className="min-h-screen p-6 text-white bg-base-100">
            <h1 className="mb-8 text-4xl font-bold text-center">Career</h1>
            <div className="flex flex-col space-y-6">
                <Link href='/career/enlistment-and-training' className="w-full max-w-3xl mx-auto shadow-xl cursor-pointer bg-neutral card">
                    <figure>
                        <img src="https://images.unsplash.com/photo-1605092262243-28c74cfc74c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Enlistment and Training" className="object-cover w-full h-64" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Enlistment and Training</h2>
                        <p>Joined the Indian Army in 2005, underwent rigorous training at the Indian Military Academy, Dehradun.</p>
                    </div>
                </Link>
                <Link href='/career/first-deployment' className="w-full max-w-3xl mx-auto shadow-xl cursor-pointer bg-neutral card">
                    <figure>
                        <img src="https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="First Deployment" className="object-cover w-full h-64" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">First Deployment</h2>
                        <p>Deployed to Jammu & Kashmir in 2006, participated in numerous counter-insurgency operations.</p>
                    </div>
                </Link>
                <Link href='/career/promotions-and-recognitions' className="w-full max-w-3xl mx-auto shadow-xl cursor-pointer bg-neutral card">
                    <figure>
                        <img src="https://images.unsplash.com/photo-1521727215876-9bfe173be82f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Promotions and Recognitions" className="object-cover w-full h-64" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Promotions and Recognitions</h2>
                        <p>Promoted to Captain in 2010, received the Sena Medal for gallantry in 2012.</p>
                    </div>
                </Link>
                <Link href='/career/international-missions' className="w-full max-w-3xl mx-auto shadow-xl cursor-pointer bg-neutral card">
                    <figure>
                        <img src="https://images.unsplash.com/photo-1620057285999-c0fb5f8161ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="International Missions" className="object-cover w-full h-64" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">International Missions</h2>
                        <p>Served in the United Nations peacekeeping missions in 2014, contributing to global peace efforts.</p>
                    </div>
                </Link>
                <Link href='/career/current-role' className="w-full max-w-3xl mx-auto shadow-xl cursor-pointer bg-neutral card">
                    <figure>
                        <img src="https://images.unsplash.com/photo-1491555103944-7c647fd857e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Current Role" className="object-cover w-full h-64" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Current Role</h2>
                        <p>Currently stationed at the Army HQ in New Delhi, overseeing strategic planning and operations.</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Career;
