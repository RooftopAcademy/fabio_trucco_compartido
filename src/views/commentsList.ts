import commentItem from "./commentItem";
import UserComment from "../entities/UserComment";

export default function commentsList(comments: UserComment[]){
    return comments.map((comment) => commentItem(comment));
}

