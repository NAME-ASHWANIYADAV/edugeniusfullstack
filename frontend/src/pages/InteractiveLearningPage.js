import React, { useState } from 'react';
import '../styles/InteractiveLearningPage.css'; // Import CSS file

const InteractiveLearningPage = () => {
  const [activeTab, setActiveTab] = useState('tutoring');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="interactive-learning-page">
      <header className="header">
        <h1>Interactive Learning Modules</h1>
      </header>

      <div className="tabs">
        <button className={activeTab === 'tutoring' ? 'active' : ''} onClick={() => handleTabChange('tutoring')}>Tutoring Sessions</button>
        <button className={activeTab === 'language' ? 'active' : ''} onClick={() => handleTabChange('language')}>Language Learning Tools</button>
        <button className={activeTab === 'stem' ? 'active' : ''} onClick={() => handleTabChange('stem')}>STEM Modules</button>
      </div>

      <div className="content">
        {activeTab === 'tutoring' && (
          <div className="tutoring-sessions">
            <h2>Tutoring Sessions</h2>
            <div className="schedule">
              <h3>Schedule for Live Sessions</h3>
              {/* Replace with actual schedule data */}
              <ul>
                <li>Session 1: Monday, 10 AM</li>
                <li>Session 2: Wednesday, 2 PM</li>
                <li>Session 3: Friday, 4 PM</li>
              </ul>
            </div>
            <div className="recordings">
              <h3>Recordings of Previous Sessions</h3>
              {/* Replace with actual recordings data */}
              <ul>
                <li><a href="#">Session 1 Recording</a></li>
                <li><a href="#">Session 2 Recording</a></li>
                <li><a href="#">Session 3 Recording</a></li>
              </ul>
            </div>
            <div className="ai-feedback">
              <h3>AI-driven Recommendations and Feedback</h3>
              <p>Receive personalized feedback and recommendations based on your performance and activity.</p>
              {/* Placeholder for AI-driven feedback */}
            </div>
          </div>
        )}

        {activeTab === 'language' && (
          <div className="language-learning">
            <h2>Language Learning Tools</h2>
            <div className="pronunciation">
              <h3>Pronunciation Practice</h3>
              {/* Placeholder for pronunciation tool */}
              <p>Practice your pronunciation with real-time feedback.</p>
            </div>
            <div className="vocabulary-quizzes">
              <h3>Interactive Vocabulary Quizzes</h3>
              {/* Placeholder for quizzes */}
              <p>Test your vocabulary with interactive quizzes.</p>
            </div>
            <div className="gamified-exercises">
              <h3>Gamified Exercises</h3>
              {/* Placeholder for gamified exercises */}
              <p>Engage in exercises designed to make learning fun and effective.</p>
            </div>
          </div>
        )}

        {activeTab === 'stem' && (
          <div className="stem-modules">
            <h2>STEM Modules</h2>
            <div className="virtual-labs">
              <h3>Virtual Labs and Simulations</h3>
              {/* Placeholder for virtual labs */}
              <p>Explore STEM concepts through interactive virtual labs and simulations.</p>
            </div>
            <div className="coding-challenges">
              <h3>Coding Challenges</h3>
              {/* Placeholder for coding challenges */}
              <p>Test your coding skills with various challenges and exercises.</p>
            </div>
            <div className="collaborative-projects">
              <h3>Collaborative Projects</h3>
              {/* Placeholder for collaborative projects */}
              <p>Work on collaborative projects with peers to solve complex problems.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveLearningPage;
