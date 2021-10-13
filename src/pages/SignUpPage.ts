import PageInterface from "../interfaces/PageInterface";
import signUpComponent from '../components/signUpComponent';
import displayHamburgerMenu from '../helpers/displayHamburger';
import backToTop from '../helpers/backToTop';
import read from '../helpers/readRegisterFormInputs';
import runSuccessStylingOnRegisterForm from '../helpers/runSuccessStylingOnRegisterForm';
import revertSuccessStylingOnRegisterForm from '../helpers/revertSuccessStylingOnRegisterForm';
import showMessageOnUserSubmit from '../helpers/showMessageOnUserSubmit';
import RegisteredUserFactory from "../factories/RegisteredUserFactory";
import UserInputError from "../entities/UserInputError";
import showError from '../helpers/showError';
import { store } from '../index';

export default class SignUpPage implements PageInterface{

    render(c: HTMLElement): void {
        c.innerHTML = signUpComponent();
    }

    registerEvents(): void {

        displayHamburgerMenu();
        
        backToTop();

        submitUser();

    }

}


function submitUser(): void {

    let submitButton: HTMLElement = document.getElementById("submit") as HTMLElement;
  
    submitButton?.addEventListener("click", function(e): void {
      
        e.preventDefault();

        try{

          let newRUser = RegisteredUserFactory.create(store, read())

          store.fetchUser(newRUser);

          runSuccessStylingOnRegisterForm();

          showMessageOnUserSubmit('submit-click', 'Great! We have sent you an emil to confirm your account', 'success-message');

          setTimeout( revertSuccessStylingOnRegisterForm, 3000 );

        }
        catch(err) {

          if (err instanceof UserInputError) {

            return showError(err.getInputId(), err.getContainertId(), err.getMessage())

          }
          alert(err.message)
        }
    })
  }