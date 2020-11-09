import '../../../../../cypress.json'
import * as DeleteDeclaracaoIr from '../../requests/declaracaoIR_request'

context('Solicitação de requisição de Exclusão de Declaração IR', () => {
    const conteudoJson = require('../../../../fixtures/folha/declaracao_excluir.json')

    it('Exclusão de Declaração de Imposto de Renda', () => {
        DeleteDeclaracaoIr.excluirDeclaracaoIr(conteudoJson).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body['Descricao']).to.eq('Sucesso')
        })
    })

    it('Exclusão de Declaração de Imposto de Renda - Sem CNPJ', () => {
        conteudoJson.Declaracoes[0].NrInscEmpregador = ''

        DeleteDeclaracaoIr.excluirDeclaracaoIr(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de Registros não processados: 1')
        })
    })

    it('Exclusão de Declaração de Imposto de Renda - Sem CPF', () => {
        conteudoJson.Declaracoes[0].CPF = ''

        DeleteDeclaracaoIr.excluirDeclaracaoIr(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de Registros não processados: 1')
        })
    })

    it('Exclusão de Declaração de Imposto de Renda - Sem CNPJ e CPF', () => {
        conteudoJson.Declaracoes[0].CPF = ''
        conteudoJson.Declaracoes[0].NrInscEmpregador = ''

        DeleteDeclaracaoIr.excluirDeclaracaoIr(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de Registros não processados: 1')
        })
    })
})


