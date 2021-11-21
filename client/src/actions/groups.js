import axios from "axios";
import groupRouter from "../../../server/routes/groups.js";
import { IP, SERVER_PORT, DELETE_GROUP } from "../utils/types.js";

const baseUrl = `${IP}:${SERVER_PORT}/api/groups`;

// export const delete_group_by_id = (groupId) => async
// (dispatch) => {
//     try {
//         await axios.delete(groupRouter + groupId);
//         dispatch({ type: "DELETE_GROUP", payload: groupId});
//     } catch(err) {
//         console.log(err.message);
//     }
// };