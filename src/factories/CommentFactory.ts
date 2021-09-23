class UserComment{

    private _target: number
    private _body: string
    private _userName: string

    constructor(){
        this._target = null; // Id of the product it refers
        this._body = '';
        this._userName = '';
    }

    getTarget(){
        return this._target;
    }

    setTarget(value: number){
        return this._target = value;
    }
    getBody(){
        return this._body;
    }
    setBody(value: string){
        return this._body = value;
    }
    getUserName(){
        return this._userName;
    }
    setUserName(value: string){
        return this._userName = value;
    }
}

class CommentFactory{
    static create(obj){
        let comment = new UserComment;

        comment.setTarget(obj["postId"])
        comment.setBody(obj["body"])
        comment.setUserName(obj["name"])

        return comment;
    }
}