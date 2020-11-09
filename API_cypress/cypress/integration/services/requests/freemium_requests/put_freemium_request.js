/// <reference types="cypress" />

function updateUserLimit(enviroment,corpo_request, cnpj) {

    return cy.request({
        method: 'PUT',
        url: Cypress.env(enviroment) + '/api/LimiteUsuarios/?cnpjlicenciado='+ cnpj,
        failOnStatusCode: false,
        body: corpo_request
    })
}

function colaboradorAtivacao (enviroment, corpo_request) {

    return cy.request({
        method: 'PUT',
        url: Cypress.env(enviroment) + '/api/Colaborador/Ativacao',
        failOnStatusCode: false,
        body: corpo_request
    })
}

export { updateUserLimit, colaboradorAtivacao }