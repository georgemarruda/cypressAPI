import '../../../../../../cypress.json'
import * as PutUser from '../../../requests/freemium_requests/put_freemium_request'

describe('Requisição PUT do endpoint Limite de Usuários', () => {
    
    context('Ambiente Homologação FREEMIUM', () => {
        const conteudoJson = require('../../../../../fixtures/freemium/put_limite_usuarios.json')
    
        it('Atualiza o limite de usuários', () => {
    
            PutUser.updateUserLimit('homolog_freemium', conteudoJson, '63542443000124').then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    
        it('Atualiza o limite de usuários - CNPJ vazio', () => {
    
            PutUser.updateUserLimit('homolog_freemium', conteudoJson, '').then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body).to.eq('Não foi encontrado a QueryString cnpjlicenciado.')
            }) 
        })
    })
    
    context('Ambiente DEV FREEMIUM', () => {
        const conteudoJson = require('../../../../../fixtures/freemium/put_limite_usuarios.json')
    
        it('Atualiza o limite de usuários', () => {
    
            PutUser.updateUserLimit('dev_freemium', conteudoJson, '63542443000124').then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    
        it('Atualiza o limite de usuários - CNPJ vazio', () => {
    
            PutUser.updateUserLimit('dev_freemium', conteudoJson, '').then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body).to.eq('Não foi encontrado a QueryString cnpjlicenciado.')
            })
        })
    })
})
