/// <reference types="cypress" />

function excluirAbono(corpo_request) {

    return cy.request({
        method: 'POST',
        url: 'agente/abono/excluir',
        failOnStatusCode: false,
        body: corpo_request
    })
}

export { excluirAbono }