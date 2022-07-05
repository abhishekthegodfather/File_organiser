// importing the nessary modules
// fs --> file system module
// path ---> path module 

let fs = require('fs');
let path = require("path");

function treeFn(dir_path) {
    // console.log("tree command in file system", dir_path);

    if (dir_path == undefined) {
        // console.log("Please enter a valid path, this path is invalid");
        // return;
        treeHelper(process.cwd(), "");

    } else {

        let check_path = fs.existsSync(dir_path);

        if (check_path) {

            treeHelper(dir_path, "");

        } else {
            console.log("Please enter a valid path of dirctory, this dirctory path is invalid");
            return;
        }
    }
}


function treeHelper(dir_path, indent) {
    let file_type = fs.lstatSync(dir_path).isFile();
    if (file_type) {
        
        // gettting the file name from the path and printing the files in the console
        let file_name = path.basename(dir_path);
        
        console.log(indent + "├──" + file_name);
    
    }else{
        // getting the folder name and printing the name in a certain pattern 

        let folder_name = path.basename(dir_path);
        
        console.log(indent + "└──" + folder_name);
        

        // Reading a files inside the folder 

        let children = fs.readdirSync(dir_path);
        
        for(let i = 0; i < children.length; i++){

            // joing the parent folder path with the child name so for getting the child address

            let child_add = path.join(dir_path, children[i]);

            //using recursion for printing the child folder
            treeHelper(child_add, indent +"\t");
        }

    }
}

module.exports = {
    treeKey: treeFn
}