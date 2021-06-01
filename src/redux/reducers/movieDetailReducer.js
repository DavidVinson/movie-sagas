//store movie detail page information
const movieDetail = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIE_DETAIL':
            return action.payload;
        default:
            return state;
    }
}


export default movieDetail;