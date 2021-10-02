import Store from "../entities/Store";
import commentInterface from "../interfaces/CommentInterface";
import saveProperComments from "./saveProperComments";

export default function selectComments(store: Store, json: commentInterface[]): void {

    json.forEach((comment: commentInterface) => {

      saveProperComments(store, comment);

    })
    
}