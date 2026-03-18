import { phptravelsDashboard } from "../visit/visit_helper";

export const logoutHelper = () => {
    //Condição inicial de logout é estar na página de dashboard
    phptravelsDashboard();

    //Realização e validação do logout
    cy.contains('h1', 'Dashboard').should('have.text', 'Dashboard');
    cy.contains('div', 'Dashboard').parent().find('button').click();
    cy.contains('p', 'client').click();
    cy.contains('span', 'Sign Out').click();
    cy.contains('p', 'Sign in to your account').should('have.text', 'Sign in to your account');
}