export class LoginPage {

    typeMyAccount(){
        //cy.get('.dropdown',{timeout:8000}).should('be.visible').first().click()
        cy.get('.dropdown',{timeout:8000}).should('be.visible').eq(0).click()

    }
    selectRegistre(){
        cy.get('.dropdown-menu > :nth-child(1) > a').click()

    }






}