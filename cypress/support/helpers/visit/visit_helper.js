import { urls } from '../../urls'

export const phptravels = () => {
    cy.visit(urls.login)
}

export const phptravelsDashboard = () => {
    cy.visit(urls.dashboard)
}

export const phptravelsOrders = () => {
    cy.visit(urls.orders);
}
