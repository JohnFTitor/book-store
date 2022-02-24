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

// Thunks

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/cSmPQN09DYwSfvKIgiXo';

const addBookToAPI = (payload) => {
  const bodyObj = {
    item_id: payload.id,
    title: {
      bookTitle: payload.title,
      bookAuthor: payload.author,
    },
    category: payload.category,
  };
  return async (dispatch) => {
    const response = await fetch(`${baseURL}/books`, {
      method: 'POST',
      body: JSON.stringify(bodyObj),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 201) { // Created
      dispatch(addBook(payload));
    }
  };
};

const getBooks = async (dispatch) => {
  const response = await fetch(`${baseURL}/books`);
  if (response.status === 200) { // There are books
    const booksObject = await response.json();
    const arrayOfBooks = Object.entries(booksObject);
    arrayOfBooks.forEach((book) => {
      const [id, value] = book;
      const { title, category } = value[0];
      const { bookTitle, bookAuthor } = title;

      const newBook = {
        id,
        title: bookTitle,
        author: bookAuthor,
        category,
      };

      dispatch(addBook(newBook));
    });
  }
};

const deleteBook = (id) => (
  async (dispatch) => {
    const response = await fetch(`${baseURL}/books/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const message = await response.text();
    if (message === 'The book was deleted successfully!') {
      dispatch(removeBook(id));
    }
  }
);

export { addBookToAPI, getBooks, deleteBook };
