class UIError{
    constructor(){
        this.code = Number;
        this.source = String;
        this.message = String;
    }
    getCode(){
        return this.code;
    }
    setCode(val){
        return this.code = val;
    }

    getSource(){
        return this.source;
    }
    setSource(val){
        return this.source = val;
    }
    getMessage(){
        return this.message;
    }
    setMessage(val){
        return this.message = val;
    }
}