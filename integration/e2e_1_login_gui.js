describe('Login via gui', function() {
  beforeEach(() => {
    cy.fixture('testuser_local').as('testuser')
    });


  it('login attempt wrong password', function() {
    cy.login_gui(this.testuser.username,"wrong")
    cy.get('.text-danger').should('exist')
  })
  it('login attempt non-existing user', function() {
    cy.login_gui("myuser@brilliantfuture.se","asdf")
    cy.get('.text-danger').should('exist')
  })
  it('login attempt empty', function() {
    cy.login_gui(" "," ")
    cy.get('.text-danger').should('exist')
  })
  it('login attempt injection', function() {
    cy.login_gui("test' or '1'='1' /*","foo")
    cy.get('.text-danger').should('exist')
   
  })
  it('login successful', function() {
    cy.login_gui(this.testuser.username,this.testuser.password)
    cy.get('.button-logout > .mat-button-wrapper').should('exist')
  })
})
