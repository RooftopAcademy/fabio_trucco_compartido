import UserInputError from './UserInputError';

export default abstract class User {

    protected _id: number
    protected _email: string
    protected _firstName: string
    protected _lastName: string
    protected _country: string
    protected _subject: string
    protected _checked: boolean

    getId(){
        return this._id
    }
    setId (val: number) { 
        return this._id = val;
    }
        
    getEmail(){
        return this._email;
    }

    /**
     * If a setter throws is faulty it throws an InputError
     * with info to be rendered
     */

    setEmail (value: string): string { 
        if (!value.includes('@')) {
            throw new UserInputError('lmail', 'container-form', 'You must enter a valid email'); 
          }
        return this._email = value;
    }

    getFirstName (){
        return this._firstName;
    }

    setFirstName(value: string): string { 
        if (value.length == 0) {
            throw new UserInputError('fname', 'container-form', 'The first name field is required');
          }
        return this._firstName = value;
        }
    getLastName(){
        return this._lastName;
    }
    setLastName (value: string): string { 
        if (value.length == 0) {
            throw new UserInputError('lname', 'container-form', 'The last name field is required');
        }
        return this._lastName = value;
    }

    getCountry(){
        return this._country;
    }

    setCountry (value: string) { 
        return this._country = value;
    }

    getChecked() {
        return this._checked;
    }

    setChecked(value: boolean) { 
        return this._checked = value;
    }
}

