function tentukanDeretGeometri(arr) 
{
    console.log('\n', 'case for -', arr, '\n ------------------------------------');

    var panjangArray = arr.length
    var firstMargin = arr[1] / arr[0]
    var runningMargin

    // console.log('panjang array =', panjangArray)

    for ( var x =2; x<=panjangArray-1; x++)
      {
        runningMargin = arr[x] / arr[x-1]

        if(runningMargin !== firstMargin)
          {
            return false
          }
        else if ( x === panjangArray-1)
          {
              return true
          }

      }


}


  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
