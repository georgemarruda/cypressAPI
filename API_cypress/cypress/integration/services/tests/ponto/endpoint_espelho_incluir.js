import '../../../../../cypress.json'
import * as BatidaIncluir from '../../requests/ponto_request'

context('Solicitação de requisição de Inclusão de batidas', () => {
    const conteudoJson = require('../../../../fixtures/ponto/ponto_incluir.json')

    it('Incluir Batida de Ponto', () => {
        BatidaIncluir.incluirBatidas(conteudoJson).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body['Descricao']).to.eq('Sucesso')
        })
    })

    it('Incluir Batida de Ponto - Ausencia CNPJ', () => {
        conteudoJson.Batidas[0].NrInscEmpregador = ""

        BatidaIncluir.incluirBatidas(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de Batidas nao processados: 1\nQuantidade de Saldos nao processados: 0')
        })
    })

    it('Incluir Batida de Ponto - Ausencia CPF', () => {
        conteudoJson.Batidas[0].NrInscEmpregador = "49074113"
        conteudoJson.Batidas[0].CPF = ""

        BatidaIncluir.incluirBatidas(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de Batidas nao processados: 1\nQuantidade de Saldos nao processados: 0')
        })
    })
})
