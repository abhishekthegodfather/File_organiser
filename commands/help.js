// This is our help function contains all command which guide user 
// which command to follow for which operation they want

// importing the nessary modules
// fs --> file system module
// path ---> path module 

let fs = require('fs');
let path = require("path");


function helpFn() {
    console.log(`
    List of Following command
        1. node file_org.js tree "directory_path"
        2. node file_org.js org "directory_path"
        3. node file_org.js help  
    `);
}


module.exports={
    helpKey: helpFn
}