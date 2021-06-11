describe('New Company', function() {
    const todaysDate = Cypress.moment().format('YYYYMMDDhhmmss')
    before(() => {
      cy.fixture('testuser_ct').as('testuser')
    });

    it('Login', function() {
      cy.login_gui(this.testuser.username,this.testuser.password)
      cy.get('.button-logout > .mat-button-wrapper').should('exist')
      cy.location('pathname').should('eq','/logain')
    })
    it('Create new company', function() {
      cy.get('.insight-plus-thick > use').click()

      cy.get('#UITestLinkToCompanyName > div.ng-untouched > .ng-untouched').type("date"+todaysDate)

      cy.get('#UITestLinkToCompanyShortName > div.ng-untouched > .ng-untouched').type("date"+todaysDate)

      cy.get('[formcontrolname="branch"] > .dropdown-options > .selected-value').click()
      cy.get('.dropdown-list-container > :nth-child(2)').click()

      cy.get('[formcontrolname="detailedBranch"] > .dropdown-options > .selected-value').click()
      cy.get('.dropdown-list-container > :nth-child(2) > .ng-star-inserted').click()


      cy.get('#UITestLinkToInternalName > .ng-dirty > .ng-untouched').type("intname")

      cy.get('.buttons > .uikit-primary').click()

      cy.get('.logo-upload').should('exist')
    })
    after(function() {
      cy.logout()
    });
})
