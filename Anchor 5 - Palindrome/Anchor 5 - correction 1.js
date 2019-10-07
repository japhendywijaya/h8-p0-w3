


function palindrome(kata) 
{
    console.log('\n', 'case for -', kata, '\n ------------------------------------');
    
    var panjangKata = kata.length
    var indexOfMiddleChar = Math.ceil(panjangKata /2)
    var iterationsNeeded = panjangKata-indexOfMiddleChar


    for ( var x = 0; x<=iterationsNeeded; x++)
      {

        if (kata[x] !== kata[(panjangKata-x-1)]) 
          {  
            return false
          }
        else if (x === iterationsNeeded) 
          {
            return true
          }
        else
          {
          }


      }
    

}
  

  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false 

/* 
  //test case sendiri
  console.log(palindrome('sasa')); // false 
  console.log(palindrome('abcecba')); // true
  console.log(palindrome('abcedcba')); // false  
 */