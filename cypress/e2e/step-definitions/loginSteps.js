import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../pages/loginPage"

let loginPage = new LoginPage();

Given ('I select My Account',()=>{
    loginPage.typeMyAccount();
})