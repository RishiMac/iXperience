function printDate() {
    let now = new Date();
    let months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

    let day = now.getDay();
    let month = months[now.getMonth()];
    let year = now.getFullYear();

    console.log(day + ' ' + month + ' ' + year);
}
printDate();
printDate();