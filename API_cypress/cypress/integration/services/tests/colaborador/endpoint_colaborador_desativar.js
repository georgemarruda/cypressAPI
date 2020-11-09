import '../../../../../cypress.json'
import * as Colaborador from '../../requests/colaborador_request'

describe('Requisição POST do endpoint Desativa Colaborador', () => {

    context('Solicitação de requisição de Desativação de Colabordaor', () => {
        const conteudoJson = require('../../../../fixtures/colaborador/colaborador_desativar.json')
    
        it('Desativar Colaborador', () => {
            conteudoJson.Colaboradores[0].CPF = '52596917092'
            conteudoJson.Colaboradores[0].Matricula = '999999'
            conteudoJson.Colaboradores[0].NrInscEmpregador = '73282772'
    
            Colaborador.desativaColaborador(conteudoJson).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body['Descricao']).to.eq('Sucesso')
            })
        })
    
        it('Desativar Colaborador - Ausencia CNPJ', () => {
            conteudoJson.Colaboradores[0].NrInscEmpregador = ''
    
            Colaborador.desativaColaborador(conteudoJson).then((response) => {
                expect(response.status).to.eq(401)
                expect(response.body['Descricao']).to.eq('Quantidade de Registros não processados: 1')
            })
        })
    
        it('Desativar Colaborador - Ausencia CPF', () => {
            conteudoJson.Colaboradores[0].NrInscEmpregador = '73282772'
            conteudoJson.Colaboradores[0].CPF = ''
    
            Colaborador.desativaColaborador(conteudoJson).then((response) => {
                expect(response.status).to.eq(401)
                expect(response.body['Descricao']).to.eq('Quantidade de Registros não processados: 1')
            })
        })
    
    })
})


