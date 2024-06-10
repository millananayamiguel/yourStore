import 'cypress-mochawesome-reporter/cucumberSupport';
import { When, Then, Given } from
"@badeball/cypress-cucumber-preprocessor";
import { Homepage } from "../pages/homePage"

let homePage = new Homepage();

Given (' I visit the home page', (baseUrl)=>{
    homePage.navigate(baseUrl);
})
When("I check that the page contain the text Your Store  ",(text)=>{
    homePage.bodyText(text);
  })