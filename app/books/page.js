"use client"
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import books from './data/books.data';

const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
        return text;
    }
    return text.substr(0, maxLength) + '...';
};

const BooksPage = () => {
    return (
        <div className="min-h-screen text-gray-100 bg-gray-900">
            <div className="relative">
                <img
                    src="https://images.pexels.com/photos/3747465/pexels-photo-3747465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="img"
                    className="object-cover object-center w-full h-[400px] lg:h-[500px] sm:h-[350px]"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold uppercase lg:text-6xl">Books</h1>
                        <p className="mt-2 text-sm lg:text-base">Explore our latest books posts</p>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl p-4 mx-auto">
                <div className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3">
                    {books.map((book) => (
                        <Link key={book.id} href={`/books/${book.id}`}>
                            <div className="block h-full p-4 transition bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700">
                                <img src={book.coverImage} alt={book.title} className="object-cover w-full mb-4 rounded" />
                                <h1 className="mb-2 text-xl font-semibold text-gray-200">{book.title}</h1>
                                <p className="mb-2 text-gray-400">by {book.author}</p>
                                <p className="text-gray-300">{truncateText(book.summary, 150)}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BooksPage;
