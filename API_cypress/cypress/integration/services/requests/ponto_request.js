/// <reference types="cypress" />


function excluirBatidas(corpo_request) {

    return cy.request({
        method: 'POST',
        url: 'agente/ponto/espelho/excluir',
        failOnStatusCode: false,
        body: corpo_request
    })
}

export { excluirBatidas }

function incluirBatidas(corpo_request) {

    return cy.request({
        method: 'POST',
        url: 'agente/ponto/espelho/incluir',
        failOnStatusCode: false,
        body: corpo_request
    })
}

export { incluirBatidas }

function receberBatidas(corpo_request) {

    return cy.request({
        method: 'POST',
        url: 'agente/ponto/batidas/receber',
        failOnStatusCode: false,
        body: corpo_request
    })
}

export { receberBatidas }

function habilitaCerca(corpo_request) {

    return cy.request({
        method: 'POST',
        url: 'agente/ponto/cerca/habilitar',
        failOnStatusCode: false,
        body: corpo_request
    })
}

export { habilitaCerca }

function habilitaPonto(corpo_request) {

    return cy.request({
        method: 'POST',
        url: 'agente/ponto/habilitar',
        failOnStatusCode: false,
        body: corpo_request
    })
}

export { habilitaPonto }