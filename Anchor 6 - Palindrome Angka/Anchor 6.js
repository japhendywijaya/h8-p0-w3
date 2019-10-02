

function angkaPalindrome(num)
{ 
    console.log('\n', 'case for', num, '\n ------------------------------------')

    var checkStatus = false

    if(num<9 && num >=0)    
      {
        return num + 1
      }
    else if (num>=9)
      {
          while (checkStatus === false) 
            {
                num += 1
                var numString = String(num)
                
                var panjangString = numString.length
                var middleIndex = Math.ceil(panjangString/2)
                var iterationsNeeded = panjangString - middleIndex

              /* 
                console.log('panjang string =', panjangString)
                console.log('middleIndex =', middleIndex)
                console.log('iterationsNeeded =', iterationsNeeded)
                console.log('\n');
              */

                for ( var x = 0; x <= iterationsNeeded; x++)
                  {
     
                    if (numString[x] !== numString[(panjangString-x-1)])
                      {
                        x += iterationsNeeded
                        // console.log(num, '= bukan palindrome')
                      }
                    else if (x === iterationsNeeded)
                      {
                        /* 
                        console.log(num, '= angka palindrome')
                        checkStatus = true  
                        */

                        return num
                        

                      }

                  }



            }



      }


}
  

  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001

