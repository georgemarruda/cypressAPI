import '../../../../../../cypress.json'
import * as getColaborador from '../../../requests/freemium_requests/get_freemium_request'

describe('Requisição GET do endpoint Licenciado', () => {
    
    context('Ambiente Homologação FREEMIUM', () => {
        it('Consulta licenciado', () => {

            getColaborador.licenciado('homolog_freemium', '24547783').then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body['Descricao']).to.eq('Sucesso')
            })

        })

        it('Consulta licenciado com CNPJ vazio', () => {

            getColaborador.licenciado('homolog_freemium', '').then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body['Descricao']).to.eq("'Nr Insc Empregador' must not be empty.")
            })

        })
    })

    context('Ambiente Homologação FREEMIUM', () => {
        it('Consulta licenciado', () => {

            getColaborador.licenciado('dev_freemium', '24547783').then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body['Descricao']).to.eq('Sucesso')
            })

        })

        it('Consulta licenciado com CNPJ vazio', () => {

            getColaborador.licenciado('dev_freemium', '').then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body['Descricao']).to.eq("'Nr Insc Empregador' must not be empty.")
            })

        })
    })
})





