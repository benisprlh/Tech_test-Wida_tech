'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SoldProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SoldProduct.belongsTo(models.Invoice)
    }
  }
  SoldProduct.init({
    item: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    totalCogs: DataTypes.INTEGER,
    totalPrice: DataTypes.INTEGER,
    InvoiceId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'SoldProduct',
  });
  return SoldProduct;
};