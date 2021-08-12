const fs = require("fs").promises;
const path = require('path');

;(async () => {
    console.log('TODO! Lists that need to be tested:');
    const files = await fs.readdir('./release');
    const lists = files.filter(fileName => path.extname(fileName).toLocaleLowerCase() === '.txt');
    console.log(lists);
    // TODO
})();
