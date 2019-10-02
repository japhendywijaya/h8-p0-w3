
// Varian 1 - pake looping manual
function cariMean(arr) 
{
    console.log ('\n', 'Varian 1 - pake looping manual', '\n ------------------------------------')

    var panjangKata = arr.length
    var sumValue = 0 
    var mean

    for (var x = 0; x<panjangKata; x++)
      {
          sumValue += arr[x]
      }

    mean = Math.round(sumValue/panjangKata)
    
    return mean
}



/* 
// Varian 2 - pake java built-in 'reduce'
function cariMean(arr) 
{
    console.log ('\n', 'Varian 2 - pake java built-in "reduce"', '\n ------------------------------------')

    var sumValue = arr.reduce(function(a,b){
        return a + b}, 0);

    var mean = Math.round( sumValue / arr.length )

    
    return mean
}
 */  
  

  // TEST CASES
  console.log(cariMean([1, 2, 3, 4, 5])); // 3
  console.log(cariMean([3, 5, 7, 5, 3])); // 5
  console.log(cariMean([6, 5, 4, 7, 3])); // 5
  console.log(cariMean([1, 3, 3])); // 2
  console.log(cariMean([7, 7, 7, 7, 7])); // 7
 