export const getFolderPathFromParams = (params: any): string => {
    console.log(params)
    return params['*'] ? `${params['*']}` : '';
};
