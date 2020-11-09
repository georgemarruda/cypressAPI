import '../../../../../cypress.json'
import * as AbonoInconsistencia from '../../requests/abono_inconsistencia.request'

context('Solicitação de requisição de Inconsistencia de Abono', () => {
    const conteudoJson = require('../../../../fixtures/ponto/abono_inconsistencia.json')

    it('Existe Inconsistencia no Abono', () => {
        AbonoInconsistencia.inconsistenciaAbono(conteudoJson).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body['Descricao']).to.eq('SUCESSO')
        })
    })

    it('Existe Inconsistencia no Abono - Ausencia CNPJ', () => {
        conteudoJson.Abonos[0].NrInscEmpregador = ""
        
        AbonoInconsistencia.inconsistenciaAbono(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de registros nao processados: 1')
        })
    })
    
    it('Existe Inconsistencia no Abono - Ausencia CPF', () => {
        conteudoJson.Abonos[0].NrInscEmpregador = "49074113"
        conteudoJson.Abonos[0].CPF = ""
        
        AbonoInconsistencia.inconsistenciaAbono(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de registros nao processados: 1')
        })
    })

    it('Existe Inconsistencia no Abono - Ausencia CPF e CNPJ', () => {
        conteudoJson.Abonos[0].NrInscEmpregador = ""
        conteudoJson.Abonos[0].CPF = ""
        
        AbonoInconsistencia.inconsistenciaAbono(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de registros nao processados: 1')
        })
    })
})