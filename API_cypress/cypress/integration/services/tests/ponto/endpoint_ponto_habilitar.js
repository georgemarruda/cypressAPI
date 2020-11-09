import '../../../../../cypress.json'
import * as Ponto from '../../requests/ponto_request'


context('Solicitação de requisição de Habilitar Cerca', () => {
    const conteudoJson = require('../../../../fixtures/ponto/ponto_habilitar.json')

    it('habilitar Batida de Ponto para colaborador', () => {

        Ponto.habilitaPonto(conteudoJson).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body['Descricao']).to.eq('Sucesso')
        })
    })    

    it('habilitar Batida de Ponto para colaborador - CNPJ inválido', () => {
        conteudoJson.Colaboradores[0].NrInscEmpregador = ""        

        Ponto.habilitaPonto(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de Registros não processados: 1')
        })
    })  

    it('habilitar Batida de Ponto para colaborador - CPF inválido', () => {
        conteudoJson.Colaboradores[0].NrInscEmpregador = "49074113"  
        conteudoJson.Colaboradores[0].CPF = ""        

        Ponto.habilitaPonto(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de Registros não processados: 1')
        })
    })
})