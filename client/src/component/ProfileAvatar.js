import React, { useState } from 'react';
import { Avatar, Button } from '@material-ui/core';

const ProfileAvatar = ({ userData, onImageChange }) => {
  const [fileInput, setFileInput] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    onImageChange(file);
  };

  const handleClick = () => {
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Avatar alt="User Avatar" src={userData.avatar} style={{ width: '120px', height: '120px', marginBottom: '10px' }} />
      <Button variant="contained" color="primary" onClick={handleClick}>
        Change Image
      </Button>
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        ref={(input) => setFileInput(input)}
        onChange={handleImageChange}
      />
    </div>
  );
};

export default ProfileAvatar;
