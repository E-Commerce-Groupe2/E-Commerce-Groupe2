const { Model, DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

class ProductModel extends Model {}

ProductModel.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  cover: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  discount: {
    type: DataTypes.STRING, // You can adjust the type based on your needs
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'productModels',
  underscored: true,
});

module.exports = ProductModel;
