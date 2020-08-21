
describe('Form App', () => {



    describe('Name input test', () => {
        it('open react app server its running on', () => {
            cy.visit('http://localhost:3000/')
        })
        it("clicks on Pizza Route", () => {
            cy.get(':nth-child(2) > a')
            .click()
        })

        it('insert an input for username and check', () => {
            cy.get('input[name="name"]')
            .type('Abdi')
            .should('have.value', 'Abdi')
        })
        

        it("checks checkbox",  () => {
            cy.get(':nth-child(10) > input')
            .click()
            cy.get(':nth-child(11) > input')
            .click()
            cy.get(':nth-child(12) > input')
            .click()
            cy.get(':nth-child(13) > input')
            .click()
            cy.get(':nth-child(14) > input')
            .click()
            cy.get(':nth-child(15) > input')
            .click()
            
        })
        it("clicks submit", () => {
            cy.get('form > button')
            .click()
        })


        
            

    })
    
    // describe('Class enabled', function() {
    //     it('Checks if input classname is enabled', function () {
    //         cy.get('form').find('input').should('not.have.class', 'disabled')
    //     })
    // })

    // describe('Form inputs', function() {
    //     it('Checks if input of form are visible', function () {
    //         cy.get('form').should('be.visible')
    //     })
    // })


    






})