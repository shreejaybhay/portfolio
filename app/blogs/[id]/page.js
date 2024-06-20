"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css';
import 'daisyui';
import cheerio from 'cheerio';
import sanitizeHtml from 'sanitize-html'; // Ensure sanitize-html is installed

const BlogDetailPage = () => {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const pathParts = window.location.pathname.split('/');
        const postId = pathParts[pathParts.length - 1];

        const fetchPost = async () => {
            const API_KEY = process.env.NEXT_PUBLIC_BLOGGER_API_KEY;
            const BLOG_ID = process.env.NEXT_PUBLIC_BLOGGER_BLOG_ID;
            const URL = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts/${postId}?key=${API_KEY}`;

            try {
                const response = await axios.get(URL);
                const item = response.data;

                // Parse HTML content to get the first image URL if needed
                const $ = cheerio.load(item.content);
                const firstImgUrl = $('div.separator a').attr('href') || 'https://via.placeholder.com/1200x600';

                // Sanitize HTML content to retain all inline styles and necessary attributes
                const sanitizeContent = (html) => {
                    return sanitizeHtml(html, {
                        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
                        allowedAttributes: {
                            '*': ['style', 'class', 'id', 'src', 'href', 'alt']
                        },
                        transformTags: {
                            'a': sanitizeHtml.simpleTransform('a', { 'target': '_blank', 'rel': 'noopener noreferrer' })
                        }
                    });
                };

                const sanitizedContent = sanitizeContent(item.content);

                // Append the blog link to the sanitized content
                const blogLink = `<p><a href="${item.url}" target="_blank" rel="noopener noreferrer">Read more on our blog</a></p>`;
                const finalContent = sanitizedContent + blogLink;

                const postDetails = {
                    title: item.title,
                    author: {
                        displayName: item.author.displayName,
                        image: item.author.image ? item.author.image.url : 'https://via.placeholder.com/150'
                    },
                    publishedDate: new Date(item.published).toLocaleDateString(),
                    featuredImg: firstImgUrl,
                    content: finalContent
                };

                setPost(postDetails);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching blog post:', error);
                setError('Failed to load blog post');
                setLoading(false);
            }
        };

        fetchPost();
    }, []);

    if (loading) {
        return <p className="text-gray-100">Loading...</p>;
    }

    if (error) {
        return <p className="text-gray-100">{error}</p>;
    }

    return (
        <div className="w-full">
            <div className="min-h-screen p-4 text-gray-100 bg-gray-900">
                <div className="max-w-4xl mx-auto overflow-hidden bg-gray-800 rounded-lg shadow-lg">
                    <img src={post.featuredImg} alt="Featured" className="object-cover w-full h-64" />
                    <div className="p-6">
                        <h1 className="mb-4 text-4xl font-bold text-gray-200 sm:text-5xl md:text-6xl">{post.title}</h1>
                        <div className="flex items-center mb-6">
                            <div className="mr-4">
                                <img className="w-12 h-12 rounded-full" src={post.author.image} alt="Author" />
                            </div>
                            <div>
                                <p className="font-semibold text-gray-200">{post.author.displayName}</p>
                                <p className="text-gray-400">{post.publishedDate}</p>
                            </div>
                        </div>
                        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetailPage;
