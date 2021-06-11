describe('Menu test', function() {
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

    it('Testcase1-AdminPageTestMenu', function() {

    // Assertion page
    cy.contains('Client list')
    // click to button settings
    cy.get('#UITestLinkToSettingsTest\\ Company').click()
    // Assertion page
    cy.contains('Test Company')
    //click to button Report
    cy.get('#UITestLinkNavToINSIGHT\\.ADMINSECTION\\.REPORTS').click()
    // click to button Indexes
    cy.get('#UITestLinkNavToINSIGHT\\.ADMINSECTION\\.INDEXES').click()
    cy.get('ui-card-title').contains('Indexes')
    // click to button Group Categories
    cy.get('#UITestLinkNavToINSIGHT\\.ADMINSECTION\\.GROUPCATEGORIES').click()
    cy.get('ui-card-title').contains('Group categories')
    // click to Group categoris Hierarchis
    cy.get('#UITestLinkNavToINSIGHT\\.ADMINSECTION\\.GROUPCATEGORYHIERARCHIES').click()
    cy.get('ui-card-title').contains('Group Category Hierarchies')
    // click to Rules
    cy.get('#UITestLinkNavToINSIGHT\\.ADMINSECTION\\.RULES').click()
    cy.get('ui-card-title').contains('User relations')
    // click to ANONYMITY
    cy.get('#UITestLinkNavToINSIGHT\\.ADMINSECTION\\.ANONYMITY').click()
    cy.get('app-company-anonymity-name-input > .ng-star-inserted').contains('New anonymity')
    // click to Languages
    cy.get('#UITestLinkNavToINSIGHT\\.ADMINSECTION\\.LANGUAGES').click()
    cy.get('ui-card-title').contains('Languages')
    // click to Attreibutes
    cy.get('#UITestLinkNavToINSIGHT\\.ADMINSECTION\\.ATTRIBUTES').click()
    cy.get('ui-card-title').contains('Attributes')
    //click to Products
    cy.get('#UITestLinkNavToINSIGHT\\.ADMINSECTION\\.PRODUCTS').click()
    cy.get(':nth-child(2) > .ui-list > .list-title').contains('Added products')
    //click to roles
    cy.get('#UITestLinkNavToINSIGHT\\.ADMINSECTION\\.ROLES').click()
    cy.get('ui-card-title').contains('Roles')
    // click to email
    cy.get('#UITestLinkNavToINSIGHT\\.ADMINSECTION\\.EMAILS').click()
    cy.get('ui-card-title').contains('Emails')
    // click to lib
    cy.get('#UITestLinkNavToINSIGHT\\.ADMINSECTION\\.LIBRARIES').click()
    cy.get('ui-card-title').contains('Libraries')
    //click to snapshots
    cy.get('#UITestLinkNavToINSIGHT\\.ADMINSECTION\\.SNAPSHOTS').click()
    cy.get('ui-card-title').contains('Snapshots')
    // click to customer button
    cy.get('#UITestLinkSidebarcustomers > mat-expansion-panel > mat-expansion-panel-header').click()
    // assertion page
    cy.get('ui-card-title').contains('Client list')
    // click to attributes
    cy.get('#UITestLinkSidebarattributes > mat-expansion-panel > mat-expansion-panel-header').click()
   // Assertion page
    cy.get('ui-card-title').contains('Attributes')
    // click to Product definition
    cy.get('#UITestLinkSidebarproductdefinitions > mat-expansion-panel > mat-expansion-panel-header').click()
    // Assertion page
    cy.get('ui-card-title').contains('Product definitions')
    // click to indexes
    cy.get('#UITestLinkSidebarindexes > mat-expansion-panel > mat-expansion-panel-header').click()
    cy.get('ui-card-title').contains('Indexes')
    cy.get('.insight-bar1 > use').click()

    cy.get('.insight-bar1 > use')

    })


})
