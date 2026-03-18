import { phptravels } from "../visit/visit_helper";

export const loginHelper = (email, password) => {
    phptravels()
    cy.contains('p', 'Sign in to your account').should('have.text', 'Sign in to your account');
    cy.contains('label', 'Email').next('input').type(email);
    cy.contains('label', 'Password').closest('.mb-4').find('input').type(password);
    cy.contains('button', 'Sign in').click();
    cy.contains('h1', 'Dashboard').should('have.text', 'Dashboard');
}