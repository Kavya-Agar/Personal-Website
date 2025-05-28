import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Blog.css';
import { useState } from 'react';

import id1 from '../assets/d7fd7d343609eca73b744647fafac28e.jpg';
import id2 from '../assets/2c02bb1ba553a863f99489e9028961ae.jpg';

const posts = [
    {
        id: 1,
        title: 'First Entry',
        date: '2025-05-13',
        summary: 'This is the first post on my new blog. Stay tuned for more updates!',
        image: id1,
    },
    {
        id: 2,
        title: 'Second Entry',
        date: '2025-05-14',
        summary: 'This is the second post on the new blog.',
        image: id2,
    }
];

export default function Blog() {
    const [selectedPost, setSelectedPost] = useState(null);

    // Dynamically import all markdown files from a 'posts' folder
    const [postsWithContent, setPostsWithContent] = useState([]);

    React.useEffect(() => {
        // This assumes you have markdown files in src/posts/ named by post id, e.g., 1.md, 2.md, etc.
        async function fetchPostsContent() {
            const loadedPosts = await Promise.all(
                posts.map(async post => {
                    try {
                        // Dynamic import for markdown files (Vite/CRA/Webpack required)
                        const content = await fetch(`/posts/${post.id}.md`).then(res => res.text());
                        return {
                            ...post,
                            content,
                            image: post.image || "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=600&q=80",
                        };
                    } catch {
                        return {
                            ...post,
                            content: `Full content for "${post.title}" not found.`,
                            image: post.image || "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=600&q=80",
                        };
                    }
                })
            );
            setPostsWithContent(loadedPosts);
        }
        fetchPostsContent();
    }, []);

    const sortedPosts = [...postsWithContent].sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <motion.section
            id="blog"
            className="max-w-4xl mx-auto py-16 px-4 md:px-8 pt-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
        >
            <div className="flex flex-col items-start justify-center min-h-screen bg-white px-4">
                <h1 className="page-title">Blog</h1>
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
                            className="blog-image-after"
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
                                    className="blog-image-before"
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
