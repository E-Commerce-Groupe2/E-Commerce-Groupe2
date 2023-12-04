import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';
import { Paper } from '@material-ui/core';


const StyledPaper = styled(Paper)`
  display: flex;
  align-items: top;
  padding: 60px;
  background-color: #faece3 !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  margin-top: 20px;
`;


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
       <StyledPaper>
      <TextField label="Username" name="username" value={editedUserData.username} onChange={handleChange} />
      <TextField label="Email" name="email" value={editedUserData.email} onChange={handleChange} />

   

      <Button style={{ backgroundColor: "#ff6f08", color: "white" }} onClick={handleUpdate}>
      Update Profile
      </Button>

      <Button style={{ backgroundColor: "red", color: "white" }} onClick={onClose}>
       Cancel
       </Button>
       </StyledPaper>
    </div>
  );
};

export default EditProfile;