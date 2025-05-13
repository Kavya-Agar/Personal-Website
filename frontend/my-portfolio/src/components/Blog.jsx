import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Blog.css';
import { useState } from 'react';

const posts = [
    {
        id: 1,
        title: 'First Entry',
        date: '2025-05-13',
        summary: 'This is the first post on my new blog. Stay tuned for more updates!',
    },
    {
        id: 2,
        title: 'React Tips and Tricks',
        date: '2024-06-05',
        summary: 'A collection of useful tips for working with React.',
    },
    {
        id: 3,
        title: 'Understanding JavaScript Closures',
        date: '2024-06-10',
        summary: 'A deep dive into closures in JavaScript and how they work.',
    }
];

export default function Blog() {
    const [selectedPost, setSelectedPost] = useState(null);

    // Add a 'content' field to each post for demonstration
    const postsWithContent = posts.map(post => ({
        ...post,
        content: post.content || `Full content for "${post.title}". Replace this with your actual blog post content.`,
        // Example image for demonstration; replace with your own images per post
        image: post.image || "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=600&q=80",
    }));

    const sortedPosts = [...postsWithContent].sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <motion.section
            id="blog"
            className="max-w-4xl mx-auto py-16 px-4 md:px-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
        >
            <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
                <h1 className="title">Blog</h1>
                <p className="blurb">Here's a sneak peek into my life!</p>
                {selectedPost ? (
                    <div className="w-full max-w-2xl bg-gray-50 p-6 rounded shadow">
                        <button
                            className="mb-4 text-blue-600 hover:underline"
                            onClick={() => setSelectedPost(null)}
                        >
                            ← Back to all posts
                        </button>
                        <img
                            src={selectedPost.image}
                            alt={selectedPost.title}
                            className="w-full h-64 object-cover rounded-lg mb-6"
                        />
                        <h2 className="text-2xl font-semibold">{selectedPost.title}</h2>
                        <small className="text-gray-500">{selectedPost.date}</small>
                        <p className="mt-4 text-gray-700 whitespace-pre-line">{selectedPost.content}</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                        {sortedPosts.map(post => (
                            <div
                                key={post.id}
                                className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer flex flex-col"
                                onClick={() => setSelectedPost(post)}
                            >
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-56 object-cover rounded-t-lg"
                                />
                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h2 className="italic text-2xl font-light mb-2">{post.title}</h2>
                                        <p className="text-gray-700">{post.summary}</p>
                                    </div>
                                    <small className="text-gray-400 mt-4">{post.date}</small>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </motion.section>
    );
}
