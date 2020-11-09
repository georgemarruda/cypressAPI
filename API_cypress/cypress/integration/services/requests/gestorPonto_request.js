/// <reference types="cypress" />


function GestorPontoIncluir(corpo_request) {
    
    return cy.request({
        method: 'POST',
        url: '/agente/gestor/incluir',
        failOnStatusCode: false,
        body: corpo_request
    })
}

export { GestorPontoIncluir }

function GestorPontoExcluir(corpo_request) {
    
    return cy.request({
        method: 'POST',
        url: '/agente/gestor/excluir',
        failOnStatusCode: false,
        body: corpo_request
    })
}

export { GestorPontoExcluir }