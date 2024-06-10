


export class Homepage{
    bodyText(text){
        cy.get('body').should('contain', text);
      }
      

}