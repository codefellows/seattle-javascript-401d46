'use strict';

const customerSchema = (sequelize, DataTypes) => {

  return sequelize.define('customers', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

module.exports = customerSchema;
