/// <reference types="cypress" />


function incluirColaborador(corpo_request) {

    return cy.request({
        method: 'POST',
        url: 'agente/colaborador/salvar',
        failOnStatusCode: false,
        body: corpo_request
    })
}

export { incluirColaborador }


function desativaColaborador(corpo_request) {
    return cy.request({
        method: 'POST',
        url: 'agente/colaborador/desativar',
        failOnStatusCode: false,
        body: corpo_request
    })
}

export { desativaColaborador } 
