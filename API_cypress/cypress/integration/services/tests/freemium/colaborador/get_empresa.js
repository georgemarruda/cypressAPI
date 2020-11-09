import '../../../../../../cypress.json'
import * as getColaborador from '../../../requests/freemium_requests/get_freemium_request'

describe('Requisição GET do endpoint Empresa', () => {
    
    context('Ambiente Homologação FREEMIUM', () => {
        it('Consulta Colaborador Empresa com CPF vazio', () => {
            getColaborador.colaboradorEmpresa('homolog_freemium', '').then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body['Descricao']).to.eq("'CPF' must not be empty.")
            })

        })

        it('Consulta Colaborador Empresa', () => {

            getColaborador.colaboradorEmpresa('homolog_freemium', '39210359372').then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body['Descricao']).to.eq('Sucesso')
            })
        })

        it('Consulta Colaborador Empresa com CPF Inexistente na base', () => {

            getColaborador.colaboradorEmpresa('homolog_freemium', '99999999999').then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body['Descricao']).to.eq('Não há informações de empresas para o cpf especificado.')
            })
        })
    })


    context('Ambiente DEV FREEMIUM', () => {

        it('Consulta Colaborador Empresa com CPF vazio', () => {

            getColaborador.colaboradorEmpresa('dev_freemium', '').then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body['Descricao']).to.eq("'CPF' must not be empty.")
            })

        })

        it('Consulta Colaborador Empresa', () => {

            getColaborador.colaboradorEmpresa('dev_freemium', '92621219110').then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body['Descricao']).to.eq('Sucesso')
            })
        })

        it('Consulta Colaborador Empresa com CPF Inexistente na base', () => {

            getColaborador.colaboradorEmpresa('dev_freemium', '99999999999').then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body['Descricao']).to.eq('Não há informações de empresas para o cpf especificado.')
            })
        })
    })
})





