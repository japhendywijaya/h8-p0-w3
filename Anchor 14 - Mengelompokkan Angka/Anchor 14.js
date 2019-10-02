function mengelompokkanAngka(arr) 
{
    var panjangArray = arr.length

    var groupOdd = []
    var groupEven = []
    var triple = []

    var result = []

    for (var x = 0 ; x <=panjangArray-1; x++)
      {

        if (arr[x] % 3 === 0)
          {
              triple.push(arr[x])
          }
        else if (arr[x] % 2 === 0)
          {
              groupEven.push(arr[x])
          }
        else
          {
              groupOdd.push(arr[x])
          }


      }

    result.push(groupEven, groupOdd, triple)
    
    return result
}
  






  // TEST CASES
  console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
  console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
  console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
  console.log(mengelompokkanAngka([])); // [ [], [], [] ]

  