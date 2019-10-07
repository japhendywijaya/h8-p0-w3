function hitungJumlahKata(kalimat) 
{
    var trimmingStr = kalimat.trim()
    
    var splittingStr = trimmingStr.split(" ")
    return (splittingStr.length)

}


  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5

  console.log('additional test =', hitungJumlahKata('   ini kalimat berspasi')); // 5