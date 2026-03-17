import '../../support/authCommands'

describe('Usuarios devem realizar o login', () =>{
    let dados;

    beforeEach(() => {
        cy.fixture('authLogin').then((TempDados) =>{
            dados = TempDados;
        })
    });

    it('Realizar login com sucesso', () =>{
        cy.login(dados.email, dados.password);
    });
})