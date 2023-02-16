export const current_year = (new Date()).getFullYear();
export const greater_year = current_year + 15;
export const smaller_year = 1800;


export const validateTitle = (value) => {
    if(!value) {
        return `Veuillez entrer un titre pour ce film.`
    }
    if(value.length > 150) {
        return `Ce titre est trop long ( max 150 caractères )`
    }
    return true;
}

export const validateYear = (value) => {
    const current_year = (new Date()).getFullYear();
    if(!value) {
        return `Veuillez entrer une année de sortie pour ce film.`
    }
    if(value < smaller_year || value > greater_year) {
        const custom = value < smaller_year? `êtes vous sûr⋅e que ce film soit sorti avant  ${smaller_year}? ` : `êtes vous sûre que ce film sortira dans plus de ${greater_year - current_year} ans ?`;
        return `L'année passée semble invalide: ${custom}`;
    }
    return true;
}
