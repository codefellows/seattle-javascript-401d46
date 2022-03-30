# Class 08: Authorization

## Review

See [review](./review/README.md) folder

## Authorization

We spent the last 2 days answering the quesion "Who are you?" -> Now we want to be able to answer "Can you do That?"

Role Based Access

* Add a `Role` to our User Model
* each role is going to map to a list of `capabilities`
  * ['create', 'read', 'update', 'delete']
  * Express let's us run specific middleware for a given.
  * adding 2 things to our User Model
    * Role: ["user", "admin", "writer"]
    * Map of role to capabilities: { "user": [], "writer": [], "admin: []}
      * Virtual field on our Sequelize models.
