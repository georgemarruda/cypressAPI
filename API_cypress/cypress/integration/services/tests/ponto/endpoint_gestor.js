import '../../../../../cypress.json'
import * as Gestor from '../../requests/gestorPonto_request'

context('Solicitação de requisição de Gestor Ponto', () => {
    const conteudoJson = require('../../../../fixtures/ponto/gestores_incluir.json')

    it('Inclusão de Gestores/Geridos Mesma Empresa', () => {
        Gestor.GestorPontoIncluir(conteudoJson).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body['Descricao']).to.eq('SUCESSO')
        })
    })    

    it('Inclusão de Gestores Inválidos', () => {
        conteudoJson.Gestores[0].CPFGestor = "00000000000"        

        Gestor.GestorPontoIncluir(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de registros não processados: 1')
        })
    })

    it('Inclusão de Gestores/Geridos Empresa Diferente', () => {
        conteudoJson.Gestores[0].NrInscEmpregador = "49074113"  
        conteudoJson.Gestores[0].CPFGestor = "39210359372"       
        conteudoJson.Gestores[0].ListaGeridos[0].NrInscEmpregador = "73282772"

        Gestor.GestorPontoIncluir(conteudoJson).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body['Descricao']).to.eq('SUCESSO')
        })
    })
})

context('Solicitação de requisição de Gestor Ponto', () => {
    const conteudoJson = require('../../../../fixtures/ponto/gestores_excluir.json')

    it('Exclusao de Gestores/Geridos Mesma Empresa', () => {

        Gestor.GestorPontoExcluir(conteudoJson).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body['Descricao']).to.eq('SUCESSO')
        })
    })    

    it('Exclusao de Gestores Inválidos', () => {
        conteudoJson.Gestores[0].CPFGestor = "00000000000"        

        Gestor.GestorPontoExcluir(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de registros não processados: 1')
        })
    })

    it('Exclusao de Gestor Inexistente', () => {
        conteudoJson.Gestores[0].NrInscEmpregador = "49074113"  
        conteudoJson.Gestores[0].CPFGestor = "83778292315"       
        conteudoJson.Gestores[0].ListaGeridos[0].NrInscEmpregador = "73282772"

        Gestor.GestorPontoIncluir(conteudoJson).then((response) => {
            expect(response.status).to.eq(401)
            expect(response.body['Descricao']).to.eq('Quantidade de registros não processados: 1')
        })
    })
})