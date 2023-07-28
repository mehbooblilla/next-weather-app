

const initialState = {
    searchHistory: [],
  };
  
  const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_SEARCH_HISTORY':
        return {
          ...state,
          searchHistory: [action.payload, ...state.searchHistory],
        };
      default:
        return state;
    }
  };
  
  export default weatherReducer;
  