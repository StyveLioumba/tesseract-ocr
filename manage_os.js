import fs from 'fs';
import path from 'path';

import * as constante from './constantes.js';

export const getDirectories = (source=constante.__workspaceDirname) =>fs.readdirSync(source, { withFileTypes: true })
.filter(dirent => dirent.isDirectory())
.map(dirent => dirent.name);

export const createDirectory = (dirname="new folder")=>{
    const dir = path.join(constante.__workspaceDirname,dirname);
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
        return dir;
    }
};

export const deleteDirectory = (dirname)=>{
    const dir = path.join(constante.__workspaceDirname,dirname);
    if (!fs.existsSync(dir)){
        return null;
    }
    
    fs.rmSync(dir,{ recursive: true, force: true });

};


export const getFiles = (dirname) =>{

    const dir = path.join(constante.__workspaceDirname,dirname)

    return fs.readdirSync(dir, { withFileTypes: true })
    .filter(dirent => dirent.isFile())
    .map(dirent => dirent.name);
}

export const createFile = (data,dirname="extracted")=>{
    const filename = "extracted+"+Date.now()+".txt";
    const dir = path.dirname(constante.__workspaceDirname,path.join(dirname,filename));

    fs.writeFile(dir,data,(error)=>{
        if (error){
            console.log(error);
            return;
        }
    })
}

  