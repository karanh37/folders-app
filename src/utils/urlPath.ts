export const getFolderPathFromParams = (params: any): string => {
    return params['*'] ? `${params['*']}` : '';
};
