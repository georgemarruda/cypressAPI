import '../../../../../cypress.json'
import * as Pesquisa from '../../requests/pesquisa_request'

context('Solicitação de requisição de Responder Pesquisa', () => {
    const conteudoJson = require('../../../../fixtures/RH/pesquisa_responder.json')

    it('Responder Pesquisa', () => {
        Pesquisa.responderPesquisa(conteudoJson).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body['descricao']).to.eq('Sucesso')
        })
    })

    it('Responder Pesquisa  - Matrícula vazia', () => {
        conteudoJson.Pesquisas[0].Matricula = ''

        Pesquisa.responderPesquisa(conteudoJson).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body['error']).to.eq('Chaves: Matricula')
        })
    })

    it('Responder Pesquisa  - CNPJ Vazio', () => {
        conteudoJson.Pesquisas[0].NrInscEmpregador = ''
        conteudoJson.Pesquisas[0].Matricula = '000002'

        Pesquisa.responderPesquisa(conteudoJson).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body['error']).to.eq('Chaves: NrInscEmpregador')
        })
    })

})

