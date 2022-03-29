'use strict';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Sequelize, DataTypes } = require('sequelize');

const SECRET = process.env.API_SECRET || 'secretfortoken';

const sequelize = new Sequelize(process.env.DATABASE_URL || 'sqlite::memory');

// Create a Sequelize model
const Users = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  token: {
    type: DataTypes.VIRTUAL,
    get() {
      return jwt.sign({ username: this.username }, SECRET);
    }, // a function that gets called on READ
    set(payload) {
      return jwt.sign(payload, SECRET);
    }, // a function that runs when we 'set' with '='
  },
});

// Hash our password automatically
Users.beforeCreate(async (instance) => {
  instance.password = await bcrypt.hash(instance.password, 10);
});

Users.authenticateBasic = async function(username, password) {
  try {
    const user = await Users.findOne({ where: { username: username } });
    const valid = await bcrypt.compare(password, user.password);
    if (valid) {
      return user;
    }
  } catch (e) {
    console.error(e);
    return e;
  }
};

Users.authenticateBearer = async function (token) {
  try {
    let payload = jwt.verify(token, SECRET);
    let user = await this.findOne({where: { username: payload.username }});
    if (user) {
      return user;
    }
  } catch (e) {
    console.error(e);
    return e;
  }
};

module.exports = {
  Users,
  sequelize,
};
