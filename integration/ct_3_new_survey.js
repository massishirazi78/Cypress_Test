describe('New Survey', function() {
    const todaysDate = Cypress.moment().format('YYYYMMDDhhmmss')
    before(() => {
      cy.fixture('testuser_ct').as('testuser')
    });

    before(function () {
      cy.login_gui(this.testuser.username,this.testuser.password)
      cy.get('.button-logout > .mat-button-wrapper').should('exist')
    })

    it('Create new survey', function() {

      cy.get('#UITestLinkToPortalTest\\ Company').click()

      cy.get('#UITestLinkTosurvey').click()

      cy.get('#UITestLinkToNewSurvey').click()

      cy.get('#UITestSurveyEmployee\\ survey').click()

      //Packages
      cy.get('#UITestAddModuleLeadership\\ -\\ LSI').click()
      cy.get('#UITestAddModuleTeam\\ efficiency\\ -\\ TEI').click()
      cy.get('#UITestAddModuleEngagement\\ -\\ EI').click()
      cy.get('#UITestLinkNext').click()

      //Name of Survey
      cy.get('#UITestInputField').type("MySurvey")
      cy.get('#UITestLinkNext').click()

      //Participants
      cy.get('[aria-rowindex="7"] > .e-treegridcheckbox > .e-treecolumn-container > .e-checkbox-wrapper > .e-frame').click()
      cy.get('#UITestLinkNext').click()

      //Communication
      cy.get('#UITestLinkNext').click()

      //Schema
      cy.get('#UITestDateToday > .ui-radio-label > .ui-radio-container').click()
      cy.get('#UITestLinkNext').click()


    })
    after(function() {
      cy.logout()
    })
})
