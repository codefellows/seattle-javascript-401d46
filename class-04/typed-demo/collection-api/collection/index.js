'use strict';

// requires sequelize and the data types necessary
const { Sequelize, DataTypes } = require('sequelize');
const ICollection = require('./lib/ICollection.js');
const funkoSchema = require('./funko.schema.js');
const customerSchema = require('./customer.schema.js');
const orderSchema = require('./order.schema.js');

// handles database connection
const sequelize = new Sequelize('sqlite::memory');

// Create and exports our Models / Tables
const FunkoModel = funkoSchema(sequelize, DataTypes);
const CustomerModel = customerSchema(sequelize, DataTypes);
const OrderModel = orderSchema(sequelize, DataTypes);

// creates our assocations between tables
CustomerModel.hasMany(OrderModel, { foreignKey: 'customerId',  sourceKey: 'id'});
OrderModel.belongsTo(CustomerModel, { foreignKey: 'customerId', targetKey: 'id' });

module.exports = {
  sequelize,
  funkoCollection: new ICollection(FunkoModel),
  orderCollection: new ICollection(OrderModel),
  customerCollection: new ICollection(CustomerModel),
};
