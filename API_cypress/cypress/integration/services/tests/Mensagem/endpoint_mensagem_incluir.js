import '../../../../../cypress.json'
import * as PostMessage from '../../requests/mensagem_request'

context('Solicitação de requisição de Inclusão de Mensagens', () => {
    const conteudoJson = require('../../../../fixtures/mensagem/mensagem_incluir.json')

    it('Envio de mensagem com Data Formato Americano', () => {
        conteudoJson.Mensagem.DataMensagem = "2020-08-20 08:00:00"
        PostMessage.incluirMensagem(conteudoJson).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body['Descricao']).to.eq('Sucesso')
        })
    })

    it('Envio de mensagem com Data Formato Brasileiro', () => {
        conteudoJson.Mensagem.DataMensagem = "26/08/2020"

        PostMessage.incluirMensagem(conteudoJson).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body['Descricao']).to.eq('Sucesso')
        })
    }) 

    it('Envio de mensagem com erro no link do youtube', () => {
        conteudoJson.Mensagem.YouTubeLink = "https://www.youtube.com/wat"

        PostMessage.incluirMensagem(conteudoJson).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body['Descricao']).to.eq('Link do YouTube invalido')
        })
    })

    it('Envio de mensagem com erro no campo colaborador', () => {
        conteudoJson.Mensagem.Colaboradores[0].CPF = ""

        PostMessage.incluirMensagem(conteudoJson).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body['Descricao']).to.eq('Corpo da requisicao nao contem chaves: CPF')
        })
    })

    it('Envio de mensagem com Data Vazia', () => {
        conteudoJson.Mensagem.Colaboradores[0].CPF = "39210359372"
        conteudoJson.Mensagem.DataMensagem = ""

        PostMessage.incluirMensagem(conteudoJson).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body['Descricao']).to.eq('Corpo da requisicao nao contem chaves: DataMensagem')
        })
    })
})