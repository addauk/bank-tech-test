// file bank.js

class Bank {
  constructor() {
    this.balance = 0.0;
    this.transactions = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.transactions.push({ date: this.#todayFormatted(), amount: amount });
  }

  withdraw(amount) {
    this.balance -= amount;
    this.transactions.push({ date: this.#todayFormatted(), amount: -amount });
  }

  #todayFormatted() {
    let today = new Date(Date.now());
    let yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    dd = dd.toString().padStart(2, 0);
    mm = mm.toString().padStart(2, 0);
    let formattedToday = dd + "/" + mm + "/" + yyyy;

    return formattedToday;
  }
}

module.exports = Bank;
