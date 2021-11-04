export default (posts = [], { type, payload }) => {
  switch (type) {
    case "GET_POSTS":
      return payload.data;
    case "CREATE_POST":
      return posts;
    case "EDIT_POST":
      return posts;
    case "DELETE_POST":
      return posts;
    default:
      return posts;
  }
};
