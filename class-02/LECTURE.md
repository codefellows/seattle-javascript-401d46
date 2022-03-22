# Class 02: Express (Routing / Middleware)

## Review Lab 01

Link name: `https://<YOUR-APP-NAME>.herokuapp.com`

Node Modules: file / folder of files that holds a function you want to use.

- A folder where all of our "Node Packages" live. And we can use them by `requiring` them.
- Communicates with something else.
- JavaScript that "exports" something to be used elsewhere.
  - `module.exports = something`

How do we use "node modules"?

- We can use the `require` function to use the module.
  - This is called importing.

### Require Function

Main purpose of this function provide a single object (filled with whatever you want) to another Code Context.

- First thing that happens after running require is all the js at the path provided, gets parsed and executed.
  - If youre JS executes something, this is called a "side effect".
- After all the code is run, require returns whatever is specified as a `exports.map = mapFunction` or `module.exports = something`.

## Express Routing

HTTP framework. Uses a straight forward unopinionated synstax for routing -> matching a `method` and a `route` / `url` to a service or function / program.
- Express does not require any configuration to allow developer to setup services that you can route to.

### Middleware

General definition: Software that runs inbetween 2 programs.

Express: a function that receives the `request` and `response` object, as well as a `next` function.
- Because all functions in express fit between the `request` and the `response` express thinks of these functions as middleware.

```javascript

/**
 * Since this takes in, the req, res, and next function it's considered middleware
 **/
function logRoute(req, res, next) {

  console.log(req.route);

}

```

### Request / Response / Next

Request: any information originating from the client.

  - Requests Parameters

  - Request Queries

Response: the data / messages / any information requested sent back to the client, happens after every request.

Next: signals that `middleware` is done, and can move on to the next one.

### TDD: Simple Useless Server
