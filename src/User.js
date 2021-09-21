class User{
    constructor(){
        this.id = String;
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
    setId (value) { 
        return this.id = value;
        }
        
    getEmail(){
        return this.email;
    }
    setEmail (value) { 
        return this.email = value;
        }

    getFirstName (){
        return this.firstName;
    }
    setFirstName(value) { 
        return this.firstName = value;
        }
    getLastName(){
        return this.lastName;
    }
    setLastName (value) { 
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
        return this.subject = value;
        }
    getChecked() {
        return this.checked;
        }
    setChecked(value) { 
        return this.checked = value;
        }
}