export class CommonPage {
   
    //Creamos nuestras funciones para que sean usadas en los steps-definitions
   //En la Clase CommonPage vamos a tener ubicadas todas las funciones que se puedan usar en más de una página de la web a testear
     visitLink(url) {
     cy.visit(url);    
     }
     visitBaseUrl(){
       cy.visit(Cypress.config('baseUrl'))
     }
  
   
 
  
 
 
 
   }