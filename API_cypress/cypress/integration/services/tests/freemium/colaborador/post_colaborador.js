import '../../../../../../cypress.json'
import * as post from '../../../requests/freemium_requests/post_freemium_request'

describe('Requisição Post do endpoint Colaborador', () => {
    const conteudoJson = require('../../../../../fixtures/freemium/post_colaborador.json')
    
    context('Ambiente Homologação FREEMIUM', () => {
        it('Envio de Colaborador', () => {

            post.colaborador('homolog_freemium',conteudoJson ).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body['Descricao']).to.eq('Sucesso')
            })
        })

        it('Envio de Colaborador - CPF Vazio', () => {
            conteudoJson.Colaboradores[0].CPF = ''

            post.colaborador('homolog_freemium',conteudoJson ).then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body['Descricao']).to.eq('Quantidade de Registros não processados: 1')
            })

        })

        it('Envio de Colaborador - CNPJ Vazio', () => {
            conteudoJson.Colaboradores[0].CPF = '39210359372'
            conteudoJson.Colaboradores[0].NrInscEmpregador = ''

            post.colaborador('homolog_freemium',conteudoJson ).then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body['Descricao']).to.eq('Quantidade de Registros não processados: 1')
            })

        })
    })

    context('Ambiente Dev FREEMIUM', () => {
        it('Envio de Colaborador', () => {
            conteudoJson.Colaboradores[0].CPF = '39210359372'
            conteudoJson.Colaboradores[0].NrInscEmpregador = '49074113'

            post.colaborador('dev_freemium',conteudoJson ).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body['Descricao']).to.eq('Sucesso')
            })
        })

        it('Envio de Colaborador - CPF Vazio', () => {
            conteudoJson.Colaboradores[0].CPF = ''

            post.colaborador('dev_freemium',conteudoJson ).then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body['Descricao']).to.eq('Quantidade de Registros não processados: 1')
            })

        })

        it('Envio de Colaborador - CNPJ Vazio', () => {
            conteudoJson.Colaboradores[0].CPF = '39210359372'
            conteudoJson.Colaboradores[0].NrInscEmpregador = ''

            post.colaborador('dev_freemium',conteudoJson ).then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body['Descricao']).to.eq('Quantidade de Registros não processados: 1')
            })

        })
    })
})





