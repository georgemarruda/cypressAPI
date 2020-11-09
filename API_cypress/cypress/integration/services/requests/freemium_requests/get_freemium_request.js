/// <reference types="cypress" />

function allFolhas(enviroment, cnpj) {

    return cy.request({
        method: 'GET',
        url: Cypress.env(enviroment) + 'api/FolhaDePagamento/?NrInscEmpregador='+ cnpj,
        headers: {
            'Content-Type': 'application/json',
            'awsauthtoken': 'eyJraWQiOiJVWEkwNXFBb2VDeTJPY1BGM21iOGJtWXlyWGk4N1N3K1ZqWXhIRWV3K2RVPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI5ZjMyNjJiYy1kYTRhLTQzNWEtOTk5NC00Zjk0MTU5NDM4ZmYiLCJhdWQiOiI0NXFvZGY1aGw0Z2dydjVva2k4YzlqZ2diaiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6ImFlOGNlNzVjLWUzM2QtMTFlOC1iN2UxLWQzOTQ3MjNmOTM0YyIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNTQxNjcxNDY5LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9MakE3QjVXT08iLCJjb2duaXRvOnVzZXJuYW1lIjoiMDM3MTc2MTIzOTUiLCJleHAiOjE1NDE4MTgwNTYsImlhdCI6MTU0MTgxNDQ1NiwiZmFtaWx5X25hbWUiOiJSb3NhbmlyYSIsImVtYWlsIjoibGluaGFyZXMuYWxpc3NvbkBpZmNlLmVkdS5iciJ9.ZF7RpuCYDfK2xnhQd0yCxQC6kn5NS0wPlZunZ3wXrg24dRNzjVmiwd4p6iZD7N3OWCxaQiu6sDVBodKlRMlRP3WysAndhzLx22L8a6A66QHF5xy9BDSfgvYpRwvzrDVqzC4fhGtJLxcRiD2uy8Nspe-8JAPC4AkAF62ZnRPd3Ny8Mh4LoGyFT2belkLpjRR9q77vATVFZmFJj805rR5xhZMHqZ6aaOWQy5V9VDOtY2bLv6vXYAd5HeRwEQp096BRSRPFsOWXBA0UVVOa3XBkfFruDqlCPX8ML7nQLtUK1AzogtqghJ4kN8PW1e2RuF9PWNJ_0HfCA8Hqe7SK56_Enw'
          },
        failOnStatusCode: false
    })
}

function usersLimit(enviroment, cnpj) {

    return cy.request({
        method: 'GET',
        url: Cypress.env(enviroment) + 'api/LimiteUsuarios/?cnpjlicenciado='+ cnpj,
        failOnStatusCode: false
    })
}

function profile (enviroment, cnpj, cpf) {

    return cy.request({
        method: 'GET',
        url: Cypress.env(enviroment) + 'api/Colaborador/Profile?nrInscEmpregador='+ cnpj + '&cpf='+ cpf,
        headers: {
            'Content-Type': 'application/json',
            'awsauthtoken': 'eyJraWQiOiJVWEkwNXFBb2VDeTJPY1BGM21iOGJtWXlyWGk4N1N3K1ZqWXhIRWV3K2RVPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI5ZjMyNjJiYy1kYTRhLTQzNWEtOTk5NC00Zjk0MTU5NDM4ZmYiLCJhdWQiOiI0NXFvZGY1aGw0Z2dydjVva2k4YzlqZ2diaiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6ImFlOGNlNzVjLWUzM2QtMTFlOC1iN2UxLWQzOTQ3MjNmOTM0YyIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNTQxNjcxNDY5LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9MakE3QjVXT08iLCJjb2duaXRvOnVzZXJuYW1lIjoiMDM3MTc2MTIzOTUiLCJleHAiOjE1NDE4MTgwNTYsImlhdCI6MTU0MTgxNDQ1NiwiZmFtaWx5X25hbWUiOiJSb3NhbmlyYSIsImVtYWlsIjoibGluaGFyZXMuYWxpc3NvbkBpZmNlLmVkdS5iciJ9.ZF7RpuCYDfK2xnhQd0yCxQC6kn5NS0wPlZunZ3wXrg24dRNzjVmiwd4p6iZD7N3OWCxaQiu6sDVBodKlRMlRP3WysAndhzLx22L8a6A66QHF5xy9BDSfgvYpRwvzrDVqzC4fhGtJLxcRiD2uy8Nspe-8JAPC4AkAF62ZnRPd3Ny8Mh4LoGyFT2belkLpjRR9q77vATVFZmFJj805rR5xhZMHqZ6aaOWQy5V9VDOtY2bLv6vXYAd5HeRwEQp096BRSRPFsOWXBA0UVVOa3XBkfFruDqlCPX8ML7nQLtUK1AzogtqghJ4kN8PW1e2RuF9PWNJ_0HfCA8Hqe7SK56_Enw'
          },
        failOnStatusCode: false
    })
}

function colaboradorEmpresa (enviroment, cpf) {

    return cy.request({
        method: 'GET',
        url: Cypress.env(enviroment) + '/api/Colaborador/Empresas?cpf='+ cpf,
        headers: {
            'Content-Type': 'application/json',
            'awsauthtoken': 'eyJraWQiOiJVWEkwNXFBb2VDeTJPY1BGM21iOGJtWXlyWGk4N1N3K1ZqWXhIRWV3K2RVPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI5ZjMyNjJiYy1kYTRhLTQzNWEtOTk5NC00Zjk0MTU5NDM4ZmYiLCJhdWQiOiI0NXFvZGY1aGw0Z2dydjVva2k4YzlqZ2diaiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6ImFlOGNlNzVjLWUzM2QtMTFlOC1iN2UxLWQzOTQ3MjNmOTM0YyIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNTQxNjcxNDY5LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9MakE3QjVXT08iLCJjb2duaXRvOnVzZXJuYW1lIjoiMDM3MTc2MTIzOTUiLCJleHAiOjE1NDE4MTgwNTYsImlhdCI6MTU0MTgxNDQ1NiwiZmFtaWx5X25hbWUiOiJSb3NhbmlyYSIsImVtYWlsIjoibGluaGFyZXMuYWxpc3NvbkBpZmNlLmVkdS5iciJ9.ZF7RpuCYDfK2xnhQd0yCxQC6kn5NS0wPlZunZ3wXrg24dRNzjVmiwd4p6iZD7N3OWCxaQiu6sDVBodKlRMlRP3WysAndhzLx22L8a6A66QHF5xy9BDSfgvYpRwvzrDVqzC4fhGtJLxcRiD2uy8Nspe-8JAPC4AkAF62ZnRPd3Ny8Mh4LoGyFT2belkLpjRR9q77vATVFZmFJj805rR5xhZMHqZ6aaOWQy5V9VDOtY2bLv6vXYAd5HeRwEQp096BRSRPFsOWXBA0UVVOa3XBkfFruDqlCPX8ML7nQLtUK1AzogtqghJ4kN8PW1e2RuF9PWNJ_0HfCA8Hqe7SK56_Enw'
          },
        failOnStatusCode: false
    })
}

function colaboradorResumo (enviroment, cpf) {

    return cy.request({
        method: 'GET',
        url: Cypress.env(enviroment) + '/api/Colaborador/Resumo?cpf='+ cpf,
        failOnStatusCode: false
    })
}

function licenciado (enviroment, cnpj) {

    return cy.request({
        method: 'GET',
        url: Cypress.env(enviroment) + '/api/Colaborador/Licenciados?nrInscEmpregador='+ cnpj,
        failOnStatusCode: false
    })
}

export { allFolhas, usersLimit, profile, colaboradorEmpresa, colaboradorResumo, licenciado }

