describe('EDit Indexes', function() {
    const todaysDate = Cypress.moment().format('YYYYMMDDhhmmss')

    before(() => {
      cy.fixture('testuser_ct').as('testuser')

    })

    beforeEach(function () {
     // cy.fixture('testuser_ct').as('testuser')
      //cy.visit('https://uatauthwebsite3kpcft5ovp3oi.azurewebsites.net/account/login')

      cy.login(this.testuser.username,this.testuser.password)
      cy.get('.button-logout > .mat-button-wrapper').should('exist')

    })


    afterEach(function() {

     cy.get('.insight-chevron-right-thin').click()
      // click to button log out
     // cy.logout()
        cy.get('.button-logout').click()
      // Assertion page logg out
      cy.contains('You are now logged out')
     })



    /*Test cases *///////////




    it('Testcase1-indexesClick to 3 iteam ', function() {

        // Assertion page
        cy.contains('Overview')
         // click to button
        cy.get('#UITestLinkToadmin').click()
        // Assertion page
        cy.contains('Client list')
        // click to button settings
       cy.get('#UITestLinkToSettingsTest\\ Company').click()
        // Assertion page
        cy.contains('Test Company')
        //click to indexes
        cy.get('#UITestLinkNavToINSIGHT\\.ADMINSECTION\\.INDEXES').click()
        cy.get('ui-card-title').contains('Indexes')

        cy.get(':nth-child(1) > .checkbox-container > .checkmark').click()
        cy.get(':nth-child(3) > .checkbox-container > .checkmark').click()
        cy.get(':nth-child(5) > .checkbox-container > .checkmark').click()

        cy.get(':nth-child(2) > .uikit-primary').click()
        cy.get('.save-confirmation').contains('Saved')
    })

    it('Testcase2-indexesClick to 6 iteam ', function() {
        // Assertion page
        cy.contains('Overview')
         // click to button
        cy.get('#UITestLinkToadmin').click()
        // Assertion page
        cy.contains('Client list')
        // click to button settings
       cy.get('#UITestLinkToSettingsTest\\ Company').click()
        // Assertion page
        cy.contains('Test Company')
        //click to indexes
        cy.get('#UITestLinkNavToINSIGHT\\.ADMINSECTION\\.INDEXES').click()
        cy.get('ui-card-title').contains('Indexes')

        cy.get(':nth-child(1) > .checkbox-container > .checkmark').click()
        cy.get(':nth-child(3) > .checkbox-container > .checkmark').click()
        cy.get(':nth-child(5) > .checkbox-container > .checkmark').click()

        cy.get(':nth-child(2) > .checkbox-container > .checkmark').click()
        cy.get(':nth-child(4) > .checkbox-container > .checkmark').click()
        cy.get(':nth-child(6) > .checkbox-container > .checkmark').click()


        cy.get(':nth-child(2) > .uikit-primary').click()
        cy.get('.save-confirmation').contains('Saved')
    })


    it('Testcase3-indexesClick to 7 iteam ', function() {
        // Assertion page
        cy.contains('Overview')
         // click to button
        cy.get('#UITestLinkToadmin').click()
        // Assertion page
        cy.contains('Client list')
        // click to button settings
       cy.get('#UITestLinkToSettingsTest\\ Company').click()
        // Assertion page
        cy.contains('Test Company')
        //click to indexes
        cy.get('#UITestLinkNavToINSIGHT\\.ADMINSECTION\\.INDEXES').click()
        cy.get('ui-card-title').contains('Indexes')

        cy.get(':nth-child(1) > .checkbox-container > .checkmark').click()
        cy.get(':nth-child(3) > .checkbox-container > .checkmark').click()
        cy.get(':nth-child(5) > .checkbox-container > .checkmark').click()

        cy.get(':nth-child(2) > .checkbox-container > .checkmark').click()
        cy.get(':nth-child(4) > .checkbox-container > .checkmark').click()
        cy.get(':nth-child(6) > .checkbox-container > .checkmark').click()

        cy.get(':nth-child(5) > .checkbox-container > .checkmark').click()

        cy.get(':nth-child(2) > .uikit-primary').click()
        cy.get('.save-confirmation').contains('Saved')
    })
})
