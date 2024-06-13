const productSearch= '.form-control';
const clickSearch = '.input-group-btn > .btn';
const categoriesSelect ='select[name=category_id]';
const boxCheck = '[type="checkbox"]';
const searchButton ='#button-search';


export class Homepage{
    bodyText(text){
        cy.get('body').should('contain', text);
      }
      searchProduct(){
      cy.get(productSearch).type('MacBook{enter}').should('have.value','MacBook');
      }
      clickSearchProduct(){
        cy.get(clickSearch).should('be.visible').click();
      }   
      selectCategories(){
        cy.get(categoriesSelect).select('Desktops').should('be.visible').and('have.value',20);
      }
      checkSubcategories(){
        cy.get(boxCheck).check().should('be.checked');
      }
      buttonSearch(){
        cy.get(searchButton).click()
      }
      selectProduct(){
       cy.contains('Apple Cinema 30"').should('be.visible').click() 
      }
      selectPhoto(){
        cy.get('.thumbnails')
      }





}