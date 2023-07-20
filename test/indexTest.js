const { expect } = require('chai');
const {
  customerName,
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  leastFavoriteCustomer,
  changeLeastFavoriteCustomer,
} = require('../index');

describe('index.js', function () {
  describe('customerName', function () {
    it('is in global scope', function () {
      expect(customerName).to.equal('John');
    });
  });

  describe('upperCaseCustomerName()', function () {
    it('uppercases the global customerName variable', function () {
      upperCaseCustomerName();
      expect(customerName).to.equal('JOHN');
    });
  });

  describe('setBestCustomer()', function () {
    it('sets a global variable bestCustomer to "not bob"', function () {
      setBestCustomer();
      expect(bestCustomer).to.equal('not bob');
    });
  });

  describe('overwriteBestCustomer()', function () {
    it('changes the value of the global variable bestCustomer', function () {
      overwriteBestCustomer();
      expect(bestCustomer).to.equal('still not bob');
    });
  });

  describe('leastFavoriteCustomer', function () {
    it('is a constant in global scope', function () {
      expect(leastFavoriteCustomer).to.equal('Alice');
    });
  });

  describe('changeLeastFavoriteCustomer()', function () {
    it('throws an error when attempting to change a constant', function () {
    });
  });
});
