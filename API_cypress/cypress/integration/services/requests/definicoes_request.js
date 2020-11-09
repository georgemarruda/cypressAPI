/// <reference types="cypress" />


function incluirDefinicoes(corpo_request) {

    return cy.request({
        method: 'POST',
        url: 'agente/ponto/definicoes/incluir',
        failOnStatusCode: false,
        body: corpo_request
    })
}

export { incluirDefinicoes }
