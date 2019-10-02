function tentukanDeretAritmatika(arr) 
{
    console.log('\n', 'case for ', arr, '\n ------------------------------------');

    var panjangArray = arr.length   
    var firstMargin = Math.abs(arr[0] - arr[1])
    var runningMargin

    for(var x = 1; x<panjangArray-1; x++)
      {
        runningMargin = Math.abs( arr[x] - arr[x+1])
        // console.log('running margin =',runningMargin)

        if( runningMargin !== firstMargin)
          {
            return false
          }
        else if ( x === panjangArray-2)
          {
            return true
          }  
      }
    




}


  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
 
