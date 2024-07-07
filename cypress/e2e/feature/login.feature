Feature: Login Store
 Background: Visit page home  
        Given I visit my url

    Scenario: Your Personal Details 
    When  I select My Account
    And   I select Registre
    And   I type "miguel angel" on the firstName
    And   I type "millan Anaya" on the lastName
    And   I type "acropolis24h@gmail.com" on the e-mail
    Then  I type "658458740" on the telephone