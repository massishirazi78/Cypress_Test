describe('Org-Manager', function(){
  const todaysDate = Cypress.moment().format('YYYYMMDDhhmmss')
    
  beforeEach(() => {
       cy.fixture('testuser_a').as('testuser')
  });
   
  beforeEach(function () {
    cy.login_gui(this.testuser.username,this.testuser.password)

 
  })
  
  afterEach(function() {
    cy.logout()    
  })

  it.only('testcase 1- Creat-Sub-Group', function(){
        // Assertion page
    cy.contains('Client list')
    expect(2).to.equal(2)
    cy.get('#UITestLinkToPortalBrilliant\\ Future\\ AB').click()
    
    cy.get('.companyname').contains('Brilliant Future AB')
    cy.wait(2000)
    
    cy.get('#UITestLinkToorganization').click()
    cy.get('.main-title').contains('Manage organisation')
    cy.wait(2000)

    cy.get('[aria-expanded="true"] > .igx-display-container > .igx-grid__td--tree-cell > .pointer').trigger('mouseover').click()
    .and('be.visible')
    cy.get('.igx-grid__tr--selected > .igx-display-container > .igx-grid__td--tree-cell > .pl-8px').and('be.visible').click()
   // cy.get('.igx-grid__tr--selected > .igx-display-container > .igx-grid__td--tree-cell > .pl-8px').contains('...')
   // cy.get('[aria-expanded="true"] > .igx-display-container > .igx-grid__td--tree-cell > .pl-8px').and('be.visible').click()
    cy.get('.mat-menu-content > :nth-child(1) > :nth-child(5)').contains('Create sub-group').click()

    cy.get('app-group-creator.ng-star-inserted').contains('Create sub-group to Brilliant Future AB')
    cy.get('.manager-dropdown > .dropdown-options > .selected-value').click()
    
    // level1
    cy.get('.dropdown-list-container > :nth-child(1)').contains('Level 1').click()
    cy.get('#uikit-input-2').type('Test-'+todaysDate)
    cy.get(':nth-child(2) > .uikit-form-field-wrapper > .uikit-flex-wrapper > .uikit-infix-wrapper').type('Test-'+todaysDate+'-id')
    
    //Save
    
    cy.get('.ng-tns-c5-82.uikit-primary').click()
    //cy.get('.ng-tns-c5-86.uikit-primary').click()
    cy.get('.main-title').contains('Manage organisation')
  
  })

  it('testcase 2- Creat-Sub-Group-two teams with the same external id', function(){
      // Assertion page
  cy.contains('Client list')
  cy.get('#UITestLinkToPortalWise\\ Group').click()

  cy.get('.companyname').contains('Wise Group')
  cy.wait(2000)

  cy.get('#UITestLinkToorganization').click()
  cy.get('.main-title').contains('Manage organisation')
  cy.wait(2000)
//1
cy.get('[aria-expanded="true"] > .igx-display-container > .igx-grid__td--tree-cell > .pointer').trigger('mouseover').click()
cy.get('[aria-expanded="true"] > .igx-display-container > .igx-grid__td--tree-cell > .pl-8px').trigger('mouseover').click()
cy.get('.mat-menu-content > :nth-child(1) > :nth-child(5)').contains('Create sub-group').click()

    
  cy.get('app-group-creator.ng-star-inserted').contains('Create sub-group to Wise Group')
  cy.get('.manager-dropdown > .dropdown-options > .selected-value').click()

  // team
  cy.get('.dropdown-list-container > :nth-child(1)').contains('Team').click()

  cy.get(':nth-child(3) > div.ng-untouched > .uikit-form-field-type-uikit-input > .uikit-form-field-wrapper > .uikit-flex-wrapper > .uikit-infix-wrapper').type(todaysDate +'testA1')
  cy.get(':nth-child(4) > div.ng-untouched > .uikit-form-field-type-uikit-input > .uikit-form-field-wrapper > .uikit-flex-wrapper > .uikit-infix-wrapper').type(todaysDate + 'id-testA1')

  //Save
  cy.get('app-group-creator.ng-star-inserted > .uikit-primary').click()
  //cy.get('.ng-tns-c5-87.uikit-primary').click()
  //cy.get('.ng-tns-c5-86.uikit-primary').click()

  cy.get('.main-title').contains('Manage organisation')

  //2
  cy.get('[aria-expanded="true"] > .igx-display-container > .igx-grid__td--tree-cell > .pointer').trigger('mouseover').click()
  cy.get('[aria-expanded="true"] > .igx-display-container > .igx-grid__td--tree-cell > .pl-8px').trigger('mouseover').click()
  cy.get('.mat-menu-content > :nth-child(1) > :nth-child(5)').contains('Create sub-group').click()

    
  cy.get('app-group-creator.ng-star-inserted').contains('Create sub-group to Wise Group')
  cy.get('.manager-dropdown > .dropdown-options > .selected-value').click()

  // team
  cy.get('.dropdown-list-container > :nth-child(1)').contains('Team').click()

  cy.get(':nth-child(3) > div.ng-untouched > .uikit-form-field-type-uikit-input > .uikit-form-field-wrapper > .uikit-flex-wrapper > .uikit-infix-wrapper').type(todaysDate + 'testA1')
  cy.get(':nth-child(4) > div.ng-untouched > .uikit-form-field-type-uikit-input > .uikit-form-field-wrapper > .uikit-flex-wrapper > .uikit-infix-wrapper').type(todaysDate + 'id-testA1')

  //Save
  cy.get('app-group-creator.ng-star-inserted > .uikit-primary').click()
  //cy.wait(1000)
  // message
  cy.get('.mat-snack-bar-container').contains('A group with the selected external ID already exists.')
  
  cy.get('.main-title').contains('Manage organisation')

  cy.wait(2000)

})


  it('testcase 3- Creat-Sub-Group-add manager', function(){
    // Assertion page
    cy.contains('Client list')

    cy.get('#UITestLinkToPortalBrilliant\\ Future\\ AB').click()
    cy.get('.companyname').contains('Brilliant Future AB')
    cy.wait(2000)

    cy.get('#UITestLinkToorganization').click()
    cy.get('.main-title').contains('Manage organisation')
    cy.wait(2000)

    cy.get('[aria-expanded="true"] > .igx-display-container > .igx-grid__td--tree-cell > .pointer').trigger('mouseover').click()
    cy.get('[aria-expanded="true"] > .igx-display-container > .igx-grid__td--tree-cell > .pl-8px').trigger('mouseover').click()
    cy.get('.mat-menu-content > :nth-child(1) > :nth-child(5)').contains('Create sub-group').click()

    cy.get('app-group-creator.ng-star-inserted').contains('Create sub-group to Brilliant Future AB')
    cy.get('.manager-dropdown > .dropdown-options > .selected-value').click()

    // level1
    cy.get('.dropdown-list-container > :nth-child(1)').contains('Level 1').click()
    cy.get('div.ng-untouched > .uikit-form-field-type-uikit-input > .uikit-form-field-wrapper > .uikit-flex-wrapper > .uikit-infix-wrapper').type('Test-'+todaysDate)
    //add manager
    cy.get('.add-manager-btn').click()
    cy.get('.add-manager > .ui-dropdown > .dropdown-options > .selected-value').click()
    cy.get('.dropdown-list-container > :nth-child(3)').click()
    cy.wait(2000)
    //Save
    cy.get('.ng-tns-c5-55.uikit-primary').click()
   // cy.get('.ng-tns-c5-87.uikit-primary').click()
    //cy.get('.ng-tns-c5-86.uikit-primary').click()
    cy.get('.main-title').contains('Manage organisation')

  })

  
  it('testcase 4- Delete group', function(){
    // Assertion page
    cy.contains('Client list')

    cy.get('#UITestLinkToPortalBrilliant\\ Future\\ AB').click()
    cy.get('.companyname').contains('Brilliant Future AB')
    cy.wait(2000)

    cy.get('#UITestLinkToorganization').click()
    cy.get('.main-title').contains('Manage organisation')
    cy.wait(2000)

    cy.get('[role="row"][data-rowindex="9"] > .igx-display-container > .igx-grid__td--tree-cell > .pointer').trigger('mouseover').click()
    cy.get('.igx-grid__tr--selected > .igx-display-container > .igx-grid__td--tree-cell > .pl-8px').trigger('mouseover').click()
    //delete
    cy.get('.mat-menu-content > :nth-child(1) > :nth-child(8)').contains('Delete group').click()
    cy.get('.warning-text').contains('This action can not be undone')
    cy.get('.ui-input').type('DELETE')
    cy.get('.action-container > .uikit-primary').contains('Delete').click()
    // Assertion page
    cy.get('.main-title').contains('Manage organisation')

  })

  
  it('testcase 5- Edit group manager1 ', function(){
    // Assertion page
    cy.contains('Client list')

    cy.get('#UITestLinkToPortalBrilliant\\ Future\\ AB').click()
    cy.get('.companyname').contains('Brilliant Future AB')
    cy.wait(2000)

    cy.get('#UITestLinkToorganization').click()
    cy.get('.main-title').contains('Manage organisation')
    cy.wait(2000)

    cy.get('[role="row"][data-rowindex="9"] > .igx-display-container > .igx-grid__td--tree-cell > .pointer').trigger('mouseover').click()
    cy.get('.igx-grid__tr--selected > .igx-display-container > .igx-grid__td--tree-cell > .pl-8px').trigger('mouseover').click()
   
    //edit
    cy.get('.mat-menu-content > :nth-child(1) > :nth-child(3)').contains('Edit').click()
    cy.get('.pb-16px').click()
    cy.get('.pb-16px > .uikit-primary').click()
    //cy.get('app-group-editor-dialog.ng-star-inserted').click()
    cy.get('.add-manager > .ui-dropdown > .dropdown-options > .chevron').click()
    cy.get('.dropdown-list-container > :nth-child(3)').click()
    cy.get('.mr-16px > .uikit-button-wrapper').click()
    
    // Assertion page
    cy.get('.main-title').contains('Manage organisation')

  })

  it('testcase 6- Edit group manager2 ', function(){
    // Assertion page
    cy.contains('Client list')

    cy.get('#UITestLinkToPortalBrilliant\\ Future\\ AB').click()
    cy.get('.companyname').contains('Brilliant Future AB')
    cy.wait(2000)

    cy.get('#UITestLinkToorganization').click()
    cy.get('.main-title').contains('Manage organisation')
    cy.wait(2000)

    cy.get('[role="row"][data-rowindex="9"] > .igx-display-container > .igx-grid__td--tree-cell > .pointer').trigger('mouseover').click()
    cy.get('.igx-grid__tr--selected > .igx-display-container > .igx-grid__td--tree-cell > .pl-8px').trigger('mouseover').click()
   
    /* /edit
    cy.get('.mat-menu-content > :nth-child(1) > :nth-child(3)').contains('Edit').click()
    cy.get('.pb-16px').click()
    cy.get('.pb-16px > .uikit-primary').click()
    //cy.get('app-group-editor-dialog.ng-star-inserted').click()
    cy.get('.add-manager > .ui-dropdown > .dropdown-options > .chevron').click()
    cy.get('.dropdown-list-container > :nth-child(3)').click()
    cy.get('.mr-16px > .uikit-button-wrapper').click()
    
    // Assertion page
    cy.get('.main-title').contains('Manage organisation')
    */
  })



})

