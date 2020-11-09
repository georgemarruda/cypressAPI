import '../../../../../../cypress.json'
import * as PostUser from '../../../requests/freemium_requests/post_freemium_request'

describe('Requisição POST do endpoint Limite de Usuários', () => {

    context('Ambiente Homologação FREEMIUM', () => {
        const conteudoJson = require('../../../../../fixtures/freemium/post_limite_usuarios.json')

        it('Envio de limite de usuários', () => {

            PostUser.addUserLimit('homolog_freemium', conteudoJson, '73282772000137').then((response) => {
                expect(response.status).to.eq(200)
            })
        })

        it('Envio de limite de usuários - CNPJ vazio', () => {

            PostUser.addUserLimit('homolog_freemium', conteudoJson, '').then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body).to.eq('Não foi encontrada a QueryString cnpjlicenciado.')
            }) 
        })
    })

    context('Ambiente Homologação FREEMIUM', () => {
        const conteudoJson = require('../../../../../fixtures/freemium/post_limite_usuarios.json')

        it('Envio de limite de usuários', () => {

            PostUser.addUserLimit('dev_freemium', conteudoJson, '73282772000137').then((response) => {
                expect(response.status).to.eq(200)
            })
        })

        it('Envio de limite de usuários - CNPJ vazio', () => {

            PostUser.addUserLimit('dev_freemium', conteudoJson, '').then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body).to.eq('Não foi encontrada a QueryString cnpjlicenciado.')
            })
        })
    })
})
