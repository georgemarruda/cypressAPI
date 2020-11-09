/// <reference types="cypress" />


function enderecoConfirmar(corpo_request) {

    return cy.request({
        method: 'POST',
        url: 'agente/endereco/confirmar',
        failOnStatusCode: false,
        body: corpo_request
    })
}

export { enderecoConfirmar }


function enderecoReceber(corpo_request) {
    return cy.request({
        method: 'POST',
        url: 'agente/endereco/receber',
        failOnStatusCode: false,
        body: corpo_request
    })
}

export { enderecoReceber }
