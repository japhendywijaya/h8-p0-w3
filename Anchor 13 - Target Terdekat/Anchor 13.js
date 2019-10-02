console.log('\n asumsi : bisa kemungkinan terdapat lebih dari satu O', '\n')

function targetTerdekat(arr) 
{
    console.log('\n\n ------------------------------------')

    var panjangArray = arr.length


    // cari lokasi2 index character 'x' dalam arr
    var arrayOfX = []

    for( var x=0; x<panjangArray; x++)
      {
        if(arr[x] === 'x')
          {
              arrayOfX.push(x)
          }
      }
/* //diunblock aja kl mau display kalkulasinya
    console.log('index of x in "arr" =', arrayOfX)
    console.log('panjang array of x =', arrayOfX.length, '\n')
  */

    // cari lokasi2 index character 'o' dalam arr
    var arrayOfO = []
    
    for( var x=0; x<panjangArray; x++)
      {
        if(arr[x] === 'o')
          {
              arrayOfO.push(x)
          }
      }
/* //diunblock aja kl mau display kalkulasinya
      console.log('index of o in "arr" =', arrayOfO)
      console.log('panjang array of O =', arrayOfO.length, '\n')
       */
    

    // menyusun pasangan2 'o' dan 'x'
    var pairOfOX = []
    
    for ( var x = 0; x < arrayOfO.length; x++)
      {

        for ( var y = 0; y < arrayOfX.length; y++)
          {
              if (arrayOfX[y] > arrayOfO[x])
                {
                    pairOfOX.push([arrayOfO[x], arrayOfX[y]])
                    y += arrayOfX.length
                }
          }

      }
/* //diunblock aja kl mau display kalkulasinya
    console.log('index pair of OX =', pairOfOX)
    console.log('panjang array for pair of OX =', pairOfOX.length, '\n')
 */
      



    
    // now the real algorithm begin
    if (arrayOfX.length === 0)
      {
        return 0
      }
    else if(pairOfOX.length === 0 || arrayOfO.length > pairOfOX.length)
      {
          return 1
      }
    else
      {
        var minimumTarget = Math.abs(pairOfOX[0][0] - pairOfOX[0][1]) 
        // console.log('minimum target =', minimumTarget)

        if(pairOfOX.length === 1)
          {
              return minimumTarget    
          }
        else 
          {
            for ( var x = 1; x < pairOfOX.length; x++)
              {
                var runningTarget
                runningTarget = Math.abs( pairOfOX[x][0] - pairOfOX[x][1])
                // console.log('running target =', runningTarget)
                
                if (runningTarget < minimumTarget)
                 {
                    minimumTarget = runningTarget
                 }
              }
            
            //   console.log(minimum target =', minimumTarget)
              return minimumTarget
          }
         
      }
    
        


}



// TEST CASES
  console.log('jawaban nomor - 1 = ', targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log('jawaban nomor - 2 = ', targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log('jawaban nomor - 3 = ', targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log('jawaban nomor - 4 = ', targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log('jawaban nomor - 5 = ', targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2

// self test
  console.log('jawaban nomor - 6 = ', targetTerdekat([' ', ' ', 'o', ' ', ' ', '', ' ', '']) )  //contoh gkada x sama sekali, expect result 0
  console.log('jawaban nomor - 7 = ', targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' ']) ) //contoh gkada x setelah o, expect result 1

// contoh ada lebih dari satu pasangan ox
  console.log('jawaban nomor - 8 = ', targetTerdekat(['x', ' ', 'o', ' ', 'x', 'o', ' ', '', 'x', 'o', 'x']) )  //contoh lebih dari satu ox pair, expect result 1 (yang paling deket)
  console.log('jawaban nomor - 9 = ', targetTerdekat(['x', 'o', ' ', ' ', 'x', 'o', ' ', 'x', ' ', ' ', ' ']) )  //contoh lebih dari satu ox pair, expect result 2 (yang paling deket)
  console.log('jawaban nomor - 10 = ', targetTerdekat(['x', ' ', 'o', ' ', 'x', 'o', ' ', '', 'x', 'o', '']) )  //contoh lebih dari satu ox pair, expect result 1 (karena gkada x setelah o seperti contoh soal no 3)
  