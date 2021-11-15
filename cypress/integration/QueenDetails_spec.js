describe('Individual Queen Details User Flows', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://www.nokeynoshade.party/api/queens/2', { fixture: 'queen.json' })
    cy.visit('http://localhost:3000/queen/2')
  });

  it('Should see a header', () => {
    cy.get('.app-title')
    .contains('Ru-Pedia')
  });

  it('Should see a button', () => {
    cy.get('.szns-btn')
    cy.contains('SEASONS')
  });

  it('Should see a drop down when button is clicked', () => {
    cy.get('.szns-btn')
    .click()
    cy.get('[href="/season/1"] > p')
    .should('be.visible')
    .contains('Season 1')
    cy.get('[href="/season/2"] > p')
    .should('be.visible')
    .contains('Season 2')
    cy.get('[href="/season/3"] > p')
    .should('be.visible')
    .contains('Season 3')
    cy.get('[href="/season/4"] > p')
    .should('be.visible')
    .contains('Season 4')
    cy.get('[href="/season/6"] > p')
    .should('be.visible')
    .contains('Season 5')
    cy.get('[href="/season/7"] > p')
    .should('be.visible')
    .contains('Season 6')
    cy.get('[href="/season/8"] > p')
    .should('be.visible')
    .contains('Season 7')
    cy.get('[href="/season/9"] > p')
    .should('be.visible')
    .contains('Season 8')
    cy.get('[href="/season/11"] > p')
    .should('be.visible')
    .contains('Season 9')
    cy.get('[href="/season/13"] > p')
    .should('be.visible')
    .contains('Season 10')
    cy.get('[href="/season/15"] > p')
    .should('be.visible')
    .contains('Season 11')
    cy.get('[href="/season/16"] > p')
    .should('be.visible')
    .contains('Season 12')
  })

  it('Should no longer see the dropdown when the seasons button is clicked again', () => {
    cy.get('.szns-btn')
    .click()
    .click()
    cy.get('[href="/season/1"] > p')
    .should('be.hidden')
  })

  it('Should see details about the Queen', () => {
    cy.get('.name')
    .should('be.visible')
    .contains('Tammie Brown')
    cy.get('.image')
    .should('be.visible')
    cy.get('.details')
    .should('be.visible')
    cy.get('.back-button')
    .should('be.visible')
  })
})
