/// <reference types="cypress" />


function GestorRhIncluir(corpo_request) {
    
    return cy.request({
        method: 'POST',
        url: '/agente/gestor/rhincluir',
        failOnStatusCode: false,
        body: corpo_request
    })
}

export { GestorRhIncluir }