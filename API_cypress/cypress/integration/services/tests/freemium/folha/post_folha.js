import '../../../../../../cypress.json'
import * as PostFolha from '../../../requests/freemium_requests/post_freemium_request'

describe('Requisição POST do endpoint Folha', () => {

    context('Ambiente DEV FREEMIUM', () => {
        const conteudoJson = require('../../../../../fixtures/freemium/post_folha.json')

        it('Envio de Folha de Pagamento', () => {
            conteudoJson.Folhas[0].IdFolha = "50"

            PostFolha.addFolha('dev_freemium', conteudoJson).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body['Descricao']).to.eq('Sucesso')
            })
        })

        it('Envio de Folha de Pagamento - Json errado', () => {
            conteudoJson.Folhas[0].AnoMes = ""

            PostFolha.addFolha('dev_freemium', conteudoJson).then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.Folhas[0].Erro).contains('AnoMes')
            }) 
        })

        it('Envio de Folha de Pagamento - CPF Vazio', () => {
            conteudoJson.Folhas[0].CPF = ""

            PostFolha.addFolha('dev_freemium', conteudoJson).then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.Folhas[0].Erro).contains('CPF,AnoMes')
            })
        })
    })

    context('Ambiente homolog FREEMIUM', () => {
        const conteudoJson = require('../../../../../fixtures/freemium/post_folha.json')

        it('Envio de Folha de Pagamento', () => {
            conteudoJson.Folhas[0].CPF = "69487357114"

            PostFolha.addFolha('homolog_freemium', conteudoJson).then((response) => {
                //O Gean precisa inserir as alterações no ambiente HOMOLOG por isso está quebrando
                expect(response.status).to.eq(200)
                expect(response.body['Descricao']).to.eq('Sucesso')
            })
        })

        it('Envio de Folha de Pagamento - Json errado', () => {
            conteudoJson.Folhas[0].AnoMes = ""

            PostFolha.addFolha('homolog_freemium', conteudoJson).then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.Folhas[0].Erro).contains('AnoMes')
            })
        })

        it('Envio de Folha de Pagamento - CPF Vazio', () => {
            conteudoJson.Folhas[0].CPF = ""

            PostFolha.addFolha('homolog_freemium', conteudoJson).then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body.Folhas[0].Erro).contains('CPF,AnoMes')
            })
        })
    })
})