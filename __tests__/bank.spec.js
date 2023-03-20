// file bank.spec.js

const { beforeEach } = require("node:test");
const Bank = require("../bank");

describe("Bank class", () => {
  it("constructs", () => {
    let bank = new Bank();
    expect(bank.transactions).toEqual([]);
    expect(bank.balance).toBe(0);
  });
  describe("deposit method", () => {
    it.todo(
      "stores the value given alongside today's date and correctly updates balance"
    );
    it.todo(
      "stores multiple deposits alongside correct dates and correctly updates balance"
    );
  });
  describe("withdraw method", () => {
    it.todo(
      "stores the value given alongside today's date and correctly updates balance"
    );
    it.todo(
      "stores multiple values given alongside correct dates and correctly updates balance"
    );
  });
  describe("statement method", () => {
    it.todo("prints a statement with only headers when no transactions");
    it.todo("prints a statement that shows deposits and correct balance");
    it.todo("prints a statement that shows withdrawls and correct balance");
    it.todo(
      "prints a statement that shows deposits and withdrawls in order with correctly tracking balances"
    );
  });
});
