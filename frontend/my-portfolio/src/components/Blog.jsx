import React from 'react';

const posts = [
    {
        id: 1,
        title: 'Welcome to My Blog',
        date: '2024-06-01',
        summary: 'This is the first post on my new blog. Stay tuned for more updates!',
    },
    {
        id: 2,
        title: 'React Tips and Tricks',
        date: '2024-06-05',
        summary: 'A collection of useful tips for working with React.',
    },
];

const Blog = () => (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '2rem' }}>
        <h1>My Blog</h1>
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {posts.map(post => (
                <li key={post.id} style={{ marginBottom: '2rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                    <h2>{post.title}</h2>
                    <small>{post.date}</small>
                    <p>{post.summary}</p>
                </li>
            ))}
        </ul>
    </div>
);

export default Blog;