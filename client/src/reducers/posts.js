export default (posts = [], { type, payload }) => {
  switch (type) {
    case "GET_POSTS":
      return payload.data;
    case "CREATE_POST":
      return [...posts, payload.data];
    case "VOTE_POST":
    case "UPDATE_POST":
      return posts.map((p) => (p._id === payload.id ? payload : p));
    case "DELETE_POST":
      return posts.filter((p) => p._id !== payload);
    default:
      return posts;
  }
};
