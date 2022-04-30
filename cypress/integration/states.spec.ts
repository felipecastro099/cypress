describe('states test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:10000/')

        cy.get('input[name="username"]').type("admin").should('have.value','admin')
        cy.get('input[name="password"]').type("admin").should('have.value','admin').type("{enter}")
    })

    it('create a new state', () => {
        cy.visit('http://localhost:10000/base/state')

        cy.contains('Adicionar').click()

        cy.get('input[name="name"]').type("name").should('have.value','name')
        cy.get('input[name="uf"]').type("uf").should('have.value','uf').type("{enter}")

        cy.get('.table').find('tr').its('length').should('be.gte', 1)
    })

    it('create a new state error', () => {
        cy.visit('http://localhost:10000/base/state/add')

        cy.get('input[name="uf"]').type("uf").should('have.value','uf').type("{enter}")
        cy.get('li').should('contain', 'Este campo é obrigatório.')
    })

    it('edit state', () => {
        cy.visit('http://localhost:10000/base/state')

        cy.contains('name - uf').click()

        cy.get('input[name="uf"]').type("uf").should('have.value','uf').type("{enter}")
    })

    it('delete state', () => {
        cy.visit('http://localhost:10000/base/state')

        cy.contains('name - uf').click()

        cy.contains('Apagar').click()
        cy.contains('Sim, eu tenho certeza').click()
    })
})