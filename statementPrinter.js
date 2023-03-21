class StatementPrinter {
  static print(transactions, balance) {
    console.log("date || credit || debit || balance");
    transactions.reverse().forEach((transaction) => {
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
}

module.exports = StatementPrinter;
