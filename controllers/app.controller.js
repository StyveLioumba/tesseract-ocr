import { ocerisation } from "../ocr.js";
import * as manage_os from '../manage_os.js'

const config = {
    lang: "eng",
    oem: 1,
    psm: 3,
}

export const index = (req,res)=>{
    res.render('index.ejs',{data : ""})
}

export const extraction = (req,res)=>{
    ocerisation(req.files[0].path,config)
    .then((text) =>{
        console.log("ici Result:", text)
        manage_os.createFile(text);
        res.render('index.ejs',{data : text})
    })
    .catch((error) => console.log(error.message))
}

export const folders = (req,res)=>{
    console.log(manage_os.getFiles("extracted"));
    res.render('folders.ejs',{data: manage_os.getDirectories()})
}

export const createFolder = (req,res)=>{
    const foldername = req.body.foldername;
    manage_os.createDirectory(foldername)
    res.render('folders.ejs',{data: manage_os.getDirectories()})
}

export const removeFolder = (req,res)=>{
    const foldername = req.params.foldername;
    manage_os.deleteDirectory(foldername)
    res.render('folders.ejs',{data: manage_os.getDirectories()})
}