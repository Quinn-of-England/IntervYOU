// Initial State: Not Authenticated
const initialAuth = { userId: null, userName: null, isAuth: null };

// Update Auth State with Payload from Auth Action
const auth = (authState = initialAuth, { type, payload }) => {
  switch (type) {
    case "AUTH_SUCCESS":
      return payload;
    case "AUTH_FAILED":
      return payload;
    default:
      return authState;
  }
};

export default auth;
