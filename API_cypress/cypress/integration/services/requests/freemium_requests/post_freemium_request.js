/// <reference types="cypress" />

function addUserLimit(enviroment, corpo_request, cnpj) {

    return cy.request({
        method: 'POST',
        url: Cypress.env(enviroment) + 'api/LimiteUsuarios/?cnpjlicenciado=' + cnpj,
        failOnStatusCode: false,
        body: corpo_request
    })
}

function userLimitAddColaborador(enviroment, corpo_request) {

    return cy.request({
        method: 'POST',
        url: Cypress.env(enviroment) + '/api/LimiteUsuarios/PodeIncluirColaborador',
        failOnStatusCode: false,
        body: corpo_request
    })
}

function addFolha(enviroment, corpo_request) {

    return cy.request({
        method: 'POST',
        url: Cypress.env(enviroment) + '/api/FolhaDePagamento',
        failOnStatusCode: false,
        body: corpo_request
    })
}

function colaborador(enviroment, corpo_request) {

    return cy.request({
        method: 'POST',
        url: Cypress.env(enviroment) + '/api/Colaborador',
        failOnStatusCode: false,
        body: corpo_request
    })
}

export { addUserLimit, userLimitAddColaborador, addFolha, colaborador } 