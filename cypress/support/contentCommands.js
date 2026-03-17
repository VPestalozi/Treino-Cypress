Cypress.Commands.add('OrderVerify', () => {
    cy.visit('https://app.phptravels.com/orders');
    cy.contains('h2', 'All Orders').should('have.text', 'All Orders');
})