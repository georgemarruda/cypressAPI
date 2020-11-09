import '../../../../../../cypress.json'
import * as getColaborador from '../../../requests/freemium_requests/get_freemium_request'

describe('Requisição GET do endpoint Colaborador Resumo', () => {
    
    context('Ambiente Homologação FREEMIUM', () => {
        it('Consulta Resumo Colaborador com CPF vazio', () => {

            getColaborador.colaboradorResumo('homolog_freemium', '').then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body['Descricao']).to.eq("'CPF' must not be empty.")
            })

        })

        it('Consulta Resumo Colaborador com CPF Inexistente', () => {

            getColaborador.colaboradorResumo('homolog_freemium', '99999999999').then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body['Descricao']).to.eq('No items found with the provided keys.')
            })

        })

        it('Consulta Resumo Colaborador', () => {

            getColaborador.colaboradorResumo('homolog_freemium', '39210359372').then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body['Descricao']).to.eq('Sucesso')
            })

        })
    })

    context('Ambiente Dev FREEMIUM', () => {
        it('Consulta Resumo Colaborador com CPF vazio', () => {

            getColaborador.colaboradorResumo('dev_freemium', '').then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body['Descricao']).to.eq("'CPF' must not be empty.")
            })

        })

        it('Consulta Resumo Colaborador com CPF Inexistente', () => {

            getColaborador.colaboradorResumo('dev_freemium', '00000000000').then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body['Descricao']).to.eq('No items found with the provided keys.')
            })

        })

        it('Consulta Resumo Colaborador', () => {

            getColaborador.colaboradorResumo('dev_freemium', '69487357114').then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body['Descricao']).to.eq('Sucesso')
            })

        })
    })
})





