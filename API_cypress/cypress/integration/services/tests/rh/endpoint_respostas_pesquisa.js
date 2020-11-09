import '../../../../../cypress.json'
import * as Pesquisa from '../../requests/pesquisa_request'

const respostasJson = require('../../../../fixtures/RH/pesquisa_respostas.json')

context('Solicitação de requisição de Respostas Pesquisa', () => {
    const responderJson = require('../../../../fixtures/RH/pesquisa_responder.json')

    it('Respostas Não Encontradas', () => {
        respostasJson.CPF = '06060722334'
        Pesquisa.respostasPesquisa(respostasJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Erro']).to.eq('Respostas não encontradas')
        })
    })

    it('CPF Vazio', () => {
        respostasJson.CPF = ''
        Pesquisa.respostasPesquisa(respostasJson).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body['Erro']).to.eq('Chaves: CPF')
        })
    })

    it('CPF Válido', () => {
        respostasJson.CPF = '39210359372'
        Pesquisa.responderPesquisa(responderJson).then((response) => {
            Pesquisa.respostasPesquisa(respostasJson).then((response) => {
                expect(response.status).to.eq(200)
            })
        })        
    })

})

context('Solicitação de requisição de Exclusão de Respostas', () => {
    const excluirRespostasJson = require('../../../../fixtures/RH/pesquisa_respostas_excluir.json')

    it('Exclusão da resposta de um dia específico', () => {
        Pesquisa.excluirRespostas(excluirRespostasJson).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Exclusão de todas as respostas', () => {
        delete excluirRespostasJson.dia
        Pesquisa.excluirRespostas(excluirRespostasJson).then((response) => {
            expect(response.status).to.eq(200)
            Pesquisa.respostasPesquisa(respostasJson).then((response) => {
                expect(response.body['Erro']).to.eq('Respostas não encontradas')
            })
        })
    })

    it('Exclusão de resposta com entrada inválida', () => {
        excluirRespostasJson.CPF = ''
        Pesquisa.excluirRespostas(excluirRespostasJson).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body['Descricao']).to.eq('Corpo da requisição malformado')
        })           
    })
})
