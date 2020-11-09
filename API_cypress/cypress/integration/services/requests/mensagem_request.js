/// <reference types="cypress" />

function incluirMensagem(corpo_request) {

    return cy.request({
        method: 'POST',
        url: 'agente/mensagem/incluir',
        failOnStatusCode: false,
        body: corpo_request
    })
}

export { incluirMensagem }

function excluirMensagem(corpo_request) {
    return cy.request({
        method: 'POST',
        url: 'agente/mensagem/excluir',
        failOnStatusCode: false,
        body: corpo_request
    })
}

export { excluirMensagem }