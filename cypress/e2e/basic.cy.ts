/// <reference types="cypress"/>

describe('Main Page', () => {
  beforeEach('Visit the main page', () => {
    cy.visit('localhost:3000');
  });

  it('Visit the main page and click on an item', () => {
    cy.get(':nth-child(1) > .sc-qRumB', { timeout: 15000 }).click();
  });

  it('Should scroll the main page', () => {
    cy.scrollTo('bottom', { timeout: 15000 });
  });

  it('Click on searchbar and search for a pokemon', () => {
    cy.get('.sc-dmqHEX').type('Treecko');

    cy.get('.sc-eDDNvR', { timeout: 15000 }).should('be.visible');
    cy.get('.sc-eDDNvR').click();
  });
});

describe('Test Pokemon Page', () => {
  beforeEach('Visit pokemon page', () => {
    cy.visit('localhost:3000/pokemon/150');
  });

  it('Should render the page', () => {
    cy.get('.sc-hhGHuG > :nth-child(1)', { timeout: 15000 }).should(
      'be.visible'
    );
  });
});

describe('Test Ability Page', () => {
  beforeEach('Visit Ability Page', () => {
    cy.visit('localhost:3000/ability/50');
  });

  it('Should render the page', () => {
    cy.get('.sc-jhSXcr', { timeout: 15000 }).should('be.visible');
  });
});
