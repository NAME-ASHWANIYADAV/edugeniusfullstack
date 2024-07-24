import React, { useState } from 'react';
import '../styles/CoursePage.css'; // Import CSS file

const CoursePage = () => {
  const [activeTab, setActiveTab] = useState('videos');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="course-page-container">
      <header className="course-header">
        <h1 className="course-title">Advanced React Development</h1>
        <div className="instructor-info">
          <img src="instructor-photo-url" alt="Instructor" className="instructor-photo" />
          <div className="instructor-details">
            <h2>Jane Doe</h2>
            <p>Senior React Developer</p>
          </div>
        </div>
        <div className="progress-indicator">
          <h3>Progress</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: '60%' }}></div>
          </div>
        </div>
      </header>
      <div className="course-content">
        <div className="tabs">
          <button className={activeTab === 'videos' ? 'active' : ''} onClick={() => handleTabChange('videos')}>Videos</button>
          <button className={activeTab === 'readings' ? 'active' : ''} onClick={() => handleTabChange('readings')}>Readings</button>
          <button className={activeTab === 'quizzes' ? 'active' : ''} onClick={() => handleTabChange('quizzes')}>Quizzes</button>
          <button className={activeTab === 'assignments' ? 'active' : ''} onClick={() => handleTabChange('assignments')}>Assignments</button>
        </div>
        <div className="content-section">
          {activeTab === 'videos' && (
            <div>
              <h3>Videos</h3>
              {/* List videos here */}
              <p>Video content goes here.</p>
            </div>
          )}
          {activeTab === 'readings' && (
            <div>
              <h3>Readings</h3>
              {/* List readings here */}
              <p>Reading content goes here.</p>
            </div>
          )}
          {activeTab === 'quizzes' && (
            <div>
              <h3>Quizzes</h3>
              {/* List quizzes here */}
              <p>Quiz content goes here.</p>
            </div>
          )}
          {activeTab === 'assignments' && (
            <div>
              <h3>Assignments</h3>
              {/* List assignments here */}
              <p>Assignment content goes here.</p>
            </div>
          )}
        </div>
      </div>
      <div className="discussion-forum">
        <h2>Discussion Forum</h2>
        <div className="forum-thread">
          <div className="thread-post">
            <div className="post-info">
              <img src="user-photo-url" alt="User" className="user-photo" />
              <div className="post-details">
                <h4>John Smith</h4>
                <p>What is the best way to manage state in large applications?</p>
              </div>
            </div>
            <div className="post-actions">
              <button className="upvote">▲ 5</button>
              <button className="reply">Reply</button>
            </div>
          </div>
          {/* Add more posts */}
        </div>
      </div>
      <div className="resources-section">
        <h2>Resources</h2>
        <ul>
          <li><a href="#">Download Lecture Notes</a></li>
          <li><a href="#">External Reference 1</a></li>
          <li><a href="#">External Reference 2</a></li>
        </ul>
      </div>
    </div>
  );
};

export default CoursePage;
