describe('Main Page User Flows', () => {

  beforeEach(() => {
    cy.intercept('GET', 'http://www.nokeynoshade.party/api/queens/all', { fixture: 'queens.json' })
    cy.visit('http://localhost:3000')
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

  it('Should be able to clear the search and see all queens again', () => {
    cy.get('.search > button')
    .click()
    cy.get('#id1')
    .should('be.visible')
    cy.get('#id14')
    .should('be.visible')
    cy.get('#id24')
    .should('be.visible')
    cy.get('#id32')
    .should('be.visible')
  })

  it('Should see a card for each Queen', () => {
    cy.get('#id1')
    .should('be.visible')
    cy.get('[href="/queen/2"] > .queen-card > h3')      .should('be.visible')
    .contains('Tammie Brown')
    cy.get('[href="/queen/2"] > .queen-card')
    .should('be.visible')
  })

  it('Should display Queen details when a Queen card is clicked', () => {
    cy.intercept('GET', 'http://www.nokeynoshade.party/api/queens/1', { fixture: 'queen.json' })
    .get('[href="/queen/1"] > .queen-card').click()
    .url().should('include', '/queen/1')
  })

  it('Should display Season details when a Season Link is clicked', () => {
    cy.intercept('GET', 'https://www.nokeynoshade.party/api/seasons/13', { fixture: 'season.json' })
    cy.get('.szns-btn')
    .click()
    cy.get('[href="/season/13"] > p')
    .click()
    .url().should('include', '/season/13')
  })
})
