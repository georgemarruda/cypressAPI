/// <reference types="cypress" />


function incluirDeclaracaoIr(corpo_request) {

    return cy.request({
        method: 'POST',
        url: 'agente/declaracao/incluir',
        failOnStatusCode: false,
        body: corpo_request
    })
}

export { incluirDeclaracaoIr }


function excluirDeclaracaoIr(corpo_request) {
    return cy.request({
        method: 'POST',
        url: 'agente/declaracao/excluir',
        failOnStatusCode: false,
        body: corpo_request
    })
}

export { excluirDeclaracaoIr }
