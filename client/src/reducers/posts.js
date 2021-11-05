export default (posts = [], action) => {
  switch (type) {
    case "GET_POSTS":
      return action.payload.data;
    case "CREATE_POST":
      return [...posts, action.payload];
    case "EDIT_POST":
      return posts;
    case "DELETE_POST":
      return posts;
    default:
      return posts;
  }
};
