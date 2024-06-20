"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import books from '../data/books.data';

const BookDetailPage = () => {
    const [book, setBook] = useState(null);

    useEffect(() => {
        const path = window.location.pathname;
        const id = path.split('/books/')[1]; // Extracting book id from URL path

        // Find the book with the corresponding id
        const foundBook = books.find(book => book.id === id);

        if (foundBook) {
            setBook(foundBook);
        } else {
            setBook(null); // Handle case where book with id is not found
        }
    }, []);

    if (!book) {
        return <p>Book not found</p>;
    }

    return (
        <div className="min-h-screen p-4 text-gray-100 bg-gray-900">
        
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col p-4 mt-20 bg-gray-800 rounded-lg md:p-10 md:flex-row">
                    {/* Left side - Book cover */}
                    <div className="flex justify-center mb-4 md:w-1/2 md:mb-0">
                        <img src={book.coverImage} alt={book.title} className="object-cover w-full max-w-md rounded-lg shadow-lg" />
                    </div>
                    {/* Right side - Book details */}
                    <div className=" md:w-1/2 md:pl-8">
                        <h1 className="mb-4 text-3xl font-bold text-gray-200">{book.title}</h1>
                        <p className="mb-2 text-gray-400">Author: {book.author}</p>
                        <p className="text-gray-300">{book.summary}</p>
                        <div className="mt-4">
                            <a
                                href={`${book.buy}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Buy on Amazon
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetailPage;