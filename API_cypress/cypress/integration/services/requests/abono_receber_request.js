/// <reference types="cypress" />


function receberAbono(corpo_request) {

    return cy.request({
        method: 'POST',
        url: 'agente/abono/receber',
        failOnStatusCode: false,
        body: corpo_request
    })
}

export { receberAbono }