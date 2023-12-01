import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';

const EditProfile = ({ userData, onUpdateProfile, onClose }) => {
  const [editedUserData, setEditedUserData] = useState({ ...userData });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdate = async () => {
    try {

      const response = await axios.put('http://localhost:3000/api/auth/edit-profile', editedUserData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });

      onUpdateProfile(response.data.user);
      onClose();
    } catch (error) {
      console.error('Error updating profile:', error.message);
    }
  };

  return (
    <div>
      <TextField label="Username" name="username" value={editedUserData.username} onChange={handleChange} />
      <TextField label="Email" name="email" value={editedUserData.email} onChange={handleChange} />

   

      <Button variant="contained" color="primary" onClick={handleUpdate}>
        Update Profile
      </Button>
      <Button variant="contained" color="default" onClick={onClose}>
        Cancel
      </Button>
    </div>
  );
};

export default EditProfile;
