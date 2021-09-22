class User{
    constructor(){
        this.id = Number;
        this.email = String;
        this.firstName = String;
        this.lastName = String;
        this.country = String;
        this.subject = String; 
        this.checked = Boolean;
    }
    getId(){
        return this.id
    }
    setId (val) { 
        return this.id = val;
    }
        
    getEmail(){
        return this.email;
    }
    setEmail (value) { 
        if (typeof value !== "string" || !value.includes("@")) {
            throw "emailError";
          }
        return this.email = value;
    }

    getFirstName (){
        
        return this.firstName;
    }
    setFirstName(value) { 
        if (typeof value !== "string" || value.length == 0 ) {
            throw "firstNameError";
          }
        return this.firstName = value;
        }
    getLastName(){
        return this.lastName;
    }
    setLastName (value) { 
        if (typeof value !== "string" || value.length == 0 ) {
            throw "lastNameError";
        }
        return this.lastName = value;
    }

    getCountry(){
        return this.country;
    }

    setCountry (value) { 
        return this.country = value;
    }

    getSubject(){
        return this.subject;
    }

    setSubject (value) { 
        if (typeof value !== "string") {
            throw new TypeError(`String expected, got ${type}.`);
          }
        return this.subject = value;
    }

    getChecked() {
        return this.checked;
    }

    setChecked(value) { 
        return this.checked = value;
    }
}