describe('EDit_Group Category Hierarchy', function(){
  const todaysDate = Cypress.moment().format('YYYYMMDDhhmmss')
 

  beforeEach(() => {
    cy.fixture('testuser_ct').as('testuser')
    cy.login_gui(this.testuser.username,this.testuser.password)
 
  })
  
  afterEach(function() {
    cy.logout()    
  })

  /*Test cases *///////////  

 it('Testcase1- Add a Group ', function() {
  
  // Assertion page
  cy.contains('Client list')
  //click to button settings
  cy.get('#UITestLinkToSettingsTest\\ Company').click()    
  // Assertion page 
  cy.contains('Test Company')  
  cy.get('#UITestLinkNavToINSIGHT\\.ADMINSECTION\\.GROUPCATEGORYHIERARCHIES').click()
  cy.get('ui-card-title').contains('Group Category Hierarchies')
  // click to add GROUPCATEGORYHIERARCHIES
  cy.get('.add > .uikit-button-wrapper').click()
  cy.get('ui-card-title').contains('Add Group Category Hierarchy')
  cy.get('div.ng-pristine > .ng-pristine').type('OR_cy_test1_'+ todaysDate )
  cy.get('.button-group > .uikit-primary').click()
  cy.wait(1000)
  cy.get('ui-card-title').contains('Group Category Hierarchies')
  


  })  
    
  it('Testcase2- Delete a Group', function() {
  
    cy.contains('Client list')
    // click to button settings
    cy.get('#UITestLinkToSettingsTest\\ Company').click()    
    // Assertion page 
    cy.contains('Test Company')  
    cy.get('#UITestLinkNavToINSIGHT\\.ADMINSECTION\\.GROUPCATEGORYHIERARCHIES').click()
    cy.get('ui-card-title').contains('Group Category Hierarchies')
    // delete group
    cy.get('.ui-card-content > :nth-child(3) > .uikit-primary > .uikit-button-wrapper > .label').click()
  
    cy.get('ui-card-title').contains('Edit Group Category Hierarchy')
    cy.get('.delete > .uikit-button-wrapper > .label').click()
    cy.wait(1000)
    cy.get('ui-card-title').contains('Group Category Hierarchies')
  
   
  })  

  it('Testcase3- Click to isActive and isDefault and check button Delete is not visibel', function() {
     
    // Assertion page
    cy.contains('Client list')
    // click to button settings
    cy.get('#UITestLinkToSettingsTest\\ Company').click()    
    // Assertion page 
    cy.contains('Test Company')  
    cy.get('#UITestLinkNavToINSIGHT\\.ADMINSECTION\\.GROUPCATEGORYHIERARCHIES').click()
    cy.get('ui-card-title').contains('Group Category Hierarchies')
    // Test Group    isActive
    cy.get(':nth-child(2) > :nth-child(3) > .checkbox-container > .checkmark').should('not.be.selected')  
    cy.get(':nth-child(2) > :nth-child(3) > .checkbox-container > .checkmark').click()
     // Test Group isDefault
    cy.get(':nth-child(2) > :nth-child(4) > .checkbox-container > .checkmark').should('not.be.selected')
    cy.get(':nth-child(2) > :nth-child(4) > .checkbox-container > .checkmark').click()
    // Assertion select
    // edit
    cy.get(':nth-child(2) > .uikit-primary > .uikit-button-wrapper > .label').click()
    cy.get('ui-card-title').contains('Edit Group Category Hierarchy')
    cy.get('.delete > .uikit-button-wrapper > .label').should('not.be.visible')
    // click to cancel
    cy.get('.uikit-secondary > .uikit-button-wrapper > .label').click()
    cy.get('ui-card-title').contains('Group Category Hierarchies')
    
    cy.get(':nth-child(2) > :nth-child(3) > .checkbox-container > .checkmark').click()
    cy.get(':nth-child(2) > :nth-child(4) > .checkbox-container > .checkmark').click()
   
    

  })  

})