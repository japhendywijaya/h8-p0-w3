function perkalianUnik(arr)
{
    console.log('\n', 'Case for -', arr,'\n ------------------------------------');
    var panjangKata = arr.length        
    var newArr = []
    

    for (var x = 0; x<panjangKata; x++)
      {
        var tempMultiply = 1

          for (var y = 0; y<panjangKata; y++)
            {
                if (y === x)
                  {
                      tempMultiply *= 1
                  }
                else
                  {
                      tempMultiply *= arr[y]
                  }
            }

        newArr.push(tempMultiply)
      }

    return newArr

}
  



  // TEST CASES
  console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
  console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
  console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
  console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
  console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]

