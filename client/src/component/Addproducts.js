import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import styled from 'styled-components';
import axios from 'axios';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-top: 20px;
`;

const AddProductPage = ({ addProduct }) => {
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    cover: '', // Assuming 'cover' is the image URL
    discount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = 'http://localhost:3000/api/products/create';

    try {
      const response = await axios.post(apiUrl, productData);

      console.log('Product added successfully:', response.data);

      setProductData({
        name: '',
        price: '',
        cover: '',
        discount: '',
      });
    } catch (error) {
      // Handle error
      console.error('Error adding product:', error.message);
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <StyledForm onSubmit={handleSubmit}>
        <TextField
          label="Name"
          type="text"
          name="name"
          value={productData.name}
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
          label="Price"
          type="number"
          name="price"
          value={productData.price}
          onChange={handleChange}
          required
          margin="normal"
        />
        <TextField
          label="Cover (Image URL)"
          type="text"
          name="cover"
          value={productData.cover}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          label="Discount"
          type="text"
          name="discount"
          value={productData.discount}
          onChange={handleChange}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '10px' }}>
          Add Product
        </Button>
      </StyledForm>
    </div>
  );
};

export default AddProductPage;
