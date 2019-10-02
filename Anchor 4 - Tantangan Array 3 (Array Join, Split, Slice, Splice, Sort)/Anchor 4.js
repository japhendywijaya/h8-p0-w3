// case SPLICE
console.log('\n', '\n', 'case SPLICE', '\n', '-----------------------------')


function dataHandling2(paramInput)
{
    
    paramInput.splice(1, 1, "Roman Alamsyah Elsharawy");
    paramInput.splice(2, 1, "Provinsi Bandar Lampung");
    paramInput.splice(4, 1, "Pria");
    paramInput.push("SMA International Metro");

    return paramInput;

}


var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

console.log(dataHandling2(input))






// case Tampilkan nama bulan
console.log('\n', '\n', 'Case Tampilkan nama bulan', '\n', '-----------------------------')


var splittingDate = input[3].split('/')
var monthName

switch (splittingDate[1]) {
    case '01':
        monthName = "January"
        break;
    case '02':
        monthName = "February"
        break;
    case '03':
        monthName = "March"
        break;
    case '04':
        monthName = "April"
        break;
    case '05':
        monthName = "May"
        break;
    case '06':
        monthName = "June"
        break;
    case '07':
        monthName = "July"
        break;
    case '08':
        monthName = "August"
        break;
    case '09':
        monthName = "September"
        break;
    case '10':
        monthName = "October"
        break;
    case '11':
        monthName = "November"
        break;
    case '12':
        monthName = "December"
        break;
    default:
        break;
}

console.log(monthName)

var splittingDateMonthName = [splittingDate[0], monthName, splittingDate[2]]
console.log(splittingDateMonthName.join("-"))






// case SORT
console.log('\n', '\n', 'Case SORT', '\n', '-----------------------------')

    splittingDate.sort(function(value1, value2) { return value2-value1 })
    
console.log(splittingDate)





// case JOIN
// COBA TANYA, KENAPA splittingDate-nya jadi ikut keupdate sama splittingDateSorted
console.log('\n', '\n', 'Case JOIN', '\n', '-----------------------------')

var splittingDate2 = input[3].split('/')
console.log(splittingDate2.join('-'))


//case limit 15 character
console.log('\n', '\n', 'Case SLICE - limit 15 character', '\n', '-----------------------------')


var slicedName = input[1].slice(0,14)
console.log(slicedName)




