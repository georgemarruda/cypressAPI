import '../../../../../../cypress.json'
import * as getColaborador from '../../../requests/freemium_requests/get_freemium_request'

describe('Requisição GET do endpoint Colaborador Profile', () => {

    context('Ambiente Homologação FREEMIUM', () => {
        it('Consulta do Profile do Colaborador com CPF e CNPJ vazio', () => {

            getColaborador.profile('homolog_freemium', '', '').then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body['Descricao']).to.eq("'CPF' must not be empty.,'Nr Insc Empregador' must not be empty.")
            })
        })

        it('Consulta do Profile do Colaborador', () => {

            getColaborador.profile('homolog_freemium', '49074113', '39210359372').then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body['Descricao']).to.eq('Sucesso')
            })
        })

        it('Consulta do Profile do Colaborador com CPF Vazio', () => {

            getColaborador.profile('homolog_freemium', '49074113', '').then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body['Descricao']).to.eq("'CPF' must not be empty.")
            })
        })

        it('Consulta do Profile do Colaborador com CNPJ Vazio', () => {

            getColaborador.profile('homolog_freemium', '', '39210359372').then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body['Descricao']).to.eq("'Nr Insc Empregador' must not be empty.")
            })
        })

        it('Consulta do Profile do Colaborador com CPF e CNPJ Inexistentes na base', () => {

            getColaborador.profile('homolog_freemium', '00000000', '00000000000').then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body['Descricao']).to.eq('Não foi encontrado um colaborador para o CPF e CNPJ indicados.')
            })
        })
    })

    context('Ambiente DEV FREEMIUM', () => {

        it('Consulta do Profile do Colaborador com CPF e CNPJ vazio', () => {

            getColaborador.profile('dev_freemium', '', '').then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body['Descricao']).to.eq("'CPF' must not be empty.,'Nr Insc Empregador' must not be empty.")
            })

        })

        it('Consulta do Profile do Colaborador', () => {

            getColaborador.profile('dev_freemium', '49074113', '39210359372').then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body['Descricao']).to.eq('Sucesso')
            })
        })

        it('Consulta do Profile do Colaborador com CPF Vazio', () => {

            getColaborador.profile('dev_freemium', '49074113', '').then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body['Descricao']).to.eq("'CPF' must not be empty.")
            })
        })

        it('Consulta do Profile do Colaborador com CNPJ Vazio', () => {

            getColaborador.profile('dev_freemium', '', '39210359372').then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body['Descricao']).to.eq("'Nr Insc Empregador' must not be empty.")
            })
        })

        it('Consulta do Profile do Colaborador com CPF e CNPJ Inexistentes na base', () => {

            getColaborador.profile('dev_freemium', '00000000', '00000000000').then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body['Descricao']).to.eq('Não foi encontrado um colaborador para o CPF e CNPJ indicados.')
            })
        })
    })
})