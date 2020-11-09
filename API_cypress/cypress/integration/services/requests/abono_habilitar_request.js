/// <reference types="cypress" />


function habilitaAbono(corpo_request) {

    return cy.request({
        method: 'POST',
        url: 'agente/abono/habilitar',
        failOnStatusCode: false,
        body: corpo_request
    })
}

export { habilitaAbono }