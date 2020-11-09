/// <reference types="cypress" />


function incluirAbono(corpo_request) {

    return cy.request({
        method: 'POST',
        url: 'agente/abono/incluir',
        failOnStatusCode: false,
        body: corpo_request
    })
}

export { incluirAbono }