export interface Folder {
    name: string,
    type: FileTypes,
}

export enum FileTypes {
    Folder='folder',
    File='file'
}