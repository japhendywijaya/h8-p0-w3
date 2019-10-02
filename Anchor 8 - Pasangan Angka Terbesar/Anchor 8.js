

function pasanganTerbesar(num) 
{
    console.log('\n', 'case for -', num, '\n ------------------------------------');

    var convertParamString = String(num)
    var panjangKata = convertParamString.length
    
    var currentPair
    var PairStringToNumber
    var largestPairNumber = 0 


    // console.log(convertString)
    // console.log(panjangKata)


    for(var x = 0; x<panjangKata-1; x++)
      {
        currentPair = convertParamString[x] + convertParamString[x+1]
        // console.log(currentPair)

        PairStringToNumber = Number(currentPair)
        // console.log(PairStringToNumber)


        if ( PairStringToNumber > largestPairNumber)
          {
            largestPairNumber = PairStringToNumber
            // console.log('largestPairNumber now is', largestPairNumber)
          }
  

      }

    return largestPairNumber
}
  




  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
  