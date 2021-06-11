describe('Gant', function() {
    before(() => {
      cy.fixture('testuser_ct').as('testuser')
    });

    before(function () {
      cy.login_gui(this.testuser.username,this.testuser.password)
      cy.get('.button-logout > .mat-button-wrapper').should('exist')
    })
    it('Check compare result', function() {
      cy.reload()
      cy.get('#UITestLinkToPortalGANT').click()
      cy.get('#UITestLinkToCompare\\ result').click()
      cy.get('.insight-info').should('exist')
      cy.get('#UITestLinkSidebaradmin > mat-expansion-panel > mat-expansion-panel-header').click()
    })
    it('Check summarized groups', function() {
      cy.get('#UITestLinkToPortalGANT').click()
      cy.get('#UITestLinkToSummarized\\ groups').click()
      cy.get('app-index-card-header').contains("Result").should('exist')
      cy.get('app-index-card-header').contains("Engagement").should('exist')
      cy.get('app-index-card-header').contains("Leadership").should('exist')
      cy.get('app-index-card-header').contains("Team efficiency").should('exist')
      cy.get('app-index-card-header').contains("ENPS").should('exist')
      cy.get('app-index-card-header').contains("Wise way").should('not.exist')
      cy.get('app-index-card-header').contains("Rhythm").should('not.exist')
      cy.get('#UITestLinkSidebaradmin > mat-expansion-panel > mat-expansion-panel-header').click()
    })
    it('Check my teams', function() {
      cy.get('#UITestLinkToPortalGANT').click()
      cy.get('#UITestLinkToMy\\ teams').click()
      cy.get('app-index-card-header').contains("Result").should('exist')
      cy.get('app-index-card-header').contains("Engagement").should('exist')
      cy.get('app-index-card-header').contains("Team efficiency").should('exist')
      cy.get('app-index-card-header').contains("Leadership").should('exist')
      cy.get('app-index-card-header').contains("ENPS").should('exist')
      cy.get('app-index-card-header').contains("Wise way").should('not.exist')
      cy.get('app-index-card-header').contains("Rhythm").should('not.exist')
      cy.get('#UITestLinkSidebaradmin > mat-expansion-panel > mat-expansion-panel-header').click()
    })
    after(function() {
      cy.get('.insight-chevron-right-thin').click()
      cy.logout()
    })
})
