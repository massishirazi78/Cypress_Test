describe('Add new Product', function() {
    const todaysDate = Cypress.moment().format('YYYYMMDDhhmmss')
    before(() => {
      cy.fixture('testuser_ct').as('testuser')
    });

    before(function () {
      cy.login_gui(this.testuser.username,this.testuser.password)
      cy.get('.button-logout > .mat-button-wrapper').should('exist')
      cy.location('pathname').should('eq','/logain')
    })
    it('Create product', function() {

      cy.get('#UITestLinkToSettingsDemo').click()
      cy.get('.mat-tab-header-pagination-after > .mat-tab-header-pagination-chevron').click()
      cy.get('.mat-tab-header-pagination-after > .mat-tab-header-pagination-chevron').click()
      cy.get('.mat-tab-header-pagination-after > .mat-tab-header-pagination-chevron').click()


      cy.get('#UITestLinkNavToINSIGHT\\.ADMINSECTION\\.PRODUCTS').click()

      cy.get('#UITestAddProductEmployee\\ survey > .uikit-icon > .insight-plus-thick').click()
      cy.get(':nth-child(2) > label > .header > .translate-link').click()

      //Change names and translations
      cy.get('#mat-input-1').clear()
      cy.get('#mat-input-1').type("Min")
      cy.get('#mat-input-3').clear()
      cy.get('#mat-input-3').type("My")
      cy.get('.mat-dialog-actions > .uikit-primary').click()

      //Select anonymity
      cy.get(':nth-child(4) > .ui-dropdown > .dropdown-options > .selected-value').click()
      cy.get('li.ng-star-inserted > .ng-star-inserted').click()

      cy.get('.save-button').click()

    })
    after(function() {
      cy.logout()
    });
})
