/// <reference types="cypress" />

function incluirPesquisa(corpo_request) {

    return cy.request({
        method: 'POST',
        url: 'agente/rh/pesquisa/incluir',
        failOnStatusCode: false,
        body: corpo_request
    })
}

export { incluirPesquisa }

function responderPesquisa(corpo_request) {

    return cy.request({
        method: 'POST',
        url: 'agente/rh/pesquisa/responder',
        failOnStatusCode: false,
        body: corpo_request
    })
}

export { responderPesquisa }

function respostasPesquisa(corpo_request) {

    return cy.request({
        method: 'POST',
        url: 'agente/rh/pesquisa/respostas',
        failOnStatusCode: false,
        body: corpo_request
    })
}

export { respostasPesquisa }


// --- Exclusão de Pesquisa e Respostas ---
function excluirPesquisa(corpo_request) {
    return cy.request({
        method: 'POST',
        url: '/agente/rh/pesquisa/excluir',
        failOnStatusCode: false,
        body: corpo_request
    })
}

export { excluirPesquisa }

function excluirRespostas(corpo_request) {
    return cy.request({
        method: 'POST',
        url: 'agente/rh/pesquisa/respostas/excluir',
        failOnStatusCode: false,
        body: corpo_request
    });
}
export { excluirRespostas}