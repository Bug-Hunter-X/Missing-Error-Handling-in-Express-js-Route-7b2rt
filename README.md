# Missing Error Handling in Express.js Route

This example demonstrates a common error in Express.js applications:  the lack of error handling in route handlers.  Specifically, the route `/users/:id` fails to check if `req.params.id` is a valid user ID before proceeding. This can lead to unexpected errors or crashes.

**bug.js** shows the problematic code.  **bugSolution.js** provides a corrected version with appropriate error handling.