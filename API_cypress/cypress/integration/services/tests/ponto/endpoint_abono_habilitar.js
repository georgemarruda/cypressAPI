import '../../../../../cypress.json'
import * as Abono from '../../requests/abono_habilitar_request'

context('Solicitação de requisição de Habilitação de Abono', () => {
    const conteudoJson = require('../../../../fixtures/ponto/abono_habilitar.json')

    it('Habilita Abono', () => {
        conteudoJson.Colaboradores[0].NrInscEmpregador = "49074113"
        conteudoJson.Colaboradores[0].CPF = "39210359372"

        Abono.habilitaAbono(conteudoJson).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body['Descricao']).to.eq('Sucesso')
        })
    })

    it('Habilita Abono - CNPJ inválido', () => {
        conteudoJson.Colaboradores[0].NrInscEmpregador = ""
        conteudoJson.Colaboradores[0].CPF = "39210359372"

        Abono.habilitaAbono(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de Registros não processados: 1')
        })
    })

    it('Habilita Abono - CPF inválido', () => {
        conteudoJson.Colaboradores[0].NrInscEmpregador = "49074113"
        conteudoJson.Colaboradores[0].CPF = ""

        Abono.habilitaAbono(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de Registros não processados: 1')
        })
    })
})