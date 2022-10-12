import path from 'path';
import { fileURLToPath } from 'url';

//get current path & current directory path
export const __appFilename = fileURLToPath(import.meta.url);
export const __rootDirname = path.dirname(__appFilename);

//workspace directory path 
export const __workspaceDirname = path.join(__rootDirname,('workspaces').toLowerCase());