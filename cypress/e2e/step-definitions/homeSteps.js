import 'cypress-mochawesome-reporter/cucumberSupport';
import { When, Then, Given } from
"@badeball/cypress-cucumber-preprocessor";
import { Homepage } from "../pages/homePage"

let homePage = new Homepage();

Given (' I visit the home page', (baseUrl)=>{
    homePage.navigate(baseUrl);
})
When ('I search product',()=>{
    homePage.searchProduct();
})
When('I click search product',()=>{
    homePage.clickSearchProduct();
})
When('I select categories',()=>{
    homePage.selectCategories();
})
When('I check Subcategories',()=>{
    homePage.checkSubcategories();
})
When('I button search',()=>{
    homePage.buttonSearch();
})
When('I select Product',()=>{
    homePage.selectProduct();
})
When('I select photho',()=>{
    homePage.selectPhoto();
})

