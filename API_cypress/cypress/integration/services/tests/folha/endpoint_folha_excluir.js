import '../../../../../cypress.json'
import * as DeleteFolha from '../../requests/folha_request'

context('Solicitação de requisição de Envio Exclusão de Folha', () => {
    const conteudoJson = require('../../../../fixtures/folha/folha_excluir.json')

    it('Envio de Folha', () => {
        DeleteFolha.excluirFolha(conteudoJson).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body['Descricao']).to.eq('Sucesso')
        })
    })

    it('Exclusão de Folha - Ausencia de CNPJ', () => {
        conteudoJson.Folhas[0].NrInscEmpregador = ""

        DeleteFolha.excluirFolha(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de Registros não processados: 1')
        })
    })

    it('Exclusão de Folha - Ausencia de CPF', () => {
        conteudoJson.Folhas[0].NrInscEmpregador = "49074113"
        conteudoJson.Folhas[0].CPF = ""

        DeleteFolha.excluirFolha(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de Registros não processados: 1')
        })
    })

    it('Exclusão de Folha - CNPJ Inexistente na nuvem', () => {
        conteudoJson.Folhas[0].NrInscEmpregador = "63542443"

        DeleteFolha.excluirFolha(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de Registros não processados: 1')
        })
    })

    it('Exclusão de Folha - Ausencia de CPF e CNPJ', () => {
        conteudoJson.Folhas[0].NrInscEmpregador = ""
        conteudoJson.Folhas[0].CPF = ""

        DeleteFolha.excluirFolha(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de Registros não processados: 1')
        })
    })
})