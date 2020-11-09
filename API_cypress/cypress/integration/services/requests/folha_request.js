/// <reference types="cypress" />


function incluirFolha(corpo_request) {

    return cy.request({
        method: 'POST',
        url: 'agente/folha/incluir',
        failOnStatusCode: false,
        body: corpo_request
    })
}

export { incluirFolha }


function excluirFolha(corpo_request) {
    return cy.request({
        method: 'POST',
        url: 'agente/folha/excluir',
        failOnStatusCode: false,
        body: corpo_request
    })
}

export { excluirFolha }