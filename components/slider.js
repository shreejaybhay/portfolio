"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation'; // Import useRouter from next/router

const slides = [
    {
        id: 1,
        imageSrc: 'https://militarology.ancorathemes.com/wp-content/uploads/2017/09/slider_1.jpg',
        title: 'YOU HAVE A CALLING.',
        description: 'WE HAVE AN ANSWER',
        button: 'GET STARTED'
    },
    {
        id: 2,
        imageSrc: 'https://militarology.ancorathemes.com/wp-content/uploads/2017/09/slider_2.jpg',
        title: 'THE MILITARY',
        description: 'CAN HELP YOU FULFILL YOUR PASSION',
        button: 'LEARN MORE'
    },
    {
        id: 3,
        imageSrc: 'https://militarology.ancorathemes.com/wp-content/uploads/2017/09/slider_3.jpg',
        title: 'DISCOVER THE WIDE RANGE OF OPPORTUNITIES',
        description: 'The military offers a wide range.',
        button: 'SEARCH ROLES'
    },
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const router = useRouter(); // Use useRouter instead of next/navigation

    useEffect(() => {
        const timer = setTimeout(() => {
            const nextIndex = (currentSlide + 1) % slides.length;
            setCurrentSlide(nextIndex);
        }, 5000); // Change slide after 5 seconds

        return () => clearTimeout(timer);
    }, [currentSlide]);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    const handleButtonClick = () => {
        if (slides[currentSlide].button === 'GET STARTED') {
            router.push('/contact-us'); // Navigate to Contact Us page
        }
    };

    return (
        <div className='relative h-screen overflow-hidden'>
            {slides.map((slide, index) => (
                <motion.div
                    className='flex items-center justify-center'
                    key={slide.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: currentSlide === index ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: currentSlide === index ? 1 : 0,
                    }}
                >
                    <motion.img
                        initial={{ scale: 1.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1, type: 'spring', stiffness: 50 }}
                        src={slide.imageSrc}
                        alt={slide.title}
                        className='object-cover w-full h-full'
                    />
                    <div className='absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full text-white bg-black bg-opacity-40'>
                        <h2 className='mb-2 text-2xl font-semibold text-center md:text-6xl'>{slide.title}</h2>
                        <p className='text-lg md:text-xl'>{slide.description}</p>
                        <div className='mt-4'>
                            <button className='transition duration-300 bg-[#1D232A] btn btn-wide' onClick={handleButtonClick}>
                                {slide.button}
                            </button>
                        </div>
                    </div>
                </motion.div>
            ))}
            <button onClick={prevSlide} style={{ position: 'absolute', top: '50%', left: '20px', zIndex: 2 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" style={{ fill: 'rgba(255, 255, 255, 1)' }} />
                </svg>
            </button>
            <button onClick={nextSlide} style={{ position: 'absolute', top: '50%', right: '20px', zIndex: 2 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" style={{ fill: 'rgba(255, 255, 255, 1)' }} />
                </svg>

            </button>
        </div>
    );
};

export default Slider;
