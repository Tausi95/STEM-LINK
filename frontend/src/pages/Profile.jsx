// Profile.js
import React, { useState, useEffect } from 'react';
import userService from '../services/userService';
import '../assets/css/Profile.css';

const Profile = () => {
  const [role, setRole] = useState('student');
  const [profileData, setProfileData] = useState({});
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    setError('');
    userService.getUserProfile()  // Call the method from the userService object
      .then((data) => {
        setProfileData(data);
        setFormData(data);
      })
      .catch((err) => setError('Failed to load profile data.'))
      .finally(() => setLoading(false));
  }, [role]);

  const handleRoleChange = (newRole) => setRole(newRole);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.updateUserProfile(formData);  // Call the method from the userService object
      alert('Profile updated successfully');
      setProfileData(formData); // Update local state with form data
    } catch (err) {
      alert('Error updating profile. Please try again.');
    }
  };

  return (
    <div className="profile-container">
      <h1>Your Profile</h1>
      <RoleSelector role={role} onRoleChange={handleRoleChange} />

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <ProfileForm
          role={role}
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

// Role Selector Component
const RoleSelector = ({ role, onRoleChange }) => (
  <div className="role-selection">
    {['student', 'mentor', 'event_creator'].map((roleName) => (
      <button
        key={roleName}
        onClick={() => onRoleChange(roleName)}
        className={role === roleName ? 'active' : ''}
      >
        {roleName.charAt(0).toUpperCase() + roleName.slice(1)}
      </button>
    ))}
  </div>
);

// Profile Form Component
const ProfileForm = ({ role, formData, onChange, onSubmit }) => {
  const renderFormFields = () => {
    switch (role) {
      case 'student':
        return (
          <>
            <FormField
              label="Learning Goals"
              name="learningGoals"
              type="text"
              value={formData.learningGoals || ''}
              onChange={onChange}
              placeholder="Enter your learning goals"
            />
            <FormField
              label="Preferred Mentor"
              name="preferredMentor"
              type="text"
              value={formData.preferredMentor || ''}
              onChange={onChange}
              placeholder="Choose a mentor"
            />
          </>
        );
      case 'mentor':
        return (
          <>
            <FormField
              label="Availability"
              name="availability"
              type="text"
              value={formData.availability || ''}
              onChange={onChange}
              placeholder="Enter available times"
            />
            <FormField
              label="Bio"
              name="bio"
              type="textarea"
              value={formData.bio || ''}
              onChange={onChange}
              placeholder="Write a short bio"
            />
          </>
        );
      case 'event_creator':
        return (
          <>
            <FormField
              label="Event Name"
              name="eventName"
              type="text"
              value={formData.eventName || ''}
              onChange={onChange}
              placeholder="Enter event name"
            />
            <FormField
              label="Event Date"
              name="eventDate"
              type="date"
              value={formData.eventDate || ''}
              onChange={onChange}
            />
            <FormField
              label="Event Description"
              name="eventDescription"
              type="textarea"
              value={formData.eventDescription || ''}
              onChange={onChange}
              placeholder="Describe the event"
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={onSubmit} className="profile-form">
      {renderFormFields()}
      <button type="submit">Update Profile</button>
    </form>
  );
};

// Reusable FormField Component
const FormField = ({ label, name, type, value, onChange, placeholder }) => (
  <div className="form-group">
    <label>{label}</label>
    {type === 'textarea' ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      ></textarea>
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    )}
  </div>
);

export default Profile;

