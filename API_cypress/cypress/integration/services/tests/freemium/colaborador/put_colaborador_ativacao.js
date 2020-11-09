import '../../../../../../cypress.json'
import * as put from '../../../requests/freemium_requests/put_freemium_request'

describe('Requisição PUT do endpoint Colaborador Ativação', () => {
// O CASO ESTÁ ESCRITO COM O RETORNO DESEJADO. MAS O DEV PRECISA AJUSTAR
    context('Ambiente Homologação FREEMIUM', () => {
        it.ski('Atualizando a Ativação do colaborador', () => {

            put.colaboradorAtivacao('homolog_freemium').then((response) => {
                expect(response.status).to.eq(400)
                expect(response.body['Descricao']).to.eq("'CPF' must not be empty.,'Nr Insc Empregador' must not be empty.")
            })
        })
    })
})