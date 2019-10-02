function groupAnimals(animals) 
{
    var panjangArray = animals.length
    var groupAnimal = []


    animals.sort()
    // console.log(animals)


    var tempGroup = [animals[0]]
    for (var x =1; x<=panjangArray-1; x++)
      {
        

        if (animals[x][0] !== animals[x-1][0])
          {
            groupAnimal.push(tempGroup)
            tempGroup = []
            tempGroup.push(animals[x])

          }
        else
          {
            tempGroup.push(animals[x])
          }

      }
    
    groupAnimal.push(tempGroup)

    return groupAnimal


}


  // TEST CASES
  console.log('jawaban nomor - 1 = ',groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log('\n jawaban nomor - 2 = ',groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

