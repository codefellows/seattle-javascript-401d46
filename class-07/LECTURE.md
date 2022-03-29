# Class 07: Bearer Authentication

## Warm Up

## Code Review

Micha: comparing our password hash, Frustrating!!

- Comments (too much clutter / hard to read)

Tanner:  Same thing, Comparison frustrating :/
Andres: Hard time finding direction!

- How to validate what we are doing is heading in the right direction.

Michael: ditto with the starting point.

- So much documentation, where do I begin?

## Json Web Tokens

- A temporary and completly client safe way of authenticating any request (as long as authorized)
  - Token is completely safe for interception
  - OUr server can validate the token with a API SECRET.

## TDD: Bearer Middleware

- Middleware function checks for a token present in the header

    ```javascript

    async function bearerAuth(req, res, next) {

      try {
        let authHeader = req.headers.authorization;
        let token = authHeaders.split(' ')[1];
        let user = await Users.authenticateBearer(token);
        req.user = user;
      } catch(e) {
        throw new Error(e);
      }
    }

    ```

- User model can authenticate the token.

    ```javascript
    UserModel.authenticateBearer = async function(token) {

      try {
        let userFromToken = jwt.verify(token, SECRET);
        let user = await this.findOne({ where: { username: userFromToken.username });
        return user;
      } catch (e) {
        throw new Error(e);
      }
    }
    ```
