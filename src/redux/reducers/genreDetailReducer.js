//store genre info based on selected movie for movie detail page
const genreDetail = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRE_DETAIL':
            return action.payload;
        default:
            return state;
    }
}

export default genreDetail;