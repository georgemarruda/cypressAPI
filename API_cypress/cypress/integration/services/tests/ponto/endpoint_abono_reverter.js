import '../../../../../cypress.json'
import * as AbonoReverter from '../../requests/abono_reverter_request'

context('Solicitação de requisição de Reverter Abono', () => {
    const conteudoJson = require('../../../../fixtures/ponto/abono_reverter.json')

    it('Existe Reversão de Abono', () => {
        AbonoReverter.reverterAbono(conteudoJson).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body['Descricao']).to.eq('SUCESSO')
        })
    })

    it('Reversão de Abono - Ausencia CNPJ', () => {
        conteudoJson.Abonos[0].NrInscEmpregador = ""
        
        AbonoReverter.reverterAbono(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de registros nao processados: 1')
        })
    })
    
    it('Reversão de Abono - Ausencia CPF', () => {
        conteudoJson.Abonos[0].NrInscEmpregador = "49074113"
        conteudoJson.Abonos[0].CPF = ""
        
        AbonoReverter.reverterAbono(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de registros nao processados: 1')
        })
    })

    it('Reversão de Abono - Ausencia CPF e CNPJ', () => {
        conteudoJson.Abonos[0].NrInscEmpregador = ""
        conteudoJson.Abonos[0].CPF = ""
        
        AbonoReverter.reverterAbono(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de registros nao processados: 1')
        })
    })
})