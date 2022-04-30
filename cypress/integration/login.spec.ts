describe('login tests', () => {
    it('Login success', () => {
        cy.visit('http://localhost:10000/')

        cy.get('input[name="username"]').type("admin").should('have.value','admin')
        cy.get('input[name="password"]').type("admin").should('have.value','admin').type("{enter}")
    })
})