let date = new Date()

let year = date.getFullYear()
let month = date.getMonth()+1
let day = date.getDate

let totalDays = new Date(year, month, 0).getDate()

let output = 
    (month<10 ? '0' : '') +  month + '/' +
    (day<10 ? '0' : '') + day + '/' + year

    console.log(date)


