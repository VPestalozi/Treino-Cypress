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
    cy.contains('p', 'Sign in to your account').should('have.text', 'Sign in to your account');
    cy.contains('label', 'Email').next('input').type(email);
    cy.contains('label','Password').closest('.mb-4').find('input').type(password);
    cy.contains('button', 'Sign in').click();
    cy.contains('h1', 'Dashboard' ).should('have.text', 'Dashboard');
})

Cypress.Commands.add('logout', () => {
    cy.visit('https://app.phptravels.com/dashboard');
    cy.contains('h1', 'Dashboard' ).should('have.text', 'Dashboard');
    cy.contains('div', 'Dashboard').parent().find('button').click();
    cy.contains('p','client').click();
    cy.contains('span','Sign Out').click();
    cy.contains('p', 'Sign in to your account').should('have.text', 'Sign in to your account');
})