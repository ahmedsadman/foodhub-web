const baseImagePath = 'http://localhost:3000';

export const getImagePath = imgPath => {
    let newPath = imgPath.replace(/\\/g, '/');
    return `${baseImagePath}/${newPath}`;
};
