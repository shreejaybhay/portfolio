import React from 'react'

const Navbar = () => {
    return (
        <div className="fixed top-0 z-50 shadow-lg navbar bg-base-100">
            <div className="flex-1 px-2 lg:flex-none">
                <a href='/' className="text-lg font-bold">Logo</a>
            </div>
            <div className="flex justify-end flex-1 px-2">
                <div className="flex items-stretch gap-2">
                    <div className='items-center hidden gap-2 sm:flex'>
                        <a href='/' className="btn btn-ghost rounded-btn">Home</a>
                        <a className="btn btn-ghost rounded-btn">Blogs</a>
                        <a className="btn btn-ghost rounded-btn">Books</a>
                        <a className="btn btn-ghost rounded-btn">Career</a>
                        <a className="btn btn-ghost rounded-btn">About Us</a>
                    </div>
                    <div className="hidden dropdown dropdown-end sm:inline-block">
                        <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">Others</div>
                        <ul tabIndex={0} className="menu dropdown-content z-[2] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                            <li><a href='/contact-us'>Contact Us</a></li>
                            <li><a>Photo Gallery</a></li>
                            <li><a>Event Update</a></li>
                            <li><a>Awards And Recognition</a></li>
                        </ul>
                    </div>
                    <div className='flex items-center gap-2 sm:hidden'>
                        <a href='/' className="btn btn-ghost rounded-btn">Home</a>
                        <a className="btn btn-ghost rounded-btn">Blogs</a>
                        <a className="btn btn-ghost rounded-btn">Books</a>
                    </div>
                    <div className="w-full dropdown dropdown-end sm:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">All</div>
                        <ul tabIndex={0} className="menu dropdown-content z-[2] p-2 shadow bg-base-100 rounded-box w-64 mt-4">
                            <li><a>Career</a></li>
                            <li><a>About Us</a></li>
                            <li><a href='/contact-us'>Contact Us </a></li>
                            <li><a>Photo Gallery</a></li>
                            <li><a>Event Update</a></li>
                            <li><a>Awards And Recognition</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar