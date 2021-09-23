import { commentItem } from "./commentItem";

export default function commentsList(comments){
    return comments.map((comment) => commentItem(comment));
}

