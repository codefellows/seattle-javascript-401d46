# Warm Up - History

Tracking navigation history within an application.

## Overview

It's often helful to track the browser history of a user with an application, today we will create a Module that stores URLs as the user navigates, and allows the user to go backwards and forwards.

### Navigation

Each time the user `navigates` to a URL we will store that URL in our application state.  When the user navigates to a new URL our navigation feature must store any previously visited URL in appliction, so that our user could retrive it later.

### Backwards

Each time the user wants to go `backwards`, the most recently visited URL is retreived.  The User can keep going `backwards` until there they have retrieved all of the URLs visited in their current History session.

### Forwards

Everytime the User goes `backwards`, URLs are stored so that the User can retrieve more recently viewed URLS.
