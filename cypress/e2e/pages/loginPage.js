const myAccountType    ='.dropdown';
const registreSelect   ='.dropdown-menu > :nth-child(1) > a';
const registreFirstName='#input-firstname';
const registreLastName ='#input-lastname';
const registreEmail    ='#input-email';
const registreTelephone    ='#input-telephone';


export class LoginPage {

    typeMyAccount(){
        //cy.get('.dropdown',{timeout:8000}).should('be.visible').first().click()
        cy.get(myAccountType,{timeout:8000}).should('be.visible').eq(0).click()

    }
    selectRegistre(){
        cy.get(registreSelect).should('be.visible').click()

    }
    typeRegistreFirstName(){
        cy.get(registreFirstName).should('be.empty').type('Miguel Angel').should('have.value','Miguel Angel')
    }
    typeRegistreLastName(){
        cy.get(registreLastName).type('Millan Anaya').should('be.empty').and('have.value','Millan Anaya')
    }
    typeRegistreEmail(){
        cy.get(registreEmail).type('acropolis24h@gmail.com').should('be.empty').and('have.value','acropolis24h@gmail.com')
    }
    typeRegistreTelephone(){
        cy.get(registreTelephone).type('658458740').should('be.empty').and('have.value','658458740')
    }






}