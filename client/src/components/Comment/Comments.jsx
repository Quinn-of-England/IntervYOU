import React, { useEffect } from 'react'
import { useDispatch } from "react-redux"; //add useSelector when uncomment below
import Post from "../Post/Post";
import { getComments } from "../../actions/comments.js";
import Comment from "../Comment/Comment";

const Comments = () => {
        //dummy comments to be replaced
    const allComments = [
        {
            id: 1,
            user: "u/quinn",
            description: "Damn react has a lot of exceptions and different cases",
        },
        {
            id: 2,
            user: "u/kawwas",
            description: "I meaaan its just practice my guy you gotta just have done it for an entire summer its easy ;) ",
        },
        {
            id: 3,
            user: "u/John",
            description: "I dunno about yall but I got this backend shit taken care of real easy",
        },
        {
            id: 4,
            user: "u/NichH",
            description: "Yo hopefully the teacher will be impressed if posts, groups and comments are functional",
        },
    ];

    // const comments = useSelector((state) => state.comments);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getComments());
      }, [dispatch]);

    return (
        <>
            {/* TODO: Add Styles Here for Comments Title */}
            <div>
                Comments
            </div>
            {allComments.map(({ id, ...comment}) => (
                <Comment key={id} {...comment} />
            ))}
        </>
    )
}

export default Comments;
