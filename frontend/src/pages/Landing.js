import React from 'react';
import '../styles/landing.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className="login-signup">
        <button><Link to="/Login">Login</Link></button>
        <button><Link to="/Register">Sign Up</Link></button>
      </div>
    </header>
  );
}

function MainBanner() {
  return (
    <section className="main-banner">
      {/* <img src="banner.jpg" alt="Banner" /> */}
      <div className="intro">
        <h1>Welcome to Our Website</h1>
        <p>Brief introduction to our website</p>
        <button onClick={() => console.log('Get Started clicked')}>Get Started</button>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="features">
      <h2>Our Features</h2>
      <div className="feature">
        <i className="icon-personalized-tutoring" />
        <h3>Personalized Tutoring</h3>
        <p>Description of personalized tutoring feature</p>
      </div>
      <div className="feature">
        <i className="icon-language-learning" />
        <h3>Language Learning</h3>
        <p>Description of language learning feature</p>
      </div>
      <div className="feature">
        <i className="icon-stem-education" />
        <h3>STEM Education</h3>
        <p>Description of STEM education feature</p>
      </div>
      <div className="feature">
        <i className="icon-administrative-tools" />
        <h3>Administrative Tools</h3>
        <p>Description of administrative tools feature</p>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Users Say</h2>
      <div className="testimonial">
        {/* <img src="user1.jpg" alt="User 1" /> */}
        <p>Testimonial from user 1</p>
      </div>
      <div className="testimonial">
        {/* <img src="user2.jpg" alt="User 2" /> */}
        <p>Testimonial from user 2</p>
      </div>
      <div className="testimonial">
        {/* <img src="user3.jpg" alt="User 3" /> */}
        <p>Testimonial from user 3</p>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="app">
      <Header />
      <MainBanner />
      <FeaturesSection />
      <Testimonials />
    </div>
  );
}

export default App;