import { Folder } from "../model/Folder.interface";

export const getChildrenByFolderName = async (folderName: any): Promise<Folder[]> => {
    let url = `/sandbox/data.json`
    if(folderName) {
        url = `/sandbox/${folderName}/index.json`
    }
    const response: any = await fetch(url)
    const folders = await response.json();
    return folders ? folders.data : [];
};