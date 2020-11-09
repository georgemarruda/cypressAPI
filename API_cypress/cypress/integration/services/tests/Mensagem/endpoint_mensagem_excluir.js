import '../../../../../cypress.json'
import * as DeleteMessage from '../../requests/mensagem_request' 

context('Solicitação de requisição de Exclusão de Mensagens', () => {
    const conteudoJson = require('../../../../fixtures/mensagem/mensagem_excluir.json')

    it('Envio de exclusão de mensagem', () => {        conteudoJson.mensagemId = "9999"

        DeleteMessage.excluirMensagem(conteudoJson).then((response) => {
            expect(response.status).to.eq(403)
            expect(response.body['message']).to.eq('Missing Authentication Token')
        })
    })
 
    it('Envio de exclusão de mensagem - ID Inexistente', () => {
        conteudoJson.mensagemId = "5555"

        DeleteMessage.excluirMensagem(conteudoJson).then((response) => {
            expect(response.status).to.eq(403)
            expect(response.body['message']).to.eq('Missing Authentication Token')
        })
    })

    it('Envio de exclusão de mensagem - nrInsc Inválido', () => {
        conteudoJson.NrInscEmpregador = "00000000"

        DeleteMessage.excluirMensagem(conteudoJson).then((response) => {
            expect(response.status).to.eq(403)
            expect(response.body['message']).to.eq('Missing Authentication Token')
        })
    })

    it('Envio de exclusão de mensagem - nrInsc vazio', () => {
        conteudoJson.NrInscEmpregador = ""

        DeleteMessage.excluirMensagem(conteudoJson).then((response) => {
            expect(response.status).to.eq(403)
            expect(response.body['message']).to.eq('Missing Authentication Token')
        })
    })
})