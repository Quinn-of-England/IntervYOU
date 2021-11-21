// Initial State: Not Authenticated
const initialAuth = { userId: null, userName: null, isAuth: false };

// Update Auth State with Payload from Auth Action
const auth = (authState = initialAuth, { type, payload }) => {
  switch (type) {
    case "AUTH_SUCCESS":
      console.log("here in success");
      return payload;
    case "AUTH_FAILED":
      console.log("here in fail");
      return payload;
    default:
      return authState;
  }
};

export default auth;
