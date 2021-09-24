import UserComment from "../models/UserComment";

export default class CommentFactory{
    static create(obj: {postId: number, body: string, name: string}){
        let comment = new UserComment;

        comment.setTarget(obj["postId"])
        comment.setBody(obj["body"])
        comment.setUserName(obj["name"])

        return comment;
    }
}