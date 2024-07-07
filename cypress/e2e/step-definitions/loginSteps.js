import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../pages/loginPage"

let loginPage = new LoginPage();

Given ('I select My Account',()=>{
    loginPage.typeMyAccount();
});
Given('I select Registre',()=>{
    loginPage.selectRegistre();
})
When('I type {string} on the firstName',(firstName)=>{
    loginPage.typeRegistreFirstName(firstName);
})
When('I type {string} on the lastName',(lastName)=>{
    loginPage.typeRegistreLastName(lastName);
})
When('I type {string} on the e-mail',()=>{
    loginPage.typeRegistreEmail();
})
When('I type {string} on the telephone',()=>{
    loginPage.typeRegistreTelephone();
})