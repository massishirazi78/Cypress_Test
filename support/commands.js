// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })

//Login via gui
Cypress.Commands.add('login_gui', (email, password) => {
  cy.clearCookies()
  cy.visit(Cypress.env('AUTH_URL')+'/account/login')
  cy.get('#Email').type(email)
  cy.get('#Password').type(password)
  cy.get('form').submit();
 // cy.contains('Client list')
})

//Login via request
Cypress.Commands.add('login_request', (email, password, ReturnUrl) => {
  cy.clearCookies()
  var loginObject = {
    "Email":email,
    "Password":password,
    "RememberLogin":false,
    "ReturnUrl":ReturnUrl
  }
})

Cypress.Commands.add('logout', () => {
  
  //cy.get('#mat-expansion-panel-header-0').click()
  cy.get('.insight-logout > use').click()
  cy.contains('You are now logged out')
})


//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
