
Feature: visit the home page

    Background: Visit page home  
        Given I visit my url
        And   I select currency
        And I select "contain" the text "€ Euro"

    Scenario: Contain text 
        Given I check that the page contain the text "Your Store"
        When  I search product
        And   I click search product
        And   I select categories
        And   I check Subcategories
        And  I button search
        And  I select Product
        And I select photho

       # Scenario: Search in product