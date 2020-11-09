import '../../../../../cypress.json'
import * as DeleteAbono from '../../requests/abono_excluir_request'
import * as IncluiAbono from '../../requests/abono_incluir_request'

context('Solicitação de requisição de Exclusão de Abono', () => {
    const conteudo = require('../../../../fixtures/ponto/abono_incluir.json')
    const conteudoJson = require('../../../../fixtures/ponto/abono_excluir.json')

    it('Envio de exclusão de Abono', () => {
        //Inclusao
        conteudo.Abonos[0].NrInscEmpregador = "49074113"
        conteudo.Abonos[0].CPF = "39210359372"
        conteudo.Abonos[0].DataAbono = "2020-06-18"
        //Exclusão
        conteudoJson.Abonos[0].NrInscEmpregador = "49074113"
        conteudoJson.Abonos[0].CPF = "39210359372"
        conteudoJson.Abonos[0].DataAbono = "2020-06-18"

        IncluiAbono.incluirAbono(conteudo).then((retorno) => {
            DeleteAbono.excluirAbono(conteudoJson).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body['Descricao']).to.eq('SUCESSO')
            })
        })
    })

    it('Envio de exclusão de Abono Inexistente', () => {
        conteudoJson.Abonos[0].DataAbono = "1910-06-18"

        DeleteAbono.excluirAbono(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de registros nao processados: 1')
        })
    })

    it('Envio de exclusão de Abono - Ausencia CNPJ', () => {
        conteudoJson.Abonos[0].NrInscEmpregador = ""

        DeleteAbono.excluirAbono(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de registros nao processados: 1')
        })
    })

    it('Envio de exclusão de Abono - Ausencia CPF', () => {
        conteudoJson.Abonos[0].CPF = ""

        DeleteAbono.excluirAbono(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de registros nao processados: 1')
        })
    })
})