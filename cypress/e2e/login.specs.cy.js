import '../support/authCommands'

describe('Usuarios devem realizar o login', () =>{
    let dados;

    beforeEach(() => {
        cy.fixture('login').then((TempDados) =>{
            dados = TempDados;
        })
    });

    it('Realizar login com sucesso', () =>{
        cy.login(dados.email, dados.password);
        //cy.contains("[type='email']")
    })
})