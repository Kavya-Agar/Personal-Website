import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Project.css';

export default function Projects() {
  return (
   <motion.section
      id="projects"
      className="max-w-4xl mx-auto py-16 px-4 md:px-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-3xl font-bold mb-8" style={{ color: '#0f420f' }}>
        My Projects
        </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Project 1 */}
        <div className="project-card bg-white shadow-lg rounded-lg p-6">
          <h3 className="project-title">
            FINance
          </h3>
          <p className='description'>
            A simple fish-themed finance tracker that allows users to track their income and expenses. The app provides a simple UI
            for users to manage their finances and get insights into their spendings to see where they can save money.
          </p>

          <h3 className='technologies'>
              Technologies Used:
          </h3>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '1rem' }}>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" 
              alt="Javascript Logo" 
              className="technology-image"
              style={{ width: '40px', height: '40px', objectFit: 'contain' }}
            />
            <img
              src="https://images.icon-icons.com/2699/PNG/512/python_logo_icon_168886.png"
              alt="Python Logo"
              className="technology-image"
              style={{ width: '40px', height: '40px', objectFit: 'contain' }}
            />
            <img
              src="https://www.svgrepo.com/show/353657/django-icon.svg"
              alt="Django Logo"
              className="technology-image"
              style={{width: '40px', height: '40px', objectFit: 'contain' }}
            />
            <img
              src="https://static-00.iconduck.com/assets.00/tensorflow-icon-1911x2048-1m2s54vn.png"
              alt="Tensorflow Logo"
              className="technology-image"
              style={{ width: '40px', height: '40px', objectFit: 'contain' }}
            /> 
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
              alt="SQLite Logo"
              className="technology-image"
              style={{ width: '40px', height: '40px', objectFit: 'contain' }}
            /> 
          </div>

          <a href="https://www.janestreet.com/" 
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
        
        {/* Project 2 */}
        <div className="project-card bg-white shadow-lg rounded-lg p-6">
          <h3 className="project-title">
            Heart R8
          </h3>
          <p className="description">
            A low-cost wristband for older adults that detects abnormal heart rhythms and alerts them in case of 
            arrythmias. The wristband is designed to be simple and easy to use, easing the process of managing cardiac 
            health.
          </p>

          <h3 className='technologies'>
            Technologies Used:
          </h3>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '1rem' }}>
            <img 
              src="https://www.electronics-lab.com/wp-content/uploads/2023/03/arduino-logo-1-1.png" 
              alt="Arduino Logo" 
              className="technology-image"
              style={{ width: '40px', height: '40px', objectFit: 'contain' }}
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png"
              alt="C++ Logo"
              className="technology-image"
              style={{ width: '40px', height: '40px', objectFit: 'contain' }}
            />
          </div>

          <a 
            href="https://devpost.com/software/heart-rate-pulse-sensor" 
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>

        {/* Project 3 */}
        <div className="project-card bg-white shadow-lg rounded-lg p-6">
          <h3 className="project-title">
            Personal Website
          </h3>
          <p className='description'>
            A personal website to showcase my projects and skills so far as well as serve as a learning opportunity.
            The website was designed to be simple and easy to navigate, as well as responsive to different screen sizes. 
          </p>
          <h3 className='technologies'>
              Technologies Used:
          </h3>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '1rem' }}>
            <img 
              src="https://images.icon-icons.com/2415/PNG/512/react_original_wordmark_logo_icon_146375.png" 
              alt="React Logo" 
              className="technology-image"
              style={{ width: '40px', height: '40px', objectFit: 'contain' }}
            />
            <img
              src="https://images.seeklogo.com/logo-png/43/1/tailwind-css-logo-png_seeklogo-434090.png"
              alt="Tailwind Logo"
              className="technology-image"
              style={{ width: '40px', height: '40px', objectFit: 'contain' }}
            />  
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1200px-Vitejs-logo.svg.png"
              alt="Vite Logo"
              className="technology-image"
              style={{ width: '40px', height: '40px', objectFit: 'contain' }}
            />
            <img
              src="https://images.icon-icons.com/2699/PNG/512/python_logo_icon_168886.png"
              alt="Python Logo"
              className="technology-image"
              style={{ width: '40px', height: '40px', objectFit: 'contain' }}
            />
            <img
              src="https://www.svgrepo.com/show/353657/django-icon.svg"
              alt="Django Logo"
              className="technology-image"
              style={{width: '40px', height: '40px', objectFit: 'contain' }}
            />
            
            
          </div>

          <a href="https://www.kavyaagar.com/" 
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Viewing Project
          </a>
        </div>
      </div>
    </motion.section>
  );
}