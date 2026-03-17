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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, password) => {
    cy.visit('https://app.phptravels.com/login');
    cy.contains('label', 'Email').next('input').type(email);
    cy.contains('label','Password').closest('.mb-4').find('input').type(password);
    cy.get("button[class='absolute right-3 top-1/2 -translate-y-1/2 text-[#666687] hover:text-[#32324d] transition']").click();
    cy.get("button[class='w-full ds-btn-primary']").click();
    cy.contains('h1', 'Dashboard' );
})
