export class LoginPage {

    typeMyAccount(){
          cy.get('[data-toggle="dropdown"]').contains('My Account').should('exist').and('have.text','My Account')
       //  cy.get('.caret').select('Register').should('be.visible')
         //cy.get('.dropdown-menu > :nth-child(1) > a')
        // cy.get('a[href="https://opencart.abstracta.us:443/index.php?route=account/register"]').should('not.be.visible').select('Register')
        

    }






}