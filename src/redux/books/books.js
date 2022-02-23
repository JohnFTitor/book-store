// Actions
const ADD_BOOK = 'book-store/books/ADD_BOOk';
const REMOVE_BOOK = 'book-store/books/REMOVE_BOOK';

// Initial State
const initialState = [];

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default reducer;

// Action Creators
const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  id: payload,
});

export { addBook, removeBook };
