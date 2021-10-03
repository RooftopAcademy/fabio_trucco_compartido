import Store from "../entities/Store";
import CommentInterface from "../interfaces/CommentInterface";
import saveProperComments from "./saveProperComments";

export default function selectComments(store: Store, json: CommentInterface[]): void {

    json.forEach((comment: CommentInterface) => {

      saveProperComments(store, comment);

    })
    
}