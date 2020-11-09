import '../../../../../cypress.json'
import * as Cerca from '../../requests/ponto_request'

context('Solicitação de requisição de Habilitar Cerca', () => {
    const conteudoJson = require('../../../../fixtures/ponto/ponto_cerca_habilitar.json')

    it('habilitar cerca para colaborador', () => {
        Cerca.habilitaCerca(conteudoJson).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body['Descricao']).to.eq('Sucesso')
        })
    })    

    it('habilitar cerca para colaborador - CNPJ inválido', () => {
        conteudoJson.Colaboradores[0].NrInscEmpregador = ""        

        Cerca.habilitaCerca(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de Registros não processados: 1')
        })
    })  

    it('habilitar cerca para colaborador - CPF inválido', () => {
        conteudoJson.Colaboradores[0].NrInscEmpregador = "49074113"  
        conteudoJson.Colaboradores[0].CPF = ""        

        Cerca.habilitaCerca(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de Registros não processados: 1')
        })
    })
})