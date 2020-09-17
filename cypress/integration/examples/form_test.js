

describe('test all inputs',() => {
    it('Navigates to site',() =>{
        cy.visit('http://localhost:3000')
    }) 
    it('checks if name takes text',() => {
        cy.get('input[name = "name"]').type('Miah')
        .should('have.value', 'Miah')
    })
    it('checks it email takes text',() => {
        cy.get('input[name = "email"]').type('killme@bing.com')
        .should('have.value', 'killme@bing.com')
    })
    it('checks if password take text',() => {
        cy.get('input[name = "password"]').type('lksdjfokls')
        .should('have.value', 'lksdjfokls')
    })
    it('checks checkbox can be checked', () =>{
        cy.get('input[name="terms"]')
        .check().should('be.checked')
    })
    it('checks for submit',()=>{
        cy.get('[type=submit]').click()
    })
})

describe('missing input',()=>{
    it('wont submit with missing input',()=>{
        cy.get('[type=submit]').should('be.disabled')
    })
})