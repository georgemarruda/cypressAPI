import '../../../../../cypress.json'
import * as AbonoReceber from '../../requests/abono_receber_request'

context('Solicitação de requisição de Recebimento de Abono', () => {
    const conteudoJson = require('../../../../fixtures/ponto/abono_receber.json')

    it('Existe Inconsistencia no Abono', () => {
        AbonoReceber.receberAbono(conteudoJson).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body['Descricao']).to.eq('SUCESSO')
        })
    })

    it('Existe Inconsistencia no Abono - Ausencia CNPJ', () => {
        conteudoJson.Colaboradores[0].NrInscEmpregador = ""
        
        AbonoReceber.receberAbono(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Erro na validacao do corpo. Chaves: NrInscEmpregador')
        })
    })
    
    it('Existe Inconsistencia no Abono - Ausencia CPF', () => {
        conteudoJson.Colaboradores[0].NrInscEmpregador = "49074113"
        conteudoJson.Colaboradores[0].CPF = ""
        
        AbonoReceber.receberAbono(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Erro na validacao do corpo. Chaves: CPF')
        })
    })

    it('Existe Inconsistencia no Abono - Ausencia CPF e CNPJ', () => {
        conteudoJson.Colaboradores[0].NrInscEmpregador = ""
        conteudoJson.Colaboradores[0].CPF = ""
        
        AbonoReceber.receberAbono(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Erro na validacao do corpo. Chaves: NrInscEmpregador, CPF')
        })
    })
})