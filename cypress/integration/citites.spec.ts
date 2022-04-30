describe('cities test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:10000/')

        cy.get('input[name="username"]').type("admin").should('have.value','admin')
        cy.get('input[name="password"]').type("admin").should('have.value','admin').type("{enter}")
    })

    it('create a new city', () => {
        cy.visit('http://localhost:10000/base/state')

        cy.contains('Adicionar').click()

        cy.get('input[name="name"]').type("name").should('have.value','name')
        cy.get('input[name="uf"]').type("uf").should('have.value','uf').type("{enter}")

        cy.visit('http://localhost:10000/base/city')

        cy.contains('Adicionar').click()
    
        cy.get('input[name="name"]').type("name").should('have.value','name')
        cy.get('.select2-selection__rendered').click()
        cy.get('input[class=select2-search__field]').type("name").should('have.value','name').type('{enter}')

        cy.contains('Salvar').click()


        cy.get('.table').find('tr').its('length').should('be.gte', 1)
    })

    it('create a new city error', () => {
        cy.visit('http://localhost:10000/base/city/add')
    
        cy.get('input[name="name"]').type("name").should('have.value','name').type("{enter}")
        cy.get('li').should('contain', 'Este campo é obrigatório.')
    })

    it('edit city', () => {
        cy.visit('http://localhost:10000/base/city')

        cy.contains('name').click()
    
        cy.get('input[name="name"]').type("name").should('have.value','name').type("{enter}")
    })

    it('delete city', () => {
        cy.visit('http://localhost:10000/base/city')

        cy.contains('name').click()

        cy.contains('Apagar').click()
        cy.contains('Sim, eu tenho certeza').click()
    })
})