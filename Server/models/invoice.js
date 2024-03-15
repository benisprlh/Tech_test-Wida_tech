'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Invoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Invoice.hasMany(models.SoldProduct)
    }
  }
  Invoice.init({
    dateOfInvoice: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Date Is Required"
        },
        notEmpty: {
          msg: "Date Is Required"
        }
      }
    },
    customerName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Customer Name Is Required"
        },
        notEmpty: {
          msg: "Customer Name Is Required"
        }
      }
    },
    salesPersonName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Sales Person Name Is Required"
        },
        notEmpty: {
          msg: "Sales Person Name Is Required"
        }
      }
    },
    paymentType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Payment Type Is Required"
        },
        notEmpty: {
          msg: "Payment Type Is Required"
        }
      }
    },
    note: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Invoice',
  });
  return Invoice;
};