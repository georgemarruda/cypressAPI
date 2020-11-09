import '../../../../../../cypress.json'
import * as getFolha from '../../../requests/freemium_requests/get_freemium_request'

describe('Requisição GET do endpoint Folha', () => {

    context('Ambiente Homologação FREEMIUM', () => {
        it('Consulta de Folha de Pagamento', () => {

            getFolha.allFolhas('homolog_freemium', '63542443000124').then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body['Descricao']).to.eq('Sucesso')
            })
        })

        it('Consulta de Folha de Pagamento - CNPJ inexistente', () => {

            getFolha.allFolhas('homolog_freemium', '00000000000000').then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body['Descricao']).to.eq('Sucesso')
            })
        })

        it('Consulta de Folha de Pagamento - CNPJ vazio', () => {

            getFolha.allFolhas('homolog_freemium', '').then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body['Descricao']).to.eq("'Cnpj Empregador' must not be empty.")
            })
        })
    })

    context('Ambiente DEV FREEMIUM', () => {
        it('Consulta de Folha de Pagamento', () => {

            getFolha.allFolhas('dev_freemium', '63542443000124').then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body['Descricao']).to.eq('Sucesso')
            })
        })

        it('Consulta de Folha de Pagamento - CNPJ inexistente', () => {

            getFolha.allFolhas('dev_freemium', '00000000000000').then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body['Descricao']).to.eq('Sucesso')
            })
        })

        it('Consulta de Folha de Pagamento - CNPJ vazio', () => {

            getFolha.allFolhas('dev_freemium', '').then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body['Descricao']).to.eq("'Cnpj Empregador' must not be empty.")
            })
        })
    })
})

