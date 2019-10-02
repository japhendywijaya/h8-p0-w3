

// VARIAN PAKE SUB-ARRAY DI FUNCTIONNYA
console.log('\n','\n', 'VARIAN PAKE SUB-ARRAY DI FUNCTIONNYA', '\n')


function dataHandling (paramInput){

    var countArray = paramInput.length
    var completeList = []

    var subIndexJoin
    var completeListJoin
    for( var x = 0; x < countArray; x++)
    {
        
        var subIndex = 
        [
            'Nomor ID: ' + paramInput[x][0], 
            'Nama Lengkap: ' + paramInput[x][1], 
            'TTL: ' + paramInput[x][2] + " " + paramInput[x][3], 
            'Hobi: ' + paramInput[x][4]
        ]

        subIndexJoin = subIndex.join('\n')
        completeList.push(subIndexJoin)
        
        
    }

    completeListJoin = completeList.join('\n \n')
    return completeListJoin
}



var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

console.log(dataHandling(input))





// VARIAN PAKE CONSOLE.LOG DI FUNCTIONNYA
console.log('\n','\n', 'VARIAN PAKE CONSOLE.LOG DI FUNCTIONNYA',  '\n')

function dataHandling2 (paramInput2){

    var countArray2 = paramInput2.length
    

    for( var x = 0; x < countArray2; x++){
        
        console.log('Nomor ID: ' + paramInput2[x][0])
        console.log('Nama Lengkap: ' + paramInput2[x][1])
        console.log('TTL: ' + paramInput2[x][2] + " " + paramInput2[x][3])
        console.log('Hobi: ' + paramInput2[x][4])
        console.log('')
            
    }
}


var input2 = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]


dataHandling2(input2)






