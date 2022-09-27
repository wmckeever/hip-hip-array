// Challenge 2
  // Loop through the following array BACKWARDS, console.logging out each value. 64 should be printed first and 100 last.
  const grades = [100, 80, 110, 75, 83, 64];
  //Challenge 2 Code

  int = 0;
  let gradesReversed = grades.reverse();

  while(int < gradesReversed.length){
    console.log(gradesReversed[int])
    int++
  }