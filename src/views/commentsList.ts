import commentItem from "./commentItem";
import UserComment from "../models/UserComment";

export default function commentsList(comments: UserComment[]){
    return comments.map((comment) => commentItem(comment));
}

