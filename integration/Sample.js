const userSeed = reqird('../../server/dbname/usertable')
Context('BirdBord' , () => {
    beforeEach( () =>{
        cy.task('clear:db')
        cy.task('dbname:db', 'usertable.data')
        cy.visit('http://...../logain')
        cy.fixture('testuser_ct').as('testuser')
        cy.login_gui(this.testuser.username,this.testuser.password)
    })
})