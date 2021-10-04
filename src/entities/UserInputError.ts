export default class UserInputError{

    private _inputId: string
    private _containerId: string
    private _message: string

    constructor(input: string, container: string, message: string){

        this._inputId = input;
        this._containerId = container;
        this._message = message;

    }

    public getInputId() {
        return this._inputId;
    }

    public setInputId(value: string) : string {
        return this._inputId = value;
    }

    public getContainertId() {
        return this._containerId;
    }

    public setContainerId(value: string) : string {
        return this._containerId = value;
    }

    public getMessage() {
        return this._message;
    }

    public setMessage(value: string) : string {
        return this._message = value;
    }
}