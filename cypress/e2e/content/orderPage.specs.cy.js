import '../../support/authCommands'
import '../../support/contentCommands'

describe('Usuarios devem realizar o login', () =>{

    beforeEach(function () {
        cy.fixture('authLogin').then((dados) => {
            this.dados = dados;
        });
    });

    it('Realizar login com sucesso', function () {
        cy.login(this.dados.email, this.dados.password);
    });
});