/// <reference types="cypress" />

// Menu Page Visit
describe('Third Test', () => {
  it('Visit the menu products page', () => {
    cy.visit('/');
    cy.get('input[name="query"]')
      .type('Four Cheeses')
      .then((text) => {
        cy.get('.card-title').first().should('have.text', 'Four Cheeses');
      });
  });
});
