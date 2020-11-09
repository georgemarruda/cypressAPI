import '../../../../../cypress.json'
import * as BatidaExcluir from '../../requests/ponto_request'

context('Solicitação de requisição de Exclusão de batidas', () => {
    const conteudoJson = require('../../../../fixtures/ponto/ponto_excluir.json')    
    const conteudo = require('../../../../fixtures/ponto/ponto_incluir.json')

    it('Excluir Batida de Ponto', () => {

        BatidaExcluir.excluirBatidas(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de Registros não processados: 1')
        })
    })

    it('Excluir Batida de Ponto Incluída', () => {
        conteudo.Batidas[0].DataBatida = "01/09/2020"
        conteudo.Batidas[0].Hora = "08:00"
        conteudo.Batidas[0].Origem = "2"

        conteudoJson.Batidas[0].CPF = "39210359372"
        conteudoJson.Batidas[0].DataBatida = "01/09/2020"
        conteudoJson.Batidas[0].Hora = "08:00"

        BatidaExcluir.incluirBatidas(conteudo).then((response) => {
            BatidaExcluir.excluirBatidas(conteudoJson).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body['Descricao']).to.eq('Sucesso')
            })
        })
    })

    it('Excluir Batida de Ponto Inexistente', () => {
        conteudoJson.Batidas[0].CPF = "39210359372"
        conteudoJson.Batidas[0].DataBatida = "01/09/2070"
        conteudoJson.Batidas[0].Hora = "08:00"

        BatidaExcluir.excluirBatidas(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de Registros não processados: 1')
        })
    })

    it('Excluir Batida de Ponto - CPNJ vazio', () => {
        conteudoJson.Batidas[0].CPF = ""
        conteudoJson.Batidas[0].DataBatida = "01/09/2070"
        conteudoJson.Batidas[0].Hora = "08:00"

        BatidaExcluir.excluirBatidas(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de Registros não processados: 1')
        })
    })
})