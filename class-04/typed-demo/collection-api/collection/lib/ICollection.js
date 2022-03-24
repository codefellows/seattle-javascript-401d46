'use strict';

class ICollection {

  // takes in a sequelize
  constructor(model) {
    this.model = model;
  }

  async create(json) {
    try {
      // use the encapsulated 'model' to create an instance
      let instance = await this.model.create(json);

      return instance;
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async read(id, options) {
    try {
      const idNum = parseInt(id);
      let query = { where: { id: idNum }, ...options };

      let result = await this.model.findOne(query);
      return result;
    } catch (e) {
      console.error(e);
      return e;
    }
  }

  update() {

  }

  async delete(id) {
    try {
      const idNum = parseInt(id);
      let query = { where: { id: idNum } };

      let instanceToRemove = await this.model.findOne(query);
      await this.model.destroy(query);
      return instanceToRemove;
    } catch(e) {
      console.error(e);
      return e;
    }
  }
}

module.exports = ICollection;
