import '../../../../../cypress.json'
import * as PostGestorRh from '../../requests/gestorRH_request'

context('Solicitação de requisição de Inclusão de Gestores', () => {
    const conteudoJson = require('../../../../fixtures/RH/gestores.json')


    it('Inclusão de Gestor com CPF Inválido', () => {
        conteudoJson.Gestores[0].CPFGestor = "00000000000"

        PostGestorRh.GestorRhIncluir(conteudoJson).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body['Descricao']).to.eq('Itens não processados: 1')
        })
    })

    it('Inclusão de Gestores/Geridos Mesma Empresa', () => {
        conteudoJson.Gestores[0].NrInscEmpregador = "49074113"
        conteudoJson.Gestores[0].MatriculaGestor = "000002"
        conteudoJson.Gestores[0].CPFGestor = "39210359372"
        conteudoJson.Gestores[0].ListaGeridos[0].Matricula = "000001"
        conteudoJson.Gestores[0].ListaGeridos[0].CPF = "92621219110"

        conteudoJson.Geridos[0].MatriculaGerido = "000001"
        conteudoJson.Geridos[0].CPFGerido = "92621219110"
        conteudoJson.Geridos[0].ListaGestores[0].Gestores[0] = "39210359372"

        PostGestorRh.GestorRhIncluir(conteudoJson).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body['Descricao']).to.eq('SUCESSO')
        })
    })

    it('Inclusão de Gestores/Geridos Empresa Diferente', () => {
        conteudoJson.Gestores[0].NrInscEmpregador = "49074113"
        conteudoJson.Gestores[0].MatriculaGestor = "000002"
        conteudoJson.Gestores[0].CPFGestor = "39210359372"
        conteudoJson.Gestores[0].ListaGeridos[0].Matricula = "000001"
        conteudoJson.Gestores[0].ListaGeridos[0].CPF = "92621219110"
        conteudoJson.Gestores[0].ListaGeridos[0].NrInscEmpregador = "73282772"

        conteudoJson.Geridos[0].MatriculaGerido = "000001"
        conteudoJson.Geridos[0].CPFGerido = "92621219110"
        conteudoJson.Geridos[0].NrInscEmpregador = "73282772"
        conteudoJson.Geridos[0].ListaGestores[0].NrInscEmpregador = "49074113"
        conteudoJson.Geridos[0].ListaGestores[0].Gestores[0] = "39210359372"

        PostGestorRh.GestorRhIncluir(conteudoJson).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body['Descricao']).to.eq('SUCESSO')
        })
    })

    it('Inclusão de Geridos Repetidos na Mesma Empresa', () => {
        const contJson = require('../../../../fixtures/RH/gerido_repetido.json')

        contJson.Gestores[0].NrInscEmpregador = "49074113"
        contJson.Gestores[0].MatriculaGestor = "000002"
        contJson.Gestores[0].CPFGestor = "39210359372"
        contJson.Gestores[0].ListaGeridos[0].Matricula = "000001"
        contJson.Gestores[0].ListaGeridos[0].CPF = "92621219110"
        contJson.Gestores[0].ListaGeridos[0].NrInscEmpregador = "49074113"

        contJson.Geridos[0].MatriculaGerido = "000001"
        contJson.Geridos[0].CPFGerido = "92621219110"
        contJson.Geridos[0].NrInscEmpregador = "49074113"
        contJson.Geridos[0].ListaGestores[0].NrInscEmpregador = "49074113"
        contJson.Geridos[0].ListaGestores[0].Gestores[0] = "39210359372"

        contJson.Geridos[1].MatriculaGerido = "000001"
        contJson.Geridos[1].CPFGerido = "92621219110"
        contJson.Geridos[1].NrInscEmpregador = "49074113"
        contJson.Geridos[1].ListaGestores[0].NrInscEmpregador = "49074113"
        contJson.Geridos[1].ListaGestores[0].Gestores[0] = "39210359372"

        PostGestorRh.GestorRhIncluir(conteudoJson).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body['Descricao']).to.eq('SUCESSO')
        })
    })

    it('Inclusão de Geridos Repetidos Empresa Diferente', () => {
        const contJson = require('../../../../fixtures/RH/gerido_repetido.json')

        contJson.Gestores[0].NrInscEmpregador = "49074113"
        contJson.Gestores[0].MatriculaGestor = "000002"
        contJson.Gestores[0].CPFGestor = "39210359372"
        contJson.Gestores[0].ListaGeridos[0].Matricula = "000001"
        contJson.Gestores[0].ListaGeridos[0].CPF = "92621219110"
        contJson.Gestores[0].ListaGeridos[0].NrInscEmpregador = "73282772"

        contJson.Geridos[0].MatriculaGerido = "000001"
        contJson.Geridos[0].CPFGerido = "92621219110"
        contJson.Geridos[0].NrInscEmpregador = "73282772"
        contJson.Geridos[0].ListaGestores[0].NrInscEmpregador = "49074113"
        contJson.Geridos[0].ListaGestores[0].Gestores[0] = "39210359372"

        contJson.Geridos[1].MatriculaGerido = "000001"
        contJson.Geridos[1].CPFGerido = "92621219110"
        contJson.Geridos[1].NrInscEmpregador = "73282772"
        contJson.Geridos[1].ListaGestores[0].NrInscEmpregador = "49074113"
        contJson.Geridos[1].ListaGestores[0].Gestores[0] = "39210359372"

        PostGestorRh.GestorRhIncluir(conteudoJson).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body['Descricao']).to.eq('SUCESSO')
        })
    })

    it('Inclusão de Gestores/Geridos - CNPJ Gerido Inexistente no banco', () => {
        conteudoJson.Gestores[0].NrInscEmpregador = "49074113"
        conteudoJson.Gestores[0].MatriculaGestor = "000002"
        conteudoJson.Gestores[0].CPFGestor = "39210359372"
        conteudoJson.Gestores[0].ListaGeridos[0].Matricula = "000001"
        conteudoJson.Gestores[0].ListaGeridos[0].CPF = "92621219110"
        conteudoJson.Gestores[0].ListaGeridos[0].NrInscEmpregador = "63542443"

        conteudoJson.Geridos[0].MatriculaGerido = "000001"
        conteudoJson.Geridos[0].CPFGerido = "92621219110"
        conteudoJson.Geridos[0].NrInscEmpregador = "63542443"
        conteudoJson.Geridos[0].ListaGestores[0].NrInscEmpregador = "49074113"
        conteudoJson.Geridos[0].ListaGestores[0].Gestores[0] = "39210359372"

        PostGestorRh.GestorRhIncluir(conteudoJson).then((response) => {
            expect(response.status).to.eq(400)
            expect(response.body['Descricao']).to.eq('Itens não processados: 1')
        })
    })
})