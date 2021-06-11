describe('EDitCompany', function() {
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

  /*Test cases *///////////

  it.only('Test case 1- Correct data ', function() {

    // Assertion page
    cy.contains('Client list')
    // click to button settings
    cy.get('#UITestLinkToSettingsTest\\ Company').click()
    // Assertion page
    cy.contains('Test Company')
    // shortName
    cy.get('#UITestLinkToCompanyShortName > div.ng-untouched > .ng-untouched').type("1")
    // click to Branch
    cy.get('[formcontrolname="branch"] > .dropdown-options > .selected-value').click()
    cy.get('.dropdown-list-container > :nth-child(2)').click()
    // click to Detailed branch
    cy.get('[formcontrolname="detailedBranch"] > .dropdown-options > .selected-value').click()
    cy.get('.dropdown-list-container > :nth-child(2) > .ng-star-inserted').click()
    // click to internal name
    cy.get('#UITestLinkToInternalName > .ng-dirty > .ng-untouched').type("1")
    // click to button save
    cy.get('.buttons > .uikit-primary > .uikit-button-wrapper > .label')
      .click()
      .should('have.class','active')
    cy.get('.save-confirmation').contains('Saved')

    // click to customer button
    cy.get('#UITestLinkSidebarcustomers > mat-expansion-panel > mat-expansion-panel-header').click()
    
    // assertion
     cy.contains('Client list')
    })


  it('Test case 2- Not correct data in shortName textbox', function() {

    // Assertion page
    cy.contains('Client list')
    // click to button settings
    cy.get('#UITestLinkToSettingsTest\\ Company').click()
    // Assertion page
    cy.contains('Test Company')

    // shortName
    cy.get('#UITestLinkToCompanyShortName > div.ng-untouched > .ng-untouched').type(" 1")
    // click to Branch
    cy.get('[formcontrolname="branch"] > .dropdown-options > .selected-value').click()
    cy.get('.dropdown-list-container > :nth-child(2)').click()
    // click to Detailed branch
    cy.get('[formcontrolname="detailedBranch"] > .dropdown-options > .selected-value').click()
    cy.get('.dropdown-list-container > :nth-child(2) > .ng-star-inserted').click()
    // click to internal name
    cy.get('#UITestLinkToInternalName > .ng-dirty > .ng-untouched').type("1")
    // click to button save
    cy.get('.buttons > .uikit-primary > .uikit-button-wrapper > .label').click()
    cy.get('.save-confirmation')
    cy.get('#UITestLinkToCompanyShortName > div.ng-dirty > .errors > .invalid').contains('Valid characters are: "a-z, 0-9, -"')
   
    // click to customer button
     cy.get('#UITestLinkSidebarcustomers > mat-expansion-panel > mat-expansion-panel-header').click()
     // Alert
     cy.get('.dialog-container').contains('Do you want to leave the page?')
     // click to button Yes
     cy.get('.action-container > .uikit-primary').click()
 
     // assertion
     cy.contains('Client list')


})


it('Test case 3-Not correct data in shortName textbox and change Branch , Detail branch', function() {

    
    // Assertion page
    cy.contains('Client list')
    // click to button settings
    cy.get('#UITestLinkToSettingsTest\\ Company').click()
    // Assertion page
    cy.contains('Test Company')
    // shortName
    cy.get('#UITestLinkToCompanyShortName > div.ng-untouched > .ng-untouched').type(" 2")
    // click to Branch
    cy.get('[formcontrolname="branch"] > .dropdown-options > .selected-value').click()
    cy.get('.dropdown-list-container > :nth-child(3)').click()
    // click to Detailed branch
    cy.get('[formcontrolname="detailedBranch"] > .dropdown-options > .selected-value').click()
    cy.get('.dropdown-list-container > :nth-child(3) > .ng-star-inserted').click()
    // click to internal name
    cy.get('#UITestLinkToInternalName > .ng-dirty > .ng-untouched').type("2")
    // click to button save
    cy.get('.buttons > .uikit-primary > .uikit-button-wrapper > .label').click()
    cy.get('.save-confirmation')
    cy.get('#UITestLinkToCompanyShortName > div.ng-dirty > .errors > .invalid').contains('Valid characters are: "a-z, 0-9, -"')

    // click to customer button
    cy.get('#UITestLinkSidebarcustomers > mat-expansion-panel > mat-expansion-panel-header').click()
    // Alert
    cy.get('.dialog-container').contains('Do you want to leave the page?')
    // click to button Yes
    cy.get('.action-container > .uikit-primary').click()

    // assertion
    cy.contains('Client list')


  })

  it('Test case 4- write mor than 101 characters or long text to Internal Name textbox', function() {
 
    // Assertion page
    cy.contains('Client list')
    // click to button settings
    cy.get('#UITestLinkToSettingsTest\\ Company').click()
    // Assertion page
    cy.contains('Test Company')
    // shortName
    cy.get('#UITestLinkToCompanyShortName > div.ng-untouched > .ng-untouched').type("1")
    // click to Branch
    cy.get('[formcontrolname="branch"] > .dropdown-options > .selected-value').click()
    cy.get('.dropdown-list-container > :nth-child(3)').click()
    // click to Detailed branch
    cy.get('[formcontrolname="detailedBranch"] > .dropdown-options > .selected-value').click()
    cy.get('.dropdown-list-container > :nth-child(3) > .ng-star-inserted').click()
    // click to internal name
    cy.get('#UITestLinkToInternalName > .ng-dirty > .ng-untouched').type("Cyprus suffers from a chronic shortage of water. The country relies heavily on rain to provide household water, but in the past 30 years average yearly precipitation has decreased.[146] Between 2001 and 2004, exceptionally heavy annual rainfall pushed water reserves up, with supply exceeding demand, allowing total storage in the island's reservoirs to rise to an all-time high by the start of 2005. However, since then demand has increased annually – a result of local population growth, foreigners moving to Cyprus and the number of visiting tourists – while supply has fallen as a result of more frequent droughts.")
    // click to button save
    cy.get('.buttons > .uikit-primary > .uikit-button-wrapper > .label').click()
    cy.get('.save-confirmation')
    // message  for internal name
    cy.get('#UITestLinkToInternalName > div.ng-dirty > .errors > .invalid > .ng-star-inserted').contains('Must be shorter than 100 characters')
       
    // click to customer button
    cy.get('#UITestLinkSidebarcustomers > mat-expansion-panel > mat-expansion-panel-header').click()
    // Alert
    cy.get('.dialog-container').contains('Do you want to leave the page?')
    // click to button Yes
    cy.get('.action-container > .uikit-primary').click()

    // assertion
    cy.contains('Client list')
  })



})
