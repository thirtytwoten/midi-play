let path = require('path');
let express = require('express');

let port = 3000;
let app = express();

app.use(express.static(path.join(__dirname, './')));
app.listen(port);
console.log(`app listening on port ${port}`);
