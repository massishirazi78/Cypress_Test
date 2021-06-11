describe('Detail Survey', function() {
  const todaysDate = Cypress.moment().format('YYYYMMDDhhmmss')
       
  
  beforeEach(() => {
    cy.fixture('testuser_ct').as('testuser')
  });
   
  beforeEach(function () {  
    cy.login_gui(this.testuser.username,this.testuser.password) 
  })
 
  afterEach(function() {
    cy.logout()     
  })
 
  it('TC1-Survey detail open and close ', function() {
  
    cy.contains('Client list')
    cy.get('#UITestLinkToPortalTest\\ Company').click()
    cy.contains('Overview')          
    cy.get('#UITestLinkTosurvey').click()
    // click to Future
    cy.get('#mat-tab-label-0-1 > .mat-tab-label-content').click()
     
    // click to Finished
    cy.get('#mat-tab-label-0-2 > .mat-tab-label-content').click()
    //click to Active
    cy.get('#mat-tab-label-0-0 > .mat-tab-label-content').click()

    //Details
    cy.get('.cdk-column-detail > a').click()
    cy.get('.main-title').contains('Test undersökning')
      
    //open

    cy.get('app-survey-participants-section.ng-star-inserted > .ui-card > .card-container > .card-collapsable-header > .card-container-header > .title').click()
    cy.get('app-survey-questions-indexes-section.ng-star-inserted > .ui-card > .card-container > .card-collapsable-header > .card-container-header > .title').click()
    cy.get('app-survey-communication-section.ng-star-inserted > .ui-card > .card-container > .card-collapsable-header > .card-container-header > .title').click()

    // close
    cy.get('app-survey-participants-section.ng-star-inserted > .ui-card > .card-container > .card-collapsable-header > .card-container-header > .title').click()
    cy.get('app-survey-questions-indexes-section.ng-star-inserted > .ui-card > .card-container > .card-collapsable-header > .card-container-header > .title').click()   
    cy.get('app-survey-communication-section.ng-star-inserted > .ui-card > .card-container > .card-collapsable-header > .card-container-header > .title').click()
  
   })

  it('TC2-Survey details and open Participants and Search Team 1 and Team 4 ', function() {
  
    cy.contains('Client list')
    cy.get('#UITestLinkToPortalTest\\ Company').click()
    cy.contains('Overview')          
    cy.get('#UITestLinkTosurvey').click()
    // click to Future
    cy.get('#mat-tab-label-0-1 > .mat-tab-label-content').click()
    
    // click to Finished
    cy.get('#mat-tab-label-0-2 > .mat-tab-label-content').click()
    //click to Active
    cy.get('#mat-tab-label-0-0 > .mat-tab-label-content').click()

    //Details
    cy.get('.cdk-column-detail > a').click()
    cy.get('.main-title').contains('Test undersökning')
      
    //open Participants

    cy.get('app-survey-participants-section.ng-star-inserted > .ui-card > .card-container > .card-collapsable-header > .card-container-header > .title').click()
    cy.wait(2000)
    cy.get('#uikit-input-0').type('Team 4{enter}')
    cy.get('.e-gridrowindex4level2 > .e-treecolumn-container > .e-treecell').contains('Team 4')

    cy.get('#uikit-input-0').clear()
    cy.get('#uikit-input-0').type('Team 1{enter}')
    cy.get('.e-gridrowindex1level2 > .e-treecolumn-container > .e-treecell').contains('Team 1')
    //close Participants
    cy.get('app-survey-participants-section.ng-star-inserted > .ui-card > .card-container > .card-collapsable-header > .card-container-header > .title').click()
  
    })
})