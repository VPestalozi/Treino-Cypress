import { orderVerify } from './helpers/orders/order_verify_helper'

Cypress.Commands.add('OrderVerify', () => {
    orderVerify()
})