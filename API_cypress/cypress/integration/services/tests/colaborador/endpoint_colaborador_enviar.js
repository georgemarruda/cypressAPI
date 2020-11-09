import '../../../../../cypress.json'
import * as Colaborador from '../../requests/colaborador_request'

context('Solicitação de requisição de Inclusão de Colabordaor', () => {
    const conteudoJson = require('../../../../fixtures/colaborador/colaborador_incluir.json')

    it('Inclusão de Colaborador', () => {
        Colaborador.incluirColaborador(conteudoJson).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body['Descricao']).to.eq('Sucesso')
        })
    })

    it('Inclusão de Colaborador - CNPJ Vazio', () => {
        conteudoJson.Colaboradores[0].NrInscEmpregador = ''

        Colaborador.incluirColaborador(conteudoJson).then((response) => {
            expect(response.status).to.eq(502)
            expect(response.body['message']).to.eq('Internal server error')
        })
    })

    it('Inclusão de Colaborador - Ausencia CNPJ', () => {
        conteudoJson.Colaboradores[0].NrInscEmpregador = '73282772'
        conteudoJson.Colaboradores[0].CPF = ''

        Colaborador.incluirColaborador(conteudoJson).then((response) => {
            expect(response.status).to.eq(502)
            expect(response.body['message']).to.eq('Internal server error')
        })
    })

})


