'use strict';

module.exports = (sequelize, DataTypes) => {

  return sequelize.define('people', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    job: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};
