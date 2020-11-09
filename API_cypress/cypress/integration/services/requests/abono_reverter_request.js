/// <reference types="cypress" />


function reverterAbono(corpo_request) {

    return cy.request({
        method: 'POST',
        url: 'agente/abono/reverter',
        failOnStatusCode: false,
        body: corpo_request
    })
}

export { reverterAbono }