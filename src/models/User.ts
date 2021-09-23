class User{

    protected _id: number
    protected _email: string
    protected _firstName: string
    protected _lastName: string
    protected _country: string
    protected _subject: string
    protected _checked: boolean

    constructor(){
        this._id = null;
        this._email = '';
        this._firstName = '';
        this._lastName = '';
        this._country = '';
        this._subject = '';
        this._checked = true;
    }

    getId(){
        return this._id
    }
    setId (val: number) { 
        return this._id = val;
    }
        
    getEmail(){
        return this._email;
    }
    setEmail (value: string): string { 
        if (typeof value !== "string" || !value.includes("@")) {
            throw "emailError";
          }
        return this._email = value;
    }

    getFirstName (){
        return this._firstName;
    }

    setFirstName(value: string): string { 
        if (typeof value !== "string" || value.length == 0 ) {
            throw "firstNameError";
          }
        return this._firstName = value;
        }
    getLastName(){
        return this._lastName;
    }
    setLastName (value: string): string { 
        if (typeof value !== "string" || value.length == 0 ) {
            throw "lastNameError";
        }
        return this._lastName = value;
    }

    getCountry(){
        return this._country;
    }

    setCountry (value: string) { 
        return this._country = value;
    }

    getSubject(){
        return this._subject;
    }

    setSubject (value: string) { 
        return this._subject = value;
    }

    getChecked() {
        return this._checked;
    }

    setChecked(value: boolean) { 
        return this._checked = value;
    }
}