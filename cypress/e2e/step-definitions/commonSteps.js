import 'cypress-mochawesome-reporter/cucumberSupport';
import { When, Then, Given } from
"@badeball/cypress-cucumber-preprocessor";

import { CommonPage} from "../pages/commonPage"

let commonPage= new CommonPage();


 
Given("I visit my url", (baseUrl) => {
  commonPage.visitBaseUrl(baseUrl);
});
When("I check that the page contain the text {string}",(text)=>{
  commonPage.checkBodyText(text);
});
When("I select {string} the text {string}",()=>{
  commonPage.selectCurrency();
})
When('I select currency',()=>{
  commonPage.currencySelect();
})

   