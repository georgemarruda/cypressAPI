import '../../../../../cypress.json'
import * as Definicoes from '../../requests/definicoes_request'

context('Solicitação de requisição de Definições', () => {
    const conteudoJson = require('../../../../fixtures/ponto/definicoes.json')

    it('Inclusão de Definições', () => {
        Definicoes.incluirDefinicoes(conteudoJson).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body['Descricao']).to.eq('SUCESSO')
        })
    })

    it('Inclusão de Definições - Ausencia CNPJ', () => {
        conteudoJson.Definicoes[0].NrInscEmpregador = ""

        Definicoes.incluirDefinicoes(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de registros nao processados: 1')
        })
    })    

    it('Inclusão de Definições - Ausencia de Data', () => {
        conteudoJson.Definicoes[0].NrInscEmpregador = "49074113"
        conteudoJson.Definicoes[0].Abono.DataInicial = ""

        Definicoes.incluirDefinicoes(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de registros nao processados: 1')
        })
    })
})