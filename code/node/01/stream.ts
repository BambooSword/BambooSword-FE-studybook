const fs = require('fs');

// read -> buffer -> write

const rs = fs.createReadStream('./1.jpg');
const ws = fs.createWriteStream('./2.jpg');
rs.pipe(ws)

