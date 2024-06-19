
const categorySelect ='#form-currency > .btn-group > .dropdown-toggle';
const currenci = ':nth-child(1) > .currency-select';

export class CommonPage {
  
    visitBaseUrl(){
      cy.visit(Cypress.config('baseUrl'))

    }

    checkBodyText(text){
     cy.get('body').should('contain', text);
   }
   selectCurrency(){
    cy.get(currenci).contains('€ Euro').should('exist').click();
   }
   currencySelect(){
    cy.get(categorySelect).should('be.visible').click()
    
  }
  
  
   
 
  
 
 
 
   }