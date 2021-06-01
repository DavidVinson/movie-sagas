//reducer for omdb api
const omdb = (state = [], action) => {
    switch (action.type) {
        case 'SET_OMDB_SEARCH':
            return action.payload;
        case 'RESET_OMDB_STORE':
            return [];
        default:
            return state;
    }
}

export default omdb;
