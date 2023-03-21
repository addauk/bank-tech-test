// file statementPrinter.spec.js

const { beforeEach } = require("node:test");
const StatementPrinter = require("../statementPrinter");

describe("StatementPrinter Class", () => {
  const consoleSpy = jest.spyOn(console, "log");

  afterEach(() => {
    consoleSpy.mockClear();
  });

  it("prints a statement with only headers when no transactions", () => {
    StatementPrinter.print([], 0);
    expect(consoleSpy).toHaveBeenCalledWith(
      "date || credit || debit || balance"
    );
  });

  // it("prints a statement that shows deposits and withdrawls in order with correctly tracking balances", () => {
  //   // let bank = new Bank();
  //   // dateSpy.mockImplementationOnce(() => new Date("January 10,2023"));
  //   // bank.deposit(1000);
  //   // dateSpy.mockImplementationOnce(() => new Date("January 13,2023"));
  //   // bank.deposit(2000);
  //   // dateSpy.mockImplementationOnce(() => new Date("January 14,2023"));
  //   // bank.withdraw(500);
  //   //need mocking
  //   StatementPrinter.print(transactions, balance);
  //   expect(consoleSpy).toHaveBeenNthCalledWith(
  //     1,
  //     "date || credit || debit || balance"
  //   );
  //   expect(consoleSpy).toHaveBeenNthCalledWith(
  //     2,
  //     "14/01/2023 || || 500.00 || 2500.00"
  //   );
  //   expect(consoleSpy).toHaveBeenNthCalledWith(
  //     3,
  //     "13/01/2023 || 2000.00 || || 3000.00"
  //   );
  //   expect(consoleSpy).toHaveBeenNthCalledWith(
  //     4,
  //     "10/01/2023 || 1000.00 || || 1000.00"
  //   );
  // });
});
