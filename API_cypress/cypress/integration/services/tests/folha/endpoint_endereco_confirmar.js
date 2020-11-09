import '../../../../../cypress.json'
import * as ConfirmaEndereco from '../../requests/endereco_request'

context('Solicitação de requisição de Confirmação de Endereço', () => {
    const conteudoJson = require('../../../../fixtures/folha/endereco_confirmar.json')

    it('Envio de confirmação de endereço', () => {
        ConfirmaEndereco.enderecoConfirmar(conteudoJson).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body['Descricao']).to.eq('Sucesso')
        })
    })

    it('Envio de confirmação de endereço - Ausencia de CNPJ', () => {
        conteudoJson.Colaboradores[0].NrInscEmpregador = ""

        ConfirmaEndereco.enderecoConfirmar(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de Registros não processados: 1')
        })
    })

    it('Envio de confirmação de endereço Ausencia de CPF', () => {
        conteudoJson.Colaboradores[0].NrInscEmpregador = "49074113"
        conteudoJson.Colaboradores[0].CPF = ""

        ConfirmaEndereco.enderecoConfirmar(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de Registros não processados: 1')
        })
    })

    it('Envio de confirmação de endereço Ausencia de CPF e CNPJ', () => {
        conteudoJson.Colaboradores[0].NrInscEmpregador = ""
        conteudoJson.Colaboradores[0].CPF = ""

        ConfirmaEndereco.enderecoConfirmar(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de Registros não processados: 1')
        })
    })
})