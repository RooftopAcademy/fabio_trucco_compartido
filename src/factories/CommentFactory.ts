import UserComment from "../entities/UserComment";
import commentInterface from "../interfaces/CommentInterface";

export default class CommentFactory{
    static create(obj: commentInterface){
        let comment = new UserComment;

        comment.setTarget(obj["postId"])
        comment.setBody(obj["body"])
        comment.setUserName(obj["name"])

        return comment;
    }
}