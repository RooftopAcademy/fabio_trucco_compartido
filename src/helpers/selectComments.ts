import Store from "../models/Store";
import commentInterface from "../interfaces";
import saveProperComments from "./saveProperComments";

export default function selectComments(store: Store, json: commentInterface[]): void {

    json.forEach((comment: commentInterface) => {
      saveProperComments(store, comment);
    })
}