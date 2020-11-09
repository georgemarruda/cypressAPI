import '../../../../../cypress.json'
import * as ReceberEndereco from '../../requests/endereco_request'

context('Solicitação de requisição de Receber Endereço', () => {
    const conteudoJson = require('../../../../fixtures/folha/endereco_receber.json')

    it('Envio de recebimento de endereço', () => {
        ReceberEndereco.enderecoReceber(conteudoJson).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body['Descricao']).to.eq('Sucesso')
        })
    })

    it('Envio de recebimento de endereço - Ausencia CNPJ', () => {
        conteudoJson.Colaboradores[0].NrInscEmpregador = ""

        ReceberEndereco.enderecoReceber(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de Registros não processados: 1')
        })
    })

    it('Envio de recebimento de endereço - Ausencia CPF', () => {
        conteudoJson.Colaboradores[0].NrInscEmpregador = "49074113"
        conteudoJson.Colaboradores[0].CPF = ""

        ReceberEndereco.enderecoReceber(conteudoJson).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body['Descricao']).to.eq('Sucesso')
        })
    })

    it('Envio de recebimento de endereço - Ausencia CPF e CNPJ', () => {
        conteudoJson.Colaboradores[0].NrInscEmpregador = ""
        conteudoJson.Colaboradores[0].CPF = ""

        ReceberEndereco.enderecoReceber(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de Registros não processados: 1')
        })
    })
})