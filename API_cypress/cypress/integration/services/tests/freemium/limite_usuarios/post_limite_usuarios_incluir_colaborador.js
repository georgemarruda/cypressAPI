import '../../../../../../cypress.json'
import * as PostUser from '../../../requests/freemium_requests/post_freemium_request'

describe('Requisição GET do endpoint Limite de Usuários Incluir Colaborador', () => {

    context('Ambiente Homologação FREEMIUM', () => {
        const conteudoJson = require('../../../../../fixtures/freemium/post_limite_usuario_incluir_colaborador.json')

        it('Envio de Colaboradores no Limite de Usuários', () => {

            PostUser.userLimitAddColaborador('homolog_freemium', conteudoJson).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body['NovosUsuarios']).to.eq(1)
            })
        })

        it('Envio de Colaboradores no Limite de Usuários - CNPJ vazio', () => {
            conteudoJson[0].nrInscEmpregador = ""
 
            PostUser.userLimitAddColaborador('homolog_freemium', conteudoJson).then((response) => {
                expect(response.status).to.eq(500)
            })
        })

        it('Envio de Colaboradores no Limite de Usuários - Licenciado vazio', () => {
            conteudoJson[0].cnpjLicenciado = ""
            conteudoJson[0].nrInscEmpregador = "73282772"

            PostUser.userLimitAddColaborador('homolog_freemium', conteudoJson).then((response) => {
                expect(response.status).to.eq(500)
            })
        })

        it('Envio de Colaboradores no Limite de Usuários - Licenciado vazio', () => {
            conteudoJson[0].cnpjLicenciado = "63542443000124"
            conteudoJson[0].nrInscEmpregador = "73282772"
            conteudoJson[0].cpf = ""

            PostUser.userLimitAddColaborador('homolog_freemium', conteudoJson).then((response) => {
                expect(response.status).to.eq(500)
            })
        })
    })

    context('Ambiente DEV FREEMIUM', () => {
        const conteudoJson = require('../../../../../fixtures/freemium/post_limite_usuario_incluir_colaborador.json')

        it('Envio de Colaboradores no Limite de Usuários', () => {
            conteudoJson[0].cpf = "39210359372"

            PostUser.userLimitAddColaborador('dev_freemium', conteudoJson).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body['NovosUsuarios']).to.eq(1)
            })
        })

        it('Envio de Colaboradores no Limite de Usuários - CNPJ vazio', () => {
            conteudoJson[0].nrInscEmpregador = ""

            PostUser.userLimitAddColaborador('dev_freemium', conteudoJson).then((response) => {
                expect(response.status).to.eq(500)
            })
        })

        it('Envio de Colaboradores no Limite de Usuários - Licenciado vazio', () => {
            conteudoJson[0].cnpjLicenciado = ""
            conteudoJson[0].nrInscEmpregador = "73282772"

            PostUser.userLimitAddColaborador('dev_freemium', conteudoJson).then((response) => {
                expect(response.status).to.eq(500)
            })
        })

        it('Envio de Colaboradores no Limite de Usuários - Licenciado vazio', () => {
            conteudoJson[0].cnpjLicenciado = "63542443000124"
            conteudoJson[0].nrInscEmpregador = "73282772"
            conteudoJson[0].cpf = ""

            PostUser.userLimitAddColaborador('dev_freemium', conteudoJson).then((response) => {
                expect(response.status).to.eq(500)
            })
        })
    })
})
