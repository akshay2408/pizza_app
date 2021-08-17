/// <reference types="cypress" />

// Menu Page Visit
describe('Fourth Test', () => {
  it('Pizza Order', () => {
    cy.visit('/login');
    cy.get('input[name="email"]').type('user@user.com');
    cy.get('input[name="password"]').type('12345678');
    cy.get('.btn-primary').click();
    cy.wait(2000);
    cy.contains('Details').first().click();
    cy.wait(2000);
    cy.get('.btn-sm').should('have.text', 'Order').click();
    cy.contains('Checkout').click();
    cy.wait(200);
    cy.get('input[name="userName"]').type('John Smith');
    cy.get('input[name="address"]').type('510 Vine St, Washington');
    cy.get('input[name="postalCode"]').type('475001');
    cy.get('input[name="city"]').type('Washington');
    cy.get('input[name="phone"]').type('252 946-2057');
    cy.get('input[name="cardNumber"]').type('6011000990139424');
    cy.get('input[name="cardHolderName"]').type('John Smith');
    cy.get('input[name="expiry"]').type('1223');
    cy.get('input[name="cvc"]').type('276');
    cy.wait(2000);
    cy.get('.btn-primary').should('have.value', 'Pay 15.00 $').click();
    cy.get('.btn-sm').first().should('have.text', 'View').click();
  });
});
