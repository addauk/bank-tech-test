class DateFormatter {
  static europeanToday() {
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

module.exports = DateFormatter;
