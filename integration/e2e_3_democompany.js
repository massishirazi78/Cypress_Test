describe('DemoCompany', function() {
    before(() => {
        cy.fixture('testuser_local').as('testuser')
      });

    it('Survey cart exists for DemoCompany', function() {
      cy.login_gui(this.testuser.username,this.testuser.password)
      cy.get('#UITestLinkToPortalDemoCompany').click()
    })
  })
