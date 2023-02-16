import {current_year, greater_year, smaller_year, validateTitle, validateYear} from "@/helpers/FormValidation";

export const arrayRange = (start, stop, step = 1) => (
    Array.from(
        { length: (stop - start) / step + 1 },
        (value, index) => start + index * step
    )
)

export const moviesField = {
    title: {
        text: 'Titre',
        rules: validateTitle
    },
    poster: {
        text: 'Url Image'
    },
    director: {
        text: 'Directeur⋅trice'
    },
    year: {
        text: 'Année',
        rules: validateYear,
        as: 'select',
        options: arrayRange(smaller_year, greater_year),
        value: current_year
    },
    duration: {
        text: 'Durée ( min )',
        type: 'number',
        min: 0
    },
    type: {
        text: 'Catégorie',
        type: 'radio',
        options: [
            {text: 'Film', value: 'movie'},
            {text: 'Série', value: 'serie'},
        ],
    },
    season: {
        text: 'Saisons',
        type: 'number',
        value: 1,
        min: 0
    }
}



