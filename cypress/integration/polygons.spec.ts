describe('geopolygons test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:10000/')

        cy.get('input[name="username"]').type("admin").should('have.value','admin')
        cy.get('input[name="password"]').type("admin").should('have.value','admin').type("{enter}")
    })

    it('create a new polygon', () => {
        cy.visit('http://localhost:10000/atlas/geopolygon/')

        cy.contains('Adicionar').click()

        cy.contains('Salvar').click()

        cy.get('.table').find('tr').its('length').should('be.gte', 1)
    })
})