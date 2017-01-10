// Load Express
const express = require('express');

// Instantiate express so that we can use its functionality
const app = express();

// Designate a port to serve our app on
const PORT = process.env.PORT || 5000;

// Define which directory we will serve files from
app.use(express.static('./public'));

app.get('/turdburglar', function(request, response) {
  response.send('OMG turdburglar route activated and it is time to burgle!');
});

app.get('/index.html', function(request, response) {
  response.sendFile('index.html', {root: './public'});
});

// Let's route everything to index.html
app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.status(404).sendFile('404.html', {root: './public'});
});

app.listen(PORT, function() {
  console.log('Server is up and running on port 5000 and can be accessed at localhost:5000 in your browser');
});
