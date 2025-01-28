import userdata from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {

    const selectorsList = {
      usernameField: "[name='username']",
      passwordField: "[name='password']",
      loginButton:   "[type='submit']",
      sectionTitleTopBar:  '.oxd-topbar-header-breadcrumb-module',
      dashboardGrid: ".orangehrm-dashboard-grid",
      wrongCredentialAlert: "[role='alert']"
    }


  it('Login - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userdata.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userdata.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location ('pathname').should('equal' , '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)

  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userdata.userFail.username)
    cy.get(selectorsList.passwordField).type(userdata.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert) 
   })

})