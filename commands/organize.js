// importing the nessary modules
// fs --> file system module
// path ---> path module 

let fs = require('fs');
let path = require("path");


function organizeFn(dir_path) {
    // console.log("organize command in file system", dir_path)
    // steps:
    //     1. first input directory path
    //     2. after that check the path is a directory or not 
    //     3. make a directory of name organize_files
    //     4. read the source files and check its type of files which are present
    //     5. do copy / cut the files from src file and paste in the organised files

    let final_path;

    if (dir_path == undefined) {
        // console.log("Please enter a valid path, this path is invalid");
        // return;
        let path_dest = process.cwd();
        final_path = path_dest;

    } else {

        let check_path = fs.existsSync(dir_path);

        if (check_path) {

            final_path = path.join(dir_path, "Organized_files");
            let ext_org = fs.existsSync(final_path);

            if (ext_org) {

                console.log("orginaze_file name exists");

            } else {

                fs.mkdirSync(final_path);
            }

        } else {
            console.log("Please enter a valid path of dirctory, this dirctory path is invalid");
            return;
        }
    }

    organised_files_maker(dir_path, final_path);

}

function organised_files_maker(source_path, final_path) {

    // 4. reading of files are done checking that the files are diectory or files


    let child_files = fs.readdirSync(source_path);
    // console.log(child_files);

    for (let i = 0; i < child_files.length; i++) {

        let child_addr = path.join(source_path, child_files[i]);
        let is_itFile = fs.lstatSync(child_addr).isFile();


        if (is_itFile) {
            // console.log(child_files[i])
            // 5. check its type of files which are present

            let categories = getCategories(child_files[i]);
            // console.log(child_files[i], "belongs to --------------->", categories);


            // 6. Now copying the files of different categories and paste it into the final_path and placing the files 
            // which belong to sutiable categories

            sendFiles(child_addr, final_path, categories);
        }

    }
}

function getCategories(child_files) {

    let ext_files = path.extname(child_files);
    ext_files = ext_files.slice(1);
    // console.log(ext_files);

    for (let j in types_ext) {

        let catArray = types_ext[j];

        for (let i = 0; i < catArray.length; i++) {
            if (ext_files == catArray[i]) {
                return j;
            }
        }
    }
    return "other_type";
}

function sendFiles(child_addr, final_path, categories) {

    let cate_path = path.join(final_path, categories);
    let does_cate_path = fs.existsSync(cate_path);

    if (does_cate_path == false) {

        fs.mkdirSync(cate_path);
    }

    let file_name = path.basename(child_addr);
    let des_path = path.join(cate_path, file_name);
    fs.copyFileSync(child_addr, des_path);
    fs.unlinkSync(child_addr);
    console.log(file_name, "copyied in ----------> ", categories);

}

module.exports = {
    orgKey: organizeFn
}