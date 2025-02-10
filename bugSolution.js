const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Validate userId.  Example: check if it's a number
  if (isNaN(parseInt(userId))) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  // ... rest of the code to fetch and send user data.  Add more checks as needed based on your data source...
  //Example Fetch from database
  // db.query('SELECT * FROM users WHERE id = $1', [userId], (err, result) => {
  //   if(err) return res.status(500).json({ error: err });
  //   res.json(result.rows[0]);
  // });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});