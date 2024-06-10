import 'cypress-mochawesome-reporter/cucumberSupport';
import { When, Then, Given } from
"@badeball/cypress-cucumber-preprocessor";
import {Homepage} from "../pages/homePage"

let homePage = new Homepage();

Given (' I visit the home page', ()=>{
    homePage.navigate();
})