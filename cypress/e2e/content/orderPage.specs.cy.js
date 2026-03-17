import '../../support/authCommands'
import '../../support/contentCommands'

describe('Verificação da pagina order', () =>{
    let dados;

    beforeEach(() => {
        cy.fixture('authLogin').then((TempDados) =>{
            dados = TempDados;
        })
    });

    it('Verifica se acessa a pagina corretamente', () =>{
        cy.login(dados.email, dados.password);
        cy.OrderVerify();
        cy.logout();
    })
})