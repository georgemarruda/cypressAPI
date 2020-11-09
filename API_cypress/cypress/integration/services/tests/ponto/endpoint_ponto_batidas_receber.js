import '../../../../../cypress.json'
import * as Batidas from '../../requests/ponto_request'

context('Solicitação de requisição de Receber Batidas de Ponto', () => {
    const conteudoJson = require('../../../../fixtures/ponto/ponto_batidas_receber.json')

    it('Receber Batidas', () => {
        Batidas.receberBatidas(conteudoJson).then((response) => {
            expect(response.status).to.eq(200)
        })
    })    

    it('Receber Batidas - CNPJ inválido', () => {
        conteudoJson.Colaboradores[0].NrInscEmpregador = ""        

        Batidas.receberBatidas(conteudoJson).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body['Descricao']).to.eq('Ocorreram erros na validação dos dados')
        })
    })  

    it('Receber Batidas - CPF inválido', () => {
        conteudoJson.Colaboradores[0].NrInscEmpregador = "49074113"  
        conteudoJson.Colaboradores[0].CPF = ""        

        Batidas.receberBatidas(conteudoJson).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body['Descricao']).to.eq('Ocorreram erros na validação dos dados')
        })
    })
})