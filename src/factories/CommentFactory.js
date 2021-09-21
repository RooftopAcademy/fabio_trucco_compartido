class Comment{
    constructor(){
        this.target = Number; // Id of the product it refers
        this.body = String;
        this.userName = String;
    }
    getTarget(){
        return this.target;
    }
    setTarget(value){
        return this.target = value;
    }
    getBody(){
        return this.body;
    }
    setBody(value){
        return this.body = value;
    }
    getUserName(){
        return this.userName;
    }
    setUserName(value){
        return this.userName = value;
    }
}

class CommentFactory{
    static create(obj){
        let comment = new Comment;

        comment.setTarget(obj["postId"])
        comment.setBody(obj["body"])
        comment.setUserName(obj["name"])

        return comment;
    }
}