/// <reference types="cypress" />


function inconsistenciaAbono(corpo_request) {

    return cy.request({
        method: 'POST',
        url: 'agente/abono/inconsistencia',
        failOnStatusCode: false,
        body: corpo_request
    })
}

export { inconsistenciaAbono }