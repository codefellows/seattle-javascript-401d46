# Class 03: CRUD (with SQL) and REST (with Express)

## Warm Up

See warm up folder

## Code Review

Express Routing:

- paths (http://localhost:3000/hello) / sending requests to different routes
- HTTP method (GET/ POST /PUT / DELETE)

Middleware functions: any function that runs that runs between the request and the response.

```javascript
function (request, response, next) {
  console.log('function ran!');
  next();
}
```

- Request
  - Parameters: taken from the request object, configured in the URL:  GET -> `http://localhost:3000/hello/Jacob`
    - Express route: `app.get('/hello/:name')`.
    - You can definew as many as you want.
    - They are required on the URL if configured.
  - Query: Defined in the URL, appends a `?` and `=` to assign key value pairs for the request.
    - GET -> `http://localhost:3000/hello?name=Jacob`
  - Write properties onto this object.
- Response: contains methods for setting data on the response object, this is what is sent back to the client.
  - `res.send()`
  - `res.status()`
  - Modify this?
  - This is read only.
- next function: tells our server to "move on", to the next middleware function (which could be an error).
  - How does express know when an error is experienced?
    - pass anything into the next function to trigger an error.
    - Where should error handlers be defined in our server file?
      - After all the other routes (on proceeding lines).

```javascript

app.get('/hello', handleHello);

app.post('/hello/:person', handlerhello);

app.use(handleNotFound);
app.use(errorHandler);

```

- using next in an errorHandler will pass to another handler.
- Middleware chaining
- Error Handling

## CRUD with SQl

We can perform CRUD using the sequelize library:

```javascript
Model.create(QUERY)
Model.findAll(QUERY)
Model.update(QUERY)
Model.destroy(QUERY)
```

## TDD: REST API

Our Routes should follow a pattern that matches HTTP methods to CRUD methods:

```javascript

app.get('/people', handleReadPeople);
app.post('/people', handleCreatePeople);
app.put('/people/:id', handleUpdatePeople);
app.get('/people/:id', handleDeletePeople);

```
