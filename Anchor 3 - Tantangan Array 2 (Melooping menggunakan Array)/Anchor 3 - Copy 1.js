

function dataHandling (paramInput){

    var countArray = input.length
    var completeList = []

    var completeListJoin
    for( var x = 0; x < countArray; x++){
        
        var subIndex = [
            'Nomor ID: ' + paramInput[x][0], 
            'Nama Lengkap: ' + paramInput[x][1],
            'TTL: ' + paramInput[x][2] + " " + paramInput[x][3], 
            'Hobi: ' + paramInput[x][4]
        ]

        completeList.push(subIndex)
        
        
    }

    // completeListJoin = completeList.join('')
    return completeList
}

/* 
Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca

Nomor ID:  0002
Nama Lengkap:  Dika Sembiring
TTL:  Medan 10/10/1992
Hobi:  Bermain Gitar

Nomor ID:  0003
Nama Lengkap:  Winona
TTL:  Ambon 25/12/1965
Hobi:  Memasak

Nomor ID:  0004
Nama Lengkap:  Bintang Senjaya
TTL:  Martapura 6/4/1970
Hobi:  Berkebun
 */

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

console.log(dataHandling(input))









/* 
console.log(input)

console.log('\n', '\n', 'test akses')
console.log(input[0])

console.log('\n', '\n', 'test akses')
console.log(input[1])

console.log('\n', '\n', 'test akses')
console.log(input[2])

console.log('\n', '\n', 'test akses')
console.log(input[3])


console.log('\n', '\n', 'test akses sub arrray')
console.log(input[0][1])

console.log('\n', '\n', 'test akses sub arrray')
console.log(input[0][2])

console.log(input.length)
console.log(input[0].length) */