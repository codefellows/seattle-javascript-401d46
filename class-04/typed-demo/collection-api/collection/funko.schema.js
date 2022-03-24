'use strict';

const funkoSchema = (sequelize, DataTypes) => {

  return sequelize.define('funkos', {
    name: {
      type: DataTypes.STRING,
    },
    number: {
      type: DataTypes.INTEGER,
    },
    collection: {
      type: DataTypes.STRING,
    },
    condition: {
      type: DataTypes.STRING,
    },
  });
};

module.exports = funkoSchema;
