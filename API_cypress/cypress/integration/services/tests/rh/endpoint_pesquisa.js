import '../../../../../cypress.json'
import * as Pesquisa from '../../requests/pesquisa_request'

context('Solicitação de requisição de Inclusão de Pesquisa', () => {
    const conteudoJson = require('../../../../fixtures/RH/pesquisa_incluir.json')

    it('Inclusão de Pesquisa', () => {
        Pesquisa.incluirPesquisa(conteudoJson).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body['Descricao']).to.eq('SUCESSO')
        })
    })

    it('Inclusão de Pesquisa empresa inexistente', () => {
        conteudoJson.NrInscEmpregador = '63542443'

        Pesquisa.incluirPesquisa(conteudoJson).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body['Descricao']).to.eq('SUCESSO')
        })
    })

    it('Inclusão de Pesquisa empresa inexistente', () => {
        conteudoJson.NrInscEmpregador = ''

        Pesquisa.incluirPesquisa(conteudoJson).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body['Descricao']).to.eq('Corpo da requisição malformado')
        })
    })

    it('Inclusão de Pesquisa CPF vazio', () => {
        conteudoJson.colaboradores[0].CPF = ''

        Pesquisa.incluirPesquisa(conteudoJson).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body['Descricao']).to.eq('Corpo da requisição malformado')
        })
    })

    it('Inclusão de Pesquisa CPF inválido', () => {
        conteudoJson.colaboradores[0].CPF = '00000000000'

        Pesquisa.incluirPesquisa(conteudoJson).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body['Descricao']).to.eq('Corpo da requisição malformado')
        })
    })
})

context('Solicitação de requisição de Exclusão de Pesquisa', () => {
    const conteudoJson = require('../../../../fixtures/RH/pesquisa_excluir.json')

    it('Exclusão de Pesquisa', () => {

        Pesquisa.excluirPesquisa(conteudoJson).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body['Descricao']).to.eq('SUCESSO')
        })
    })

    it('Exclusão de Pesquisa Dados vazios', () => {
        conteudoJson.Pesquisas[0].CPF = ''
        conteudoJson.Pesquisas[0].Matricula = ''
        conteudoJson.Pesquisas[0].NrInscEmpregador = ''
        conteudoJson.Pesquisas[0].PesquisaId = ''

        Pesquisa.excluirPesquisa(conteudoJson).then((response) =>{
            expect(response.status).to.eq(400)
            expect(response.body['Erro']).to.eq('Chaves: Matricula, CPF, NrInscEmpregador, PesquisaId')
        })
    })
})
