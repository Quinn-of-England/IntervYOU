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


    const allPosts = [
        {
          id: 0,
          title: "Something Fake",
          user: "u/fake_user",
          description:
            "We have a big presentation coming up on Tuesday discussing the progress we have made on the project thus far. Who else doesn't have any work to demonstrate to the professor and the whole class? Good thing we have a speedy programmer hehe ...",
          voteCount: 140,
          currentUserVote: 1,
        },
    ];
    // const comments = useSelector((state) => state.comments);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getComments());
      }, [dispatch]);

    return (
    <>
        {allPosts.map(({ id, ...post }) => (
        <Post key={id} {...post} />
        ))}
        {allComments.map(({ id, ...comment}) => (
          <Comment key={id} {...comment} />
        ))}
    </>
    )
}

export default Comments
