/// <reference types="cypress" />

describe('Second Test', () => {
  it('Check current page', () => {
    cy.visit('/products/2');
    cy.wait(5000);
    cy.get('.pagination').children('.active').should('contain', '2');
  });

  it('Move to next page', () => {
    cy.get('.pagination').children('.active').next().click();
    cy.wait(5000);
  });

  it('Move to Prev page', () => {
    cy.get('.pagination').children('.active').prev().click();
  });
});
