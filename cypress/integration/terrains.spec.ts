describe('cities test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:10000/')

        cy.get('input[name="username"]').type("admin").should('have.value','admin')
        cy.get('input[name="password"]').type("admin").should('have.value','admin').type("{enter}")
    })

    it('create a new terrain', () => {
        cy.visit('http://localhost:10000/atlas/geopolygon/')

        cy.contains('Adicionar').click()

        cy.contains('Salvar').click()

        cy.visit('http://localhost:10000/greenfield/terrain')

        cy.contains('Adicionar').click()
    
        cy.get('input[name="identifier"]').type("identifier").should('have.value','identifier')
        cy.get('input[name="name"]').type("name").should('have.value','name')
        cy.get('[id=select2-id_city-container]').click()
        cy.get('input[class=select2-search__field]').type("name").should('have.value','name').type('{enter}')
        cy.get('[id=select2-id_polygon-container]').click()
        cy.get('input[class=select2-search__field]').type("po").should('have.value','po').type('{enter}')

        cy.contains('Salvar').click()


        cy.get('.table').find('tr').its('length').should('be.gte', 1)
    })

    it('create a new terrain error', () => {
        cy.visit('http://localhost:10000/greenfield/terrain/add')
    
        cy.get('input[name="identifier"]').type("identifier").should('have.value','identifier').type('{enter}')
        cy.get('li').should('contain', 'Este campo é obrigatório.')
    })
})