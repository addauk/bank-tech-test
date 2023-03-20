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
    it.todo("prints a statement with only headers when no transactions");
    it.todo("prints a statement that shows deposits and correct balance");
    it.todo("prints a statement that shows withdrawls and correct balance");
    it.todo(
      "prints a statement that shows deposits and withdrawls in order with correctly tracking balances"
    );
  });
});
