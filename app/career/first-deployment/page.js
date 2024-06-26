/* eslint-disable @next/next/no-img-element */
import React from 'react'

const page = () => {
    return (
        <div>
            <div className="relative">
                <img
                    src="https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="img"
                    className="object-cover object-top w-full h-[400px] lg:h-[500px] sm:h-[350px]"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="flex flex-col items-center justify-center text-center">
                        <h1 className="text-4xl font-bold uppercase text-slate-200 lg:text-6xl">First Deployment</h1>
                        <p className="mt-2 text-sm lg:text-base text-slate-200">Explore our latest books posts</p>
                        <div className="text-sm breadcrumbs">
                            <ul className='font-medium uppercase text-slate-200'>
                                <li><a href='/'>Home</a></li>
                                <li><a href='/career'>Carrer</a></li>
                                <li><a href='/career/first-deployment'>First Deployment</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page