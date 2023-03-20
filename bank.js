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

  statement() {
    console.log("date || credit || debit || balance");
    let balance = this.balance;
    this.transactions.reverse().forEach((transaction) => {
      let output = transaction.date + " || ";
      if (transaction.amount > 0) {
        output += transaction.amount.toFixed(2) + " || || ";
      } else {
        output += "|| " + Math.abs(transaction.amount).toFixed(2) + " || ";
      }
      output += balance.toFixed(2);
      balance -= transaction.amount;
      console.log(output);
    });
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
