class UIError{

    private _code: number    
    private _source: string
    private _message: string

    constructor(){
        this._code = null;
        this._source = "";
        this._message = "";
    }

    getCode(){
        return this._code;
    }

    setCode(val: number){
        return this._code = val;
    }

    getSource(){
        return this._source;
    }

    setSource(val: string){
        return this._source = val;
    }
    getMessage(){
        return this._message;
    }
    
    setMessage(val: string){
        return this._message = val;
    }
}