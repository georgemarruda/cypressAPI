import '../../../../../cypress.json'
import * as PostDeclaracaoIr from '../../requests/declaracaoIR_request'

context('Solicitação de requisição de Inclusão de Declaração IR', () => {
    const conteudoJson = require('../../../../fixtures/folha/declaracao_incluir.json')

    it('Envio de Declaração de Imposto de Renda', () => {
        PostDeclaracaoIr.incluirDeclaracaoIr(conteudoJson).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body['Descricao']).to.eq('Sucesso')
        })
    })

    it('Envio de Declaração de Imposto de Renda - Sem CNPJ', () => {
        conteudoJson.Declaracoes[0].NrInscEmpregador = ''

        PostDeclaracaoIr.incluirDeclaracaoIr(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de Registros não processados: 1')
        })
    })

    it('Envio de Declaração de Imposto de Renda - Sem CPF', () => {
        conteudoJson.Declaracoes[0].NrInscEmpregador = '49074113'
        conteudoJson.Declaracoes[0].CPF = ''

        PostDeclaracaoIr.incluirDeclaracaoIr(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de Registros não processados: 1')
        })
    })

    it('Envio de Declaração de Imposto de Renda - Sem CNPJ e CPF', () => {
        conteudoJson.Declaracoes[0].CPF = ''
        conteudoJson.Declaracoes[0].NrInscEmpregador = ''

        PostDeclaracaoIr.incluirDeclaracaoIr(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de Registros não processados: 1')
        })
    })

    it('Envio de Declaração de Imposto de Renda - Ano Calendário', () => {
        conteudoJson.Declaracoes[0].NrInscEmpregador = '49074113'
        conteudoJson.Declaracoes[0].CPF = '39259310372'
        conteudoJson.Declaracoes[0].AnoCalendario = ''

        PostDeclaracaoIr.incluirDeclaracaoIr(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de Registros não processados: 1')
        })
    })

    it('Envio de Declaração de Imposto de Renda - Sem Tipo Empregador', () => {
        conteudoJson.Declaracoes[0].TpInscEmpregador = ''

        PostDeclaracaoIr.incluirDeclaracaoIr(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de Registros não processados: 1')
        })
    })
})


