// file bank.spec.js

const { beforeEach } = require("node:test");
const Bank = require("../bank");

let dateSpy;

beforeAll(() => {
  dateSpy = jest
    .spyOn(global.Date, "now")
    .mockImplementation(() => new Date("January 1,1999"));
});

afterAll(() => {
  dateSpy.mockRestore();
});

describe("Bank class", () => {
  it("constructs", () => {
    let bank = new Bank();
    expect(bank.transactions).toEqual([]);
    expect(bank.balance).toBe(0);
  });
  describe("deposit method", () => {
    it("stores the value given alongside today's date and correctly updates balance", () => {
      let bank = new Bank();
      bank.deposit(100);
      expect(bank.transactions).toEqual([{ date: "01/01/1999", amount: 100 }]);
      expect(bank.balance).toBe(100);
    });
    it("stores multiple deposits alongside correct dates and correctly updates balance", () => {
      let bank = new Bank();
      bank.deposit(100);
      bank.deposit(1514.27);
      expect(bank.transactions).toEqual([
        { date: "01/01/1999", amount: 100 },
        { date: "01/01/1999", amount: 1514.27 },
      ]);
      expect(bank.balance).toBe(1614.27);
    });
  });
  describe("withdraw method", () => {
    it("stores the value given alongside today's date and correctly updates balance", () => {
      let bank = new Bank();
      bank.withdraw(100);
      expect(bank.transactions).toEqual([{ date: "01/01/1999", amount: -100 }]);
      expect(bank.balance).toBe(-100);
    });
    it("stores multiple values given alongside correct dates and correctly updates balance", () => {
      let bank = new Bank();
      bank.withdraw(100);
      bank.withdraw(1514.27);
      expect(bank.transactions).toEqual([
        { date: "01/01/1999", amount: -100 },
        { date: "01/01/1999", amount: -1514.27 },
      ]);
      expect(bank.balance).toBe(-1614.27);
    });
  });
  describe("statement method", () => {
    const consoleSpy = jest.spyOn(console, "log");

    afterEach(() => {
      consoleSpy.mockClear();
    });

    it("prints a statement with only headers when no transactions", () => {
      let bank = new Bank();
      bank.statement();
      expect(consoleSpy).toHaveBeenCalledWith(
        "date || credit || debit || balance"
      );
    });
    it("prints a statement that shows deposits and correct balance", () => {
      let bank = new Bank();
      bank.deposit(100);
      bank.deposit(1514.27);
      bank.statement();
      expect(consoleSpy).toHaveBeenNthCalledWith(
        1,
        "date || credit || debit || balance"
      );
      expect(consoleSpy).toHaveBeenNthCalledWith(
        2,
        "01/01/1999 || 1514.27 || || 1614.27"
      );
      expect(consoleSpy).toHaveBeenNthCalledWith(
        3,
        "01/01/1999 || 100.00 || || 100.00"
      );
    });
    it("prints a statement that shows withdrawls and correct balance", () => {
      let bank = new Bank();
      bank.withdraw(100);
      bank.withdraw(1514.27);
      bank.statement();
      expect(consoleSpy).toHaveBeenNthCalledWith(
        1,
        "date || credit || debit || balance"
      );
      expect(consoleSpy).toHaveBeenNthCalledWith(
        2,
        "01/01/1999 || || 1514.27 || -1614.27"
      );
      expect(consoleSpy).toHaveBeenNthCalledWith(
        3,
        "01/01/1999 || || 100.00 || -100.00"
      );
    });
    it("prints a statement that shows deposits and withdrawls in order with correctly tracking balances", () => {
      let bank = new Bank();
      bank.deposit(1000);
      bank.deposit(2000);
      bank.withdraw(500);
      bank.statement();
      expect(consoleSpy).toHaveBeenNthCalledWith(
        1,
        "date || credit || debit || balance"
      );
      expect(consoleSpy).toHaveBeenNthCalledWith(
        2,
        "01/01/1999 || || 500.00 || 2500.00"
      );
      expect(consoleSpy).toHaveBeenNthCalledWith(
        3,
        "01/01/1999 || 2000.00 || || 3000.00"
      );
      expect(consoleSpy).toHaveBeenNthCalledWith(
        4,
        "01/01/1999 || 1000.00 || || 1000.00"
      );
    });
  });
});
