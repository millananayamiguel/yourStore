export class CommonPage {
    //  visitLink(url) {
    //  cy.visit(url);    
    //  }
     visitBaseUrl(){
       cy.visit(Cypress.config('baseUrl'))
     }
     
     checkBodyText(text){
      cy.get('body').should('contain', text);
    }
    
}
