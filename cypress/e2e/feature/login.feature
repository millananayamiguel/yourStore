Feature: Login Store
 Background: Visit page home  
        Given I visit my url

    Scenario: Your Personal Details 
    When  I select My Account
    And   I select Registre
    And   I type "miguel angel" on the firstName
    And   I type "millan Anaya" on the lastName
    And   I type "acropolis24h@gmail.com" on the e-mail
    And   I type "658458740" on the telephone
    And   I type "Labrador" on the password credential input
    And   I confirm "Labrador" on the confirm password