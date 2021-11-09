import { CREATE_POST, GET_POSTS, EDIT_POST, DELETE_POST } from '../utils/types.js'; 

export default (posts = [], action) => {
  switch (action.type) {
    case GET_POSTS:
      return action.payload.data;
    case CREATE_POST:
      return [...posts, action.payload];
    case EDIT_POST:
      return posts.map((p) => (p._id === action.payload.id ? action.payload : p));
    case DELETE_POST:
      return posts.filter((p) => p._id !== action.payload); 
    default:
      return posts;
  };
}
