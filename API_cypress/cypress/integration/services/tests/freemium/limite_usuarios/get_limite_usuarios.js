import '../../../../../../cypress.json'
import * as getUsers from '../../../requests/freemium_requests/get_freemium_request'

describe('Requisição GET do endpoint Limite de Usuários', () => {

    context('Ambiente Homologação FREEMIUM', () => {
        it('Consulta do limite de usuários', () => {    
            getUsers.usersLimit('homolog_freemium', '63542443000124').then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body['LimiteUsuarios']).to.eq(0)
            })
        })
    
        it('Consulta do limite de usuários - CNPJ inexistente', () => {
    
            getUsers.usersLimit('homolog_freemium', '00000000000000').then((response) => {
                expect(response.status).to.eq(200)
            })  
        })
    
        it('Consulta do limite de usuários - CNPJ vazio', () => {
    
            getUsers.usersLimit('homolog_freemium', '').then((response) => {
                expect(response.status).to.eq(400)
            })
        })
    })
    
    context('Ambiente DEV FREEMIUM', () => {
        it('Consulta do limite de usuários', () => {
    
            getUsers.usersLimit('dev_freemium', '63542443000124').then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body['LimiteUsuarios']).to.eq(100)
            })
        })
    
        it('Consulta do limite de usuários - CNPJ inexistente', () => {
    
            getUsers.usersLimit('dev_freemium', '00000000000000').then((response) => {
                cy.log('CNPJ - 00000000000000')
                expect(response.status).to.eq(200)
            })
        })
    
        it('Consulta do limite de usuários - CNPJ vazio', () => {
    
            getUsers.usersLimit('dev_freemium', '').then((response) => {
                expect(response.status).to.eq(400)
            })
        })
    })    
})





