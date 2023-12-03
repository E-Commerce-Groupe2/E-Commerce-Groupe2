import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShopCart = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    };

    fetchProducts();
  }, []);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      {products.map((product, index) => (
        <div className='box' key={index}>
          <div className='product mtop'>
            <div className='img'>
              <span className='discount'>{product.discount}% Off</span>
              <img src={product.cover} alt='' />
              <div className='product-like'>
                <label>{count}</label> <br />
                <i className='fa-regular fa-heart' onClick={increment}></i>
              </div>
            </div>
            <div className='product-details'>
              <h3>{product.name}</h3>
              <div className='rate'>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
                <i className='fa fa-star'></i>
              </div>
              <div className='price'>
                <h4>D{product.price}.00 </h4>

                <button onClick={() => addToCart(product)}>
                  <i className='fa fa-plus'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ShopCart;
