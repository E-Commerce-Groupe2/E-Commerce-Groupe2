    import React, { useState, useEffect } from 'react';
    import { Container, Paper, Typography, Avatar, Grid, Button } from '@material-ui/core';
    import EditIcon from '@material-ui/icons/Edit';
 import axios from 'axios';
    const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
    };

    const headerStyle = {
    backgroundColor: '#2c3e50',
    color: 'white',
    textAlign: 'center',
    padding: '1em 0',
    marginBottom: '20px',
    };

    const paperStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '40px',
    backgroundColor: '#ecf0f1',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    };

    const avatarStyle = {
    width: '120px',
    height: '120px',
    marginRight: '20px',
    };

    const userDetailsStyle = {
    flexGrow: 1,
    };

    const sectionTitleStyle = {
    color: '#2c3e50',
    borderBottom: '2px solid #3498db',
    paddingBottom: '10px',
    marginBottom: '20px',
    };

    const profileSectionStyle = {
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    };

    const editButtonStyle = {
    marginTop: '20px',
    backgroundColor: '#3498db',
    color: 'white',
    };

    const ProfilePage = () => {
        const [userData, setUserData] = useState({
          username: '',
          email: '',
          avatar: '',
        });
      
        const [orderHistory, setOrderHistory] = useState([]);
        const [favoriteProducts, setFavoriteProducts] = useState([]);
      
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
      
        return (
          <Container style={containerStyle}>
            <header style={headerStyle}>
              <Typography variant="h4">Your Profile</Typography>
            </header>
      
            <Paper style={paperStyle}>
              <Avatar alt="User Avatar" src={userData.avatar} style={avatarStyle} />
              <div style={userDetailsStyle}>
                <Typography variant="h5">{userData.username}</Typography>
                <Typography>{userData.email}</Typography>
                <Button variant="contained" style={editButtonStyle} startIcon={<EditIcon />}>
                  Edit Profile
                </Button>
              </div>
            </Paper>
      
            <Typography variant="h5" style={sectionTitleStyle}>
              Order History
            </Typography>
            <Grid container spacing={3}>
              {orderHistory.map(order => (
                <Grid item xs={12} md={6} lg={4} key={order.orderId}>
                  <Paper style={profileSectionStyle}>
                    <Typography variant="h6">Order ID: {order.orderId}</Typography>
                    <Typography>Date: {order.date}</Typography>
                    <Typography>Total: ${order.total}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
      
            <Typography variant="h5" style={sectionTitleStyle}>
              Favorite Products
            </Typography>
            <Grid container spacing={3}>
              {favoriteProducts.map(product => (
                <Grid item xs={12} md={6} lg={4} key={product.productId}>
                  <Paper style={profileSectionStyle}>
                    <Typography variant="h6">Product ID: {product.productId}</Typography>
                    <Typography>Name: {product.name}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Container>
        );
      };
      
      export default ProfilePage;