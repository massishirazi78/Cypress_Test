describe('New Survey', function() {
  const todaysDate = Cypress.moment().format('YYYYMMDDhhmmss')
   
  beforeEach(() => {
    cy.fixture('testuser_ct').as('testuser')
  });
  beforeEach(function () {
    cy.login_gui(this.testuser.username,this.testuser.password) 
    //cy.task('clear:db')
  })
  afterEach(function() {
     cy.logout()       
  })

  it('TC1-Create new survey and add Tester ', function() {

    cy.contains('Client list')

    cy.get('#UITestLinkToPortalTest\\ Company').click()
    cy.contains('Overview')
      
    cy.get('#UITestLinkTosurvey').click()
   
    cy.get('#UITestLinkToNewSurvey').click()    
    
    cy.contains('Choose product')
    cy.get('#UITestSurveyEmployee\\ survey > .uikit-button-wrapper > .label').click()
   
    //Packages
    cy.get('#UITestAddModuleLeadership\\ -\\ LSI').click()
    cy.get('#UITestAddModuleTeam\\ efficiency\\ -\\ TEI').click()
    cy.get('#UITestAddModuleEngagement\\ -\\ EI').click()
    // next
    cy.get('#UITestLinkNext').click()

    //Name of Survey
    cy.contains('Questions')
    cy.get('#UITestInputField').type("MySurvey_TC2_"+ todaysDate+"{enter}")
    cy.get('#UITestLinkNext').click()
    //Participants
    cy.contains('Select participants')
    cy.get('[aria-rowindex="7"] > .e-treegridcheckbox > .e-treecolumn-container > .e-checkbox-wrapper > .e-frame').click()
    cy.get('#UITestLinkNext').click()

    //Communication email
    cy.contains('Communication')
    cy.get('#UITestLinkEmail').click()
    cy.get('#UITestLinkNext').click()
    //Schedule
    cy.contains('Schedule')
        //today
    cy.get('#UITestDateToday > .ui-radio-label > .ui-radio-container').click()
    //cy.get('#ui-radio-15 > .ui-radio-label > .ui-radio-container').click()
    cy.get('#UITestLinkNext').click()
    //summary 
    cy.contains('Summary')
    //add test
    cy.get('#UITestLink-addtester').click()

    cy.contains('Add tester')
    cy.get('input.ng-star-inserted').type('34879')
    cy.get('#igx-checkbox-1 > .igx-checkbox__composite').click()
    //click to add
    cy.get('#UITestAddTesterSave > .uikit-button-wrapper > .label').click()
                  
    // Activate
    cy.get('#UITestFinishButton > .ui-button-wrapper').click()


  })
    
  it('TC2-Create new survey and add tester then click to button Cancel', function() {

      cy.contains('Client list')
      cy.get('#UITestLinkToPortalTest\\ Company').click()
      cy.contains('Overview')
      cy.get('#UITestLinkTosurvey').click()
      
      cy.get('#UITestLinkToNewSurvey').click()
          
     
      cy.contains('Choose product')
      cy.get('#UITestSurveyEmployee\\ survey > .uikit-button-wrapper > .label').click()
      //Packages
      cy.get('#UITestAddModuleLeadership\\ -\\ LSI').click()
      cy.get('#UITestAddModuleTeam\\ efficiency\\ -\\ TEI').click()
      cy.get('#UITestAddModuleEngagement\\ -\\ EI').click()
      // next
      cy.get('#UITestLinkNext').click()
 
      //Name of Survey
      cy.contains('Questions')
      cy.get('#UITestInputField').type("MySurvey_TC2_"+ todaysDate+"{enter}")
      cy.get('#UITestLinkNext').click()
 
      //Participants
      cy.contains('Select participants')
      cy.get('[aria-rowindex="7"] > .e-treegridcheckbox > .e-treecolumn-container > .e-checkbox-wrapper > .e-frame').click()
      cy.get('#UITestLinkNext').click()
 
      //Communication email
      cy.contains('Communication')
      cy.get('#UITestLinkEmail').click()
      cy.get('#UITestLinkNext').click()
 
      //Schedule
      cy.contains('Schedule')
        
      //today
      //cy.get('#ui-radio-15 > .ui-radio-label > .ui-radio-container').click()
      cy.get('#UITestDateToday > .ui-radio-label > .ui-radio-container').click()
      //time 07:00
      cy.get('#ui-radio-17 > .ui-radio-label > .ui-radio-container').click()
     
      
      cy.get('#UITestLinkNext').click()
      //summary 
      cy.contains('Summary')
      //add test
      cy.get('#UITestLink-addtester').click()

      cy.contains('Add tester')
      cy.get('input.ng-star-inserted').type('34879')
      cy.get('#igx-checkbox-1 > .igx-checkbox__composite').click()
      //click to Cancel
      cy.get('#UITestAddTesterCancel > .uikit-button-wrapper > .label').click()
      cy.get('#cdk-step-content-0-5 > .ui-h2').contains('Summary')
      // Click to Cancel
      cy.get('#UITestLinkCancel').click()
      
      cy.contains('Choose product')      
  })
     
  it('TC3-Create new survey_Response time for 7 days_ time 15:00', function() {

      cy.contains('Client list')
      cy.get('#UITestLinkToPortalTest\\ Company').click()
      cy.contains('Overview')
      cy.get('#UITestLinkTosurvey').click()
          
      cy.get('#UITestLinkToNewSurvey').click()
          
     
      cy.contains('Choose product')
      cy.get('#UITestSurveyEmployee\\ survey > .uikit-button-wrapper > .label').click()
      //Packages
      cy.get('#UITestAddModuleLeadership\\ -\\ LSI').click()
      cy.get('#UITestAddModuleTeam\\ efficiency\\ -\\ TEI').click()
      cy.get('#UITestAddModuleEngagement\\ -\\ EI').click()
      // next
      cy.get('#UITestLinkNext').click()
 
      //Name of Survey
      cy.contains('Questions')
      cy.get('#UITestInputField').type("MySurvey_TC2_"+ todaysDate+"{enter}")
      cy.get('#UITestLinkNext').click()
 
 
      //Participants
      cy.contains('Select participants')
      cy.get('[aria-rowindex="7"] > .e-treegridcheckbox > .e-treecolumn-container > .e-checkbox-wrapper > .e-frame').click()
      cy.get('#UITestLinkNext').click()
 
      //Communication email
      cy.contains('Communication')
      cy.get('#UITestLinkEmail').click()
      cy.get('#UITestLinkNext').click()
 
      //Schedule
      cy.contains('Schedule')
      // click to 7 days
      cy.get('#ui-radio-12 > .ui-radio-label > .ui-radio-container').click()
    
      //today
      //cy.get('#ui-radio-15 > .ui-radio-label > .ui-radio-container').click()
      cy.get('#UITestDateToday > .ui-radio-label > .ui-radio-container').click()
      // time 15:00
      cy.get('#ui-radio-18 > .ui-radio-label > .ui-radio-container').click()
      
      // Next
      cy.get('#UITestLinkNext').click()
           
      
      //summary 
      cy.contains('Summary')
       
      //add test
      cy.get('#UITestLink-addtester').click()

      cy.contains('Add tester')
      cy.get('input.ng-star-inserted').type('34879')
      cy.get('#igx-checkbox-1 > .igx-checkbox__composite').click()
      //click to Cancel
      cy.get('#UITestAddTesterCancel > .uikit-button-wrapper > .label').click()
      cy.get('#cdk-step-content-0-5 > .ui-h2').contains('Summary')
      // Click to Cancel
      cy.get('#UITestLinkCancel').click()    
      cy.contains('Choose product')      
  })

  it('TC4-Create new survey_Response time for 7 days_ time 7:00', function() {

    cy.contains('Client list')
    cy.get('#UITestLinkToPortalTest\\ Company').click()
    cy.contains('Overview')
    // cy.get('#UITestLinkToPortalExsitec').click()
    cy.get('#UITestLinkTosurvey').click()
    //cy.contains('Surveys')
     
    cy.get('#UITestLinkToNewSurvey').click()
        
   
    cy.contains('Choose product')
    cy.get('#UITestSurveyEmployee\\ survey > .uikit-button-wrapper > .label').click()
   
    //Packages
    cy.get('#UITestAddModuleLeadership\\ -\\ LSI').click()
    cy.get('#UITestAddModuleTeam\\ efficiency\\ -\\ TEI').click()
    cy.get('#UITestAddModuleEngagement\\ -\\ EI').click()
    // next
    cy.get('#UITestLinkNext').click()

    //Name of Survey
    cy.contains('Questions')
    cy.get('#UITestInputField').type("MySurvey_TC2_"+ todaysDate+"{enter}")
    cy.get('#UITestLinkNext').click()


    //Participants
    cy.contains('Select participants')
    cy.get('[aria-rowindex="7"] > .e-treegridcheckbox > .e-treecolumn-container > .e-checkbox-wrapper > .e-frame').click()
    cy.get('#UITestLinkNext').click()

    //Communication email
    cy.contains('Communication')
    cy.get('#UITestLinkEmail').click()
    cy.get('#UITestLinkNext').click()

    //Schedule
    cy.contains('Schedule')
    // click to 7 days
    cy.get('#ui-radio-12 > .ui-radio-label > .ui-radio-container').click()
    // click to 14
    //cy.get('#ui-radio-13 > .ui-radio-label > .ui-radio-container').click()
  
    //today
    cy.get('#UITestDateToday > .ui-radio-label > .ui-radio-container').click()
   
    //time 07:00
    cy.get('#ui-radio-17 > .ui-radio-label > .ui-radio-container').click()
     
    // time 15:00
    //cy.get('#ui-radio-18 > .ui-radio-label > .ui-radio-container').click()
   
    // Next
    cy.get('#UITestLinkNext').click()
         
    
    //summary 
    cy.contains('Summary')
     
     //add test
     cy.get('#UITestLink-addtester').click()

    cy.contains('Add tester')
    cy.get('input.ng-star-inserted').type('34879')
    cy.get('#igx-checkbox-1 > .igx-checkbox__composite').click()
    //click to Cancel
    cy.get('#UITestAddTesterCancel > .uikit-button-wrapper > .label').click()
    cy.get('#cdk-step-content-0-5 > .ui-h2').contains('Summary')
    // Click to Cancel
    cy.get('#UITestLinkCancel').click()
      
    cy.contains('Choose product')

    
  })

  it('TC5-Create new survey_Response time for 14 days_ time 7:00', function() {

      cy.contains('Client list')
      cy.get('#UITestLinkToPortalTest\\ Company').click()
      cy.contains('Overview')
      cy.get('#UITestLinkTosurvey').click()
 
      cy.get('#UITestLinkToNewSurvey').click()
          
     
      cy.contains('Choose product')
      cy.get('#UITestSurveyEmployee\\ survey > .uikit-button-wrapper > .label').click()
      //Packages
      cy.get('#UITestAddModuleLeadership\\ -\\ LSI').click()
      cy.get('#UITestAddModuleTeam\\ efficiency\\ -\\ TEI').click()
      cy.get('#UITestAddModuleEngagement\\ -\\ EI').click()
      // next
      cy.get('#UITestLinkNext').click()
 
      //Name of Survey
      cy.contains('Questions')
      cy.get('#UITestInputField').type("MySurvey_TC2_"+ todaysDate+"{enter}")
      cy.get('#UITestLinkNext').click()
 
 
      //Participants
      cy.contains('Select participants')
      cy.get('[aria-rowindex="7"] > .e-treegridcheckbox > .e-treecolumn-container > .e-checkbox-wrapper > .e-frame').click()
      cy.get('#UITestLinkNext').click()
 
      //Communication email
      cy.contains('Communication')
      cy.get('#UITestLinkEmail').click()
      cy.get('#UITestLinkNext').click()
 
      //Schedule
      cy.contains('Schedule')
      // click to 7 days
     // cy.get('#ui-radio-12 > .ui-radio-label > .ui-radio-container').click()
     //click to 14
      cy.get('#ui-radio-13 > .ui-radio-label > .ui-radio-container').click()
      //today
     // cy.get('#ui-radio-15 > .ui-radio-label > .ui-radio-container').click()
      cy.get('#UITestDateToday > .ui-radio-label > .ui-radio-container').click()
      //time 07:00
      cy.get('#ui-radio-17 > .ui-radio-label > .ui-radio-container').click()
     
      cy.get('#ui-radio-21 > .ui-radio-label > .ui-radio-container').click()
       // Next
      cy.get('#UITestLinkNext').click()
           
      
      //summary 
      cy.contains('Summary')
      
      //add test
      cy.get('#UITestLink-addtester').click()
   
      cy.contains('Add tester')
      cy.get('input.ng-star-inserted').type('34879')
      cy.get('#igx-checkbox-1 > .igx-checkbox__composite').click()
      //click to Cancel
      cy.get('#UITestAddTesterCancel > .uikit-button-wrapper > .label').click()
      cy.get('#cdk-step-content-0-5 > .ui-h2').contains('Summary')
      // Click to Cancel
      cy.get('#UITestLinkCancel').click()
        
      cy.contains('Choose product')

      
  })

  it('TC6-Create new survey_Response time for 14 days_ time 15:00', function() {

      cy.contains('Client list')
      cy.get('#UITestLinkToPortalTest\\ Company').click()
      cy.contains('Overview')
      // cy.get('#UITestLinkToPortalExsitec').click()
      cy.get('#UITestLinkTosurvey').click()
      //cy.contains('Surveys')
       
      cy.get('#UITestLinkToNewSurvey').click()
          
     
      cy.contains('Choose product')
      cy.get('#UITestSurveyEmployee\\ survey > .uikit-button-wrapper > .label').click()
     
      //Packages
      cy.get('#UITestAddModuleLeadership\\ -\\ LSI').click()
      cy.get('#UITestAddModuleTeam\\ efficiency\\ -\\ TEI').click()
      cy.get('#UITestAddModuleEngagement\\ -\\ EI').click()
      // next
      cy.get('#UITestLinkNext').click()
 
      //Name of Survey
      cy.contains('Questions')
      cy.get('#UITestInputField').type("MySurvey_TC2_"+ todaysDate+"{enter}")
      cy.get('#UITestLinkNext').click()
 
 
      //Participants
      cy.contains('Select participants')
      cy.get('[aria-rowindex="7"] > .e-treegridcheckbox > .e-treecolumn-container > .e-checkbox-wrapper > .e-frame').click()
      cy.get('#UITestLinkNext').click()
 
      //Communication email
      cy.contains('Communication')
      cy.get('#UITestLinkEmail').click()
      cy.get('#UITestLinkNext').click()
 
      //Schedule
      cy.contains('Schedule')
      // click to 7 days
      //cy.get('#ui-radio-12 > .ui-radio-label > .ui-radio-container').click()
      // click to 14
      cy.get('#ui-radio-13 > .ui-radio-label > .ui-radio-container').click()
    
      //today
      cy.get('#UITestDateToday > .ui-radio-label > .ui-radio-container').click()
     
     
      // time 15:00
      cy.get('#ui-radio-18 > .ui-radio-label > .ui-radio-container').click()
     
      // Next
      cy.get('#UITestLinkNext').click()
           
      
      //summary 
      cy.contains('Summary')
       
       //add test
       cy.get('#UITestLink-addtester').click()

      cy.contains('Add tester')
      cy.get('input.ng-star-inserted').type('34879')
      cy.get('#igx-checkbox-1 > .igx-checkbox__composite').click()
      //click to Cancel
      cy.get('#UITestAddTesterCancel > .uikit-button-wrapper > .label').click()
      cy.get('#cdk-step-content-0-5 > .ui-h2').contains('Summary')
      // Click to Cancel
      cy.get('#UITestLinkCancel').click()
        
      cy.contains('Choose product')

      
  })

  it('TC7-Create new survey_Today and change  Activation Time 15:00 to 7:00', function() {

    cy.contains('Client list')
    cy.get('#UITestLinkToPortalTest\\ Company').click()
    cy.contains('Overview') 
    cy.get('#UITestLinkTosurvey').click()     
    cy.get('#UITestLinkToNewSurvey').click()
        
          
     
      cy.contains('Choose product')
      cy.get('#UITestSurveyEmployee\\ survey > .uikit-button-wrapper > .label').click()
     
      //Packages
      cy.get('#UITestAddModuleLeadership\\ -\\ LSI').click()
      cy.get('#UITestAddModuleTeam\\ efficiency\\ -\\ TEI').click()
      cy.get('#UITestAddModuleEngagement\\ -\\ EI').click()
      // next
      cy.get('#UITestLinkNext').click()
 
      //Name of Survey
      cy.contains('Questions')
      cy.get('#UITestInputField').type("MySurvey_TC2_"+ todaysDate+"{enter}")
      cy.get('#UITestLinkNext').click()
 
 
      //Participants
      cy.contains('Select participants')
      cy.get('[aria-rowindex="7"] > .e-treegridcheckbox > .e-treecolumn-container > .e-checkbox-wrapper > .e-frame').click()
      cy.get('#UITestLinkNext').click()
 
      //Communication email
      cy.contains('Communication')
      cy.get('#UITestLinkEmail').click()
      cy.get('#UITestLinkNext').click()
 
      //Schedule
      cy.contains('Schedule')
      // click to 7 days
      cy.get('#ui-radio-12 > .ui-radio-label > .ui-radio-container').click()
       
      //today
      cy.get('#UITestDateToday > .ui-radio-label > .ui-radio-container').click()
     
      
     
      // time 15:00
      cy.get('#ui-radio-18 > .ui-radio-label > .ui-radio-container').click()
      //time 07:00
      cy.get('#ui-radio-17 > .ui-radio-label > .ui-radio-container').click()
     
      
      // Next
      cy.get('#UITestLinkNext').click()
           
      
      //summary 
      cy.contains('Summary')
       
       //add test
       cy.get('#UITestLink-addtester').click()

      cy.contains('Add tester')
      cy.get('input.ng-star-inserted').type('34879')
      cy.get('#igx-checkbox-1 > .igx-checkbox__composite').click()
      //click to Cancel
      cy.get('#UITestAddTesterCancel > .uikit-button-wrapper > .label').click()
      cy.get('#cdk-step-content-0-5 > .ui-h2').contains('Summary')
      // Click to Cancel
      cy.get('#UITestLinkCancel').click()
        
      cy.contains('Choose product')

      
  })
  it('TC8-Create new survey_Change 7 day to 14 day ', function() {

    cy.contains('Client list')
    cy.get('#UITestLinkToPortalTest\\ Company').click()
    cy.contains('Overview')
    // cy.get('#UITestLinkToPortalExsitec').click()
    cy.get('#UITestLinkTosurvey').click()
    //cy.contains('Surveys')
     
    cy.get('#UITestLinkToNewSurvey').click()
        
   
    cy.contains('Choose product')
    cy.get('#UITestSurveyEmployee\\ survey > .uikit-button-wrapper > .label').click()
   
    //Packages
    cy.get('#UITestAddModuleLeadership\\ -\\ LSI').click()
    cy.get('#UITestAddModuleTeam\\ efficiency\\ -\\ TEI').click()
    cy.get('#UITestAddModuleEngagement\\ -\\ EI').click()
    // next
    cy.get('#UITestLinkNext').click()

    //Name of Survey
    cy.contains('Questions')
    cy.get('#UITestInputField').type("MySurvey_TC2_"+ todaysDate+"{enter}")
    cy.get('#UITestLinkNext').click()


    //Participants
    cy.contains('Select participants')
    cy.get('[aria-rowindex="7"] > .e-treegridcheckbox > .e-treecolumn-container > .e-checkbox-wrapper > .e-frame').click()
    cy.get('#UITestLinkNext').click()

    //Communication email
    cy.contains('Communication')
    cy.get('#UITestLinkEmail').click()
    cy.get('#UITestLinkNext').click()

    //Schedule
    cy.contains('Schedule')
    // click to 7 days
    cy.get('#ui-radio-12 > .ui-radio-label > .ui-radio-container').click()
    // click to 14
    cy.get('#ui-radio-13 > .ui-radio-label > .ui-radio-container').click()

    // click to 7 days
    cy.get('#ui-radio-12 > .ui-radio-label > .ui-radio-container').click()
    // click to 14
    cy.get('#ui-radio-13 > .ui-radio-label > .ui-radio-container').click()
  
    //today
    cy.get('#UITestDateToday > .ui-radio-label > .ui-radio-container').click()
   
   
    // time 15:00
    cy.get('#ui-radio-18 > .ui-radio-label > .ui-radio-container').click()
   
    // Next
    cy.get('#UITestLinkNext').click()
         
    
    //summary 
    cy.contains('Summary')
     
    //add test
    cy.get('#UITestLink-addtester').click()

    cy.contains('Add tester')
    cy.get('input.ng-star-inserted').type('34879')
    cy.get('#igx-checkbox-1 > .igx-checkbox__composite').click()
    //click to Cancel
    cy.get('#UITestAddTesterCancel > .uikit-button-wrapper > .label').click()
    cy.get('#cdk-step-content-0-5 > .ui-h2').contains('Summary')
    // Click to Cancel
    cy.get('#UITestLinkCancel').click()
      
    cy.contains('Choose product')

    
  })

  it('TC9-Create new survey_Communication None', function() { 

    cy.contains('Client list')
    cy.get('#UITestLinkToPortalTest\\ Company').click()
    cy.contains('Overview')
    cy.get('#UITestLinkTosurvey').click()
      
    cy.get('#UITestLinkToNewSurvey').click()
        
   
    cy.contains('Choose product')
    cy.get('#UITestSurveyEmployee\\ survey > .uikit-button-wrapper > .label').click()
   
     
    //Packages
    cy.get('#UITestAddModuleLeadership\\ -\\ LSI').click()
    cy.get('#UITestAddModuleTeam\\ efficiency\\ -\\ TEI').click()
    cy.get('#UITestAddModuleEngagement\\ -\\ EI').click()
    // next
    cy.get('#UITestLinkNext').click()
 
    //Name of Survey
    cy.contains('Questions')
    cy.get('#UITestInputField').type("MySurvey_TC2_"+ todaysDate+"{enter}")
    cy.get('#UITestLinkNext').click()
 
 
    //Participants
    cy.contains('Select participants')
    cy.get('[aria-rowindex="7"] > .e-treegridcheckbox > .e-treecolumn-container > .e-checkbox-wrapper > .e-frame').click()
    cy.get('#UITestLinkNext').click()
 
    //Communication email None
    cy.contains('Communication')
    // click to None
    cy.get('#UITestLinkNone').click()
    // Message
    cy.get('.header-wrapper > span[style=""]').contains('No communication method')
     
    //Next
    cy.get('#UITestLinkNext').click()
 
    //Schedule
    cy.contains('Schedule')
    // click to 7 days
    cy.get('#ui-radio-12 > .ui-radio-label > .ui-radio-container').click()
     
    //today
    // cy.get('#ui-radio-15 > .ui-radio-label > .ui-radio-container').click()
    cy.get('#UITestDateToday > .ui-radio-label > .ui-radio-container').click()
    
    // time 15:00
    cy.get('#ui-radio-18 > .ui-radio-label > .ui-radio-container').click()
    
    // Next
    cy.get('#UITestLinkNext').click()
           
      
    //summary 
    cy.contains('Summary')
    cy.get('.email-warning > .warning').contains('Please select email as communication method to be able to send emails.') 
    cy.get('#cdk-step-content-0-5 > app-survey-tester > ui-card > div > ui-card-content > div > div > button').click()
    
    //click to Cancel
    cy.get('#UITestAddTesterCancel > .uikit-button-wrapper > .label').click()
    cy.get('#cdk-step-content-0-5 > .ui-h2').contains('Summary')
    // Click to Cancel
    cy.get('#UITestLinkCancel').click()
        
     cy.contains('Choose product')

      
  })

})

