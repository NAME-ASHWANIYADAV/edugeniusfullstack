import React, { useState } from 'react';
import '../styles/ProfileAndSettingsPage.css'; // Import CSS file

const ProfileAndSettingsPage = () => {
  const [editingProfile, setEditingProfile] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [privacy, setPrivacy] = useState('public');

  const handleProfileEdit = () => {
    setEditingProfile(!editingProfile);
  };

  const handleNotificationChange = () => {
    setNotifications(!notifications);
  };

  const handlePrivacyChange = (event) => {
    setPrivacy(event.target.value);
  };

  return (
    <div className="profile-settings-container">
      <header className="header">
        <h1>Profile and Settings</h1>
      </header>
      <div className="profile-section">
        <h2>User Profile</h2>
        <button onClick={handleProfileEdit} className="edit-button">
          {editingProfile ? 'Save Changes' : 'Edit Profile'}
        </button>
        <div className="profile-info">
          <div className="profile-photo">
            <img src="user-photo-url" alt="User" />
          </div>
          <div className="profile-details">
            <label>
              <span>Name:</span>
              {editingProfile ? (
                <input type="text" defaultValue="John Doe" />
              ) : (
                <p>John Doe</p>
              )}
            </label>
            <label>
              <span>Email:</span>
              {editingProfile ? (
                <input type="email" defaultValue="john.doe@example.com" />
              ) : (
                <p>john.doe@example.com</p>
              )}
            </label>
            <label>
              <span>Learning Preferences:</span>
              {editingProfile ? (
                <textarea defaultValue="Preferred subjects and learning methods" />
              ) : (
                <p>Preferred subjects and learning methods</p>
              )}
            </label>
            <div className="achievements">
              <h3>Achievements and Badges</h3>
              <ul>
                <li><span className="badge">Completed JavaScript Basics</span></li>
                <li><span className="badge">Advanced React Developer</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="settings-section">
        <h2>Settings</h2>
        <div className="notification-preferences">
          <h3>Notification Preferences</h3>
          <label>
            <input
              type="checkbox"
              checked={notifications}
              onChange={handleNotificationChange}
            />
            Enable notifications
          </label>
        </div>
        <div className="privacy-settings">
          <h3>Privacy Settings</h3>
          <label>
            <input
              type="radio"
              name="privacy"
              value="public"
              checked={privacy === 'public'}
              onChange={handlePrivacyChange}
            />
            Public
          </label>
          <label>
            <input
              type="radio"
              name="privacy"
              value="private"
              checked={privacy === 'private'}
              onChange={handlePrivacyChange}
            />
            Private
          </label>
        </div>
        <div className="account-management">
          <h3>Account Management</h3>
          <button className="change-password">Change Password</button>
          <button className="delete-account">Delete Account</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileAndSettingsPage;
