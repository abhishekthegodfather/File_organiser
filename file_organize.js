#!/usr/bin/env node

//using shebang expression so that this file become cross platform and know which enev is using \

// importing the nessary modules
// fs --> file system module
// path ---> path module 

let fs = require('fs');
let path = require("path");

// command are imported in the form of modules so that the code become effient
let helpObj = require("./commands/help");
let treeObj = require("./commands/tree");
let organizeObj = require("./commands/organize");

//taking the input from the user and convert the input in the splitted array form
let input_user = process.argv.slice(2);

//printing the command inputed in the from oof array in terminal
console.log(input_user);


// Aim of this project 
    // Following command to make 
    // 1. node file_org.js tree "directory"
    // 2. node file_org.js org "directory"
    // 3. node file_org.js help


// Type of content present in file and its categories according to the content present
let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

// seperating the command from the main command given 
let command = input_user[0];

//checking the condiation using the switch case
switch (command) {
    case "tree":

        // if the tree is written in the command then treeFn() function is executed
        treeObj.treeKey(input_user[1])
        break;

    case "org":
        // if the org is written in the command then organizeFn() function is executed
        organizeObj.orgKey(input_user[1])
        break;

    case "help":
        // if the help is written in the command then helpFn() function is executed
        helpObj.helpKey();
        break;


        // if none of the command is found then this statement is executed
        defult:
            console.log(" Wrong command, please fix the code");
        break;
}



