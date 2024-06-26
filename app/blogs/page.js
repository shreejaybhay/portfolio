"use client"
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import cheerio from 'cheerio'; // Install cheerio if you haven't already
import Link from 'next/link';

const BlogsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const API_KEY = process.env.NEXT_PUBLIC_BLOGGER_API_KEY;
            const BLOG_ID = process.env.NEXT_PUBLIC_BLOGGER_BLOG_ID;
            const URL = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}`;
            try {
                const response = await axios.get(URL);
                if (response.data && response.data.items) {
                    const items = response.data.items.map(item => {
                        // Parse HTML content to get the first image URL
                        const $ = cheerio.load(item.content);
                        const firstImgUrl = $('div.separator a').attr('href');

                        return {
                            ...item,
                            firstImgUrl: firstImgUrl || 'https://via.placeholder.com/400', // Placeholder if no image found
                        };
                    });
                    setPosts(items);
                }
            } catch (error) {
                console.error('Error fetching blog posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="min-h-screen text-white bg-base-100">
            {/* Hero Section */}
            <div className="relative">
                <img
                    src="https://images.unsplash.com/photo-1620056283414-0a6b2dab3d0c?q=80&w=2107&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="img"
                    className="object-cover object-center w-full h-[400px] lg:h-[500px] sm:h-[350px]"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="flex flex-col items-center justify-center text-center">
                        <h1 className="text-4xl font-bold uppercase lg:text-6xl">Blogs</h1>
                        <p className="mt-2 text-sm lg:text-base">Explore our latest blog posts</p>
                        <div className="text-sm breadcrumbs">
                            <ul className='font-medium uppercase text-slate-200'>
                                <li><a href='/'>Home</a></li>
                                <li><a href='/blogs'>Blogs</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            {/* Blog Posts Section */}
            <div className="min-h-screen text-white bg-base-100">
                {/* Hero Section */}
                {/* ... Your existing hero section code ... */}

                {/* Blog Posts Section */}
                <div className="container px-4 py-12 mx-auto">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
                        {posts.length === 0 ? (
                            <p>Loading...</p>
                        ) : (
                            posts.map((post) => (
                                <Link href={`/blogs/${post.id}`} key={post.id} className="overflow-hidden rounded-lg shadow-lg bg-neutral">
                                    <img
                                        src={post.firstImgUrl}
                                        alt="blog cover"
                                        className="object-cover w-full h-56 sm:h-64"
                                    />
                                    <div className="p-6">
                                        <h2 className="text-xl font-bold text-white">{post.title}</h2>
                                        <div className="mt-2 text-sm text-gray-400">
                                            <p>Published: {new Date(post.published).toLocaleDateString()}</p>
                                            <p>By: {post.author.displayName}</p>
                                        </div>
                                        <div className="mt-4">
                                            <a
                                                href={post.id}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-base-content hover:underline"
                                            >
                                                Read more
                                            </a>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogsPage;
