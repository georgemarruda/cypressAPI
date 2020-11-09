import '../../../../../cypress.json'
import * as PostFolha from '../../requests/folha_request'

context('Solicitação de requisição de Envio de Folha - Colabore FULL', () => {
    const conteudoJson = require('../../../../fixtures/folha/folha_incluir.json')

    it('Envio de Folha', () => {
        PostFolha.incluirFolha(conteudoJson).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body['Descricao']).to.eq('Sucesso')
        })
    })

    it('Envio de Folha - Ausencia de CNPJ', () => {
        conteudoJson.Folhas[0].NrInscEmpregador = ""

        PostFolha.incluirFolha(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de Registros não processados: 1')
        })
    })

    it('Envio de Folha - Ausencia de CPF', () => {
        conteudoJson.Folhas[0].NrInscEmpregador = "49074113"
        conteudoJson.Folhas[0].CPF = ""

        PostFolha.incluirFolha(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de Registros não processados: 1')
        })
    })

    it('Envio de Folha - CNPJ Inexistente na nuvem', () => {
        conteudoJson.Folhas[0].NrInscEmpregador = "63542443"
        conteudoJson.Folhas[0].CPF = "39210359372"

        PostFolha.incluirFolha(conteudoJson).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body['Descricao']).to.eq('Sucesso')
        })
    })

    it('Envio de Folha - Ausencia de CPF e CNPJ', () => {
        conteudoJson.Folhas[0].NrInscEmpregador = ""
        conteudoJson.Folhas[0].CPF = ""

        PostFolha.incluirFolha(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de Registros não processados: 1')
        })
    })
})