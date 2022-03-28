'use strict';

const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('sqlite::memory');

const UsersModel = sequelize.define('Users', {
  username: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
});

// add a method to our User Table
UsersModel.authenticateBasic = async function (username, password) {
  let user = await this.findOne({ where: { username }});

  if (user) {
    let validUser =  await bcrypt.compare(password, user.password);
    if (validUser) {
      return user;
    }
  }
};

async function basic(req, res, next) {
  // check the request headers
  // make sure they contain an authorization object
  let { authorization } = req.headers;
  if (!authorization) {
    res.status(401).send('Unauthorized');
  } else {
    // decode the headers // `asMZadsHFGUcndh==`;
    let authString = authorization.split(' ')[1];
    let decodedHeaders = base64.decode(authString); // `jacob:supersecret`
    let [username, password] = decodedHeaders.split(':');

    let validUser = await UsersModel.authenticateBasic(username, password);
    if(validUser) {
      req.user = validUser;
      next();
    } else {
      res.status(401).send('Unauthorized');
    }
  }

}

const app = express();

app.use(express.json());
app.post('/signup', async (req, res) => {
  // lets encrypt password first!
  let { username, password } = req.body;
  let encryptedPassword = await bcrypt.hash(password, 10);
  let user = await UsersModel.create({
    username,
    password: encryptedPassword,
  });
  res.send(user);
});

app.get('/users', basic, (req, res) => {
  console.log(req.user);
  let mockData = [
    { username: 'Jacob' },
  ];

  res.send(mockData);
});

module.exports = {
  app,
  sequelize,
};
