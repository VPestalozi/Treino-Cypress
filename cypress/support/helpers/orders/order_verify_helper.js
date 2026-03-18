import { phptravelsOrders } from "../visit/visit_helper";

export const orderVerify = () => {
    phptravelsOrders()
    cy.contains('h2', 'All Orders').should('have.text', 'All Orders');
}