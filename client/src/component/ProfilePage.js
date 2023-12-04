import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { Container, Paper, Typography, Avatar, Grid, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios';

// Import the EditProfile component
import EditProfile from './EditProfile'; // Replace './EditProfile' with the correct path to your EditProfile component


const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const StyledHeader = styled.header`
  background-color: #fcd2b3;
  color: white;
  text-align: center;
  padding: 3em 0;
  margin-bottom: 60px;
  margin-top: 20px;
  align-items: top;
`;

const StyledPaper = styled(Paper)`
  display: flex;
  align-items: top;
  padding: 60px;
  background-color: #faece3 !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  margin-top: 20px;
`;

const StyledAvatar = styled(Avatar)`
  width: 120px;
  height: 120px;
  margin-right: 20px;
`;

const StyledUserDetails = styled.div`
  flex-grow: 1;
`;

const StyledSectionTitle = styled(Typography)`
  color: #2c3e50;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const StyledProfileSection = styled(Paper)`
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const StyledEditButton = styled(Button)`
  margin-top: 20px;
  background-color: #3498db;
  color: white;

  &:hover {
    background-color: #2980b9;
  }
`;

const ProfilePage = () => {
     const [userData, setUserData] = useState({
      username: '',
      email: '',
      avatar: '',
    });
  
    const [orderHistory, setOrderHistory] = useState([]);
    const [favoriteProducts, setFavoriteProducts] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const userResponse = await axios.get('');
          const orderHistoryResponse = await axios.get('');
          const favoriteProductsResponse = await axios.get('');
  
          setUserData(userResponse.data);
          setOrderHistory(orderHistoryResponse.data);
          setFavoriteProducts(favoriteProductsResponse.data);
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
      };
  
      fetchData();
    }, []);
  
    const handleEditProfile = () => {
      setIsEditing(true);
    };
  
    const handleUpdateProfile = (updatedUserData) => {
      setUserData(updatedUserData);
      setIsEditing(false);
    };

  return (
    <StyledContainer>
      <StyledHeader>
        <Typography variant="h4">Your Profile</Typography>
      </StyledHeader>
      {isEditing ? (
        <EditProfile
          userData={userData}
          onUpdateProfile={handleUpdateProfile}
          onClose={() => setIsEditing(false)}
        />
      ) : (
        <StyledPaper>
          <StyledAvatar alt="User Avatar" src={userData.avatar} />
          <StyledUserDetails>
            <Typography variant="h5">{userData.username}</Typography>
            <Typography>{userData.email}</Typography>
            <StyledEditButton
              variant="contained"
              startIcon={<EditIcon />}
              onClick={handleEditProfile}
            >
              Edit Profile
            </StyledEditButton>
          </StyledUserDetails>
        </StyledPaper>
      )}

      <StyledSectionTitle variant="h5">Order History</StyledSectionTitle>
      {/* ... (existing code) */}

      <StyledSectionTitle variant="h5">Favorite Products</StyledSectionTitle>
      {/* ... (existing code) */}
    </StyledContainer>
  );
};

export default ProfilePage;
