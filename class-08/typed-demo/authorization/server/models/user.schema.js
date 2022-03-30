'use strict';

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const SECRET = process.env.API_SECRET || 'secretstring';

module.exports = (sequelize, DataTypes) => {
  let model = sequelize.define('Users', {
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
        return jwt.sign({
          username: this.username,
          role: this.role,
          capabilities: this.capabilities,
        }, SECRET);
      },
      set() {},
    },
    role: {
      type: DataTypes.ENUM,
      values: ['user', 'writer', 'admin'],
      defaultValue: 'user',
    },
    capabilities: {
      type: DataTypes.VIRTUAL,
      get() {
        const acl = {
          user: ['read'],
          writer: ['read', 'create'],
          admin: ['read', 'create', 'update', 'delete'],
        };

        return acl[this.role];
      },
    },
  });

  model.beforeCreate(async user => {
    user.password = await bcrypt.hash(user.password, 10);
  });

  model.authenticateBasic = async function (username, password) {
    try {
      const user = await this.findOne({ where: { username } });
      const valid = await bcrypt.compare(password, user.password);
      if (valid) {
        return user;
      } else {
        throw new Error('Invalid User');
      }
    } catch (e) {
      throw new Error('Invalid User');
    }
  };

  model.authenticateBearer = async function (token) {
    try {
      const parsedToken = await jwt.verify(token, SECRET);
      const user = await this.findOne({ where: { username: parsedToken.username } });
      if (user) { return user; }
      throw new Error('Invalid User');
    } catch (e) {
      throw new Error(e.message);
    }
  };

  return model;
};

