import '../../../../../cypress.json'
import * as IncluiAbono from '../../requests/abono_incluir_request'

context('Solicitação de requisição de Exclusão de Abono', () => {
    const conteudoJson = require('../../../../fixtures/ponto/abono_incluir.json')

    it('Envio de Inclusão de Abono', () => {
        conteudoJson.Abonos[0].NrInscEmpregador = "49074113"
        conteudoJson.Abonos[0].DataAbono = "2019-06-18"

        IncluiAbono.incluirAbono(conteudoJson).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body['Descricao']).to.eq('SUCESSO')
        })
    })

    it('Envio de Inclusão de Abono Duplicado', () => {
        conteudoJson.Abonos[0].NrInscEmpregador = "49074113"
        conteudoJson.Abonos[0].DataAbono = "2019-06-18"

        IncluiAbono.incluirAbono(conteudoJson).then((response) => {
            IncluiAbono.incluirAbono(conteudoJson).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body['Descricao']).to.eq('SUCESSO')
            })
        })
    })

    it('Envio de Inclusão de Abono - Ausencia CPF', () => {
        conteudoJson.Abonos[0].CPF = ""
        IncluiAbono.incluirAbono(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de registros nao processados: 1')
        })
    })

    it('Envio de Inclusão de Abono - Ausencia CNPJ', () => {
        conteudoJson.Abonos[0].NrInscEmpregador = ""

        IncluiAbono.incluirAbono(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de registros nao processados: 1')
        })
    })

    it('Envio de Inclusão de Abono quando existe um abono recusado', () => {
        const conteudo = require('../../../../fixtures/ponto/abono_incluir.json')

        conteudoJson.Abonos[0].NrInscEmpregador = "49074113"
        conteudoJson.Abonos[0].CPF = "92621219110"
        conteudoJson.Abonos[0].DataAbono = "2020-06-18"
        conteudoJson.Abonos[0].StatusSol = "3"
        
        conteudo.Abonos[0].NrInscEmpregador = "49074113"
        conteudoJson.Abonos[0].CPF = "92621219110"
        conteudo.Abonos[0].DataAbono = "2020-06-18"
        conteudo.Abonos[0].StatusSol = "1"

        IncluiAbono.incluirAbono(conteudoJson).then((response) => {
            IncluiAbono.incluirAbono(conteudo).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body['Descricao']).to.eq('SUCESSO')
            })
        })
    })

    it('Envio de Inclusão de Abono quando existe um abono Aprovado', () => {
        const conteudo = require('../../../../fixtures/ponto/abono_incluir.json')

        conteudoJson.Abonos[0].NrInscEmpregador = "49074113"
        conteudoJson.Abonos[0].CPF = "92621219110"
        conteudoJson.Abonos[0].DataAbono = "2020-06-18"
        conteudoJson.Abonos[0].StatusSol = "2"
        
        conteudo.Abonos[0].NrInscEmpregador = "49074113"
        conteudoJson.Abonos[0].CPF = "92621219110"
        conteudo.Abonos[0].DataAbono = "2020-06-18"
        conteudo.Abonos[0].StatusSol = "1"

        IncluiAbono.incluirAbono(conteudoJson).then((response) => {
            IncluiAbono.incluirAbono(conteudo).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body['Descricao']).to.eq('SUCESSO')
            })
        })
    })
})