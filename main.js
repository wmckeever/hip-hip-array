/* This assignment will give you some practice with creating arrays and using their methods. */


console.log("Challenge 1");
// ANY time you're asked to print something from the  array, do it with a loop, printing each item you're asked to print INDIVIDUALLY.
// 
// 
//
// Challenge 1
//
// Loop through the following array, console.logging out each value.
const students = [
    'Tre',
    'Sonny',
    'Crystal',
    'Ilyas',
    'Greg',
    'Fernando',
    'Timothy',
    'Patrick',
    'Steve',
    'Jimothy',
    'Pat',
    'Arnold',
    'Andy'
  ];
  // Challenge 1 Code
  
let id1 = 0; // keeps track of where we are in the loop. 

while(id1 < students.length){
console.log(students[id1]);
  id1++ 
}
  


  console.log("\n");
  console.log("Challenge 2");
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
  console.log("\n");
  console.log("Challenge 3");
  
  // Challenge 3
  // Console.log out only the even numbers in the following array.
  const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];
  // Challenge 3 Code


  let int = 0;
  while(int < positiveNumbers.length){
 if (positiveNumbers[int] % 2 == 0){
  console.log(positiveNumbers[int])
 }
 
 int++ 
}

  console.log("\n");
  console.log("Challenge 4");
  // Challenge 4
  // Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four total printings.
  const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];

  // Challenge 4 Code

  
  let int = 0;
  while(int < mixedSignNumbers.length){
 if (mixedSignNumbers[int] % 2 == 0){
  console.log(mixedSignNumbers[int])
 }
 
 int++ 
}

  
  console.log("\n");
  console.log("Challenge 5");
  // Challenge 5
  // Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
  const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
  // Challenge 5 Code
   
  console.log ("Original Array: ")
  console.log(symmetricalCapitals);

  console.log("After removing two from the beginning: ")
  console.log(symmetricalCapitals.shift());
  console.log(symmetricalCapitals.shift());
  console.log(symmetricalCapitals);

  console.log("After removing one from the end as well: ")
  
  console.log(symmetricalCapitals.pop());
  console.log(symmetricalCapitals);



  console.log("\n");
  console.log("Challenge 6");
  // Challenge 6
  // Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.
  const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
  // Challenge 6 Code
  

console.log(`The original array is: ${fibonacciNumbers}` )

console.log("After adding a 0 to the start of the array: ")
fibonacciNumbers.unshift(0);
console.log(fibonacciNumbers);

console.log("After adding two values (21 & 34) to the end of the array:")
fibonacciNumbers.push(21,34);
console.log(fibonacciNumbers);

let id1 = 0; // keeps track of where we are in the loop. 

while(id1 < fibonacciNumbers.length){
console.log(fibonacciNumbers[id1]);
  id1++ 
}
  


  console.log("\n");
  console.log("Challenge 7");
  // Challenge 7
  // Make a NEW array with 5 values of your choice, using the same syntax as the array creation from the previous 6 challenges; that is, every value should be placed within the square brackets.  Now console.log out each value individually.
  // Challenge 7 Code

  const myArray = ["anchor", "sails", "mast", "helm", "rigging"];

let individual = 0;

while (individual < myArray.length){
  console.log(myArray[individual]);
  individual++
}




  console.log("\n");
  console.log("Challenge 8");
  // Challenge 8
  // Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.
  //const emptyArray = [];
  // Challenge 8 Code
  const emptyArray = [];

  console.log("First we show the empty array: ")
  console.log(emptyArray);
  
  console.log("Then we .unshift() to add tacos.")
  emptyArray.unshift("tacos");
  console.log(emptyArray);
  
  console.log("Next is pizza.")
  emptyArray.unshift("pizza");
  console.log(emptyArray);
  
  console.log("And burgers.")
  emptyArray.unshift("burgers");
  console.log(emptyArray);
  
  console.log("and finally, after using .push(), we add hotdogs and nachos: ")
  emptyArray.push("hotdogs", "nachos");
  console.log(emptyArray);



  


  console.log("\n");
  console.log("Challenge 9");
  // Challenge 9
  // Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
  // Challenge 9 Code
  
   
  const students = [
    'Tre',
    'Sonny',
    'Crystal',
    'Ilyas',
    'Greg',
    'Fernando',
    'Timothy',
    'Patrick',
    'Steve',
    'Jimothy',
    'Pat',
    'Arnold',
    'Andy'
  ];

  console.log('The original list: ')
  console.log(students)

let id= 0; 

let newStudentList = students.slice(3,11);

while(id < newStudentList.length){
 
  console.log(newStudentList[id]);   
  id++ 

  console.log("\n");
  console.log("Challenge 10");
  // Challenge 10
  // Loop through the `students` array from Challenge 1, making a COPY of the array , starting at index 3 and ending at index 10 (INCLUSIVE). This is very similar to string building; create a new array, loop through the old one, and put values from the original in the new one. Then log out each value of the copy indivudally.
  // Do NOT use slice, you will be using that for the next challenge!
  // Challenge 10 Code

  const students = [
    'Tre',
    'Sonny',
    'Crystal',
    'Ilyas',
    'Greg',
    'Fernando',
    'Timothy',
    'Patrick',
    'Steve',
    'Jimothy',
    'Pat',
    'Arnold',
    'Andy'
  ];

  let i = 0;
  let students2 = students.splice(3,8);
  

  while (i < students2.length){
console.log(students2[i]);
i++

// let copiedStudents = [];
// let index = 3;

// while(index < 11){
//   copiedStudents.push(students[index])
//   index++
// }
// console.log(copiedStudents);



  console.log("\n");
  console.log("Challenge 11");
  // Challenge 11
  // Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the original array didn't get any values taken out of it, because `slice` does NOT modify the original array.
  // Challenge 11 Code
  

  const students = [
    'Tre',
    'Sonny',
    'Crystal',
    'Ilyas',
    'Greg',
    'Fernando',
    'Timothy',
    'Patrick',
    'Steve',
    'Jimothy',
    'Pat',
    'Arnold',
    'Andy'
  ];

let newList = students.slice(3,11);
console.log('This is the array after using .slice(): ')
console.log(newList); 


console.log('This is the original array: ')
console.log(students)



  console.log("\n");
  console.log("Challenge 12");
  // Challenge 12
  // Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
  const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
  // Challenge 12 Code

  console.log("This is the original array: ");
console.log(dinosaurs);

let i = 0;
let dinos2 = dinosaurs.splice(4,3);

while(i < dinosaurs.length){
console.log(dinosaurs[i]);
i++;

}

  
  console.log("\n");
  console.log("Challenge 13");
  // Challenge 13
  // Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
  // Challenge 13 Code

  const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']

  console.log("Here is the array of dinosaur names joined using the * separater: ")
  console.log(dinosaurs.join(" * "))
  

  
  console.log("\n");

  console.log("Challenge 14");
  // Challenge 14
  // Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
  // Challenge 14 Code

  const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']

  console.log("Here is the original array of dinosaur names: ");
  console.log(dinosaurs);
  
  console.log("Here is the array of dinosaur names reversed: ");
  console.log(dinosaurs.reverse())

  
  console.log("\n");
  console.log("Challenge 15");
  // Challenge 15
  // Create two new arrays.
  // Use .concat to combine those two arrays into a NEW array you make (.concat RETURNS an array). Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
  // Challenge 15 Code

  const computers = ['dell', 'hp', 'starlabs', 'lenovo', 'alienware', 'apple' ]

  const linuxDistros = ['ubuntu', 'debian', 'linux-mint', 'arch', 'manjaro', 'popOS', 'fedora', 'elementaryOS']
  
  
  let allBrands = computers.concat(linuxDistros);
  console.log(allBrands);
  
  let i = 0;
  


  console.log(`Here is the primary array called computer brands: ${computers}` )
  console.log(`Here is the secondary array called linux distros: ${linuxDistros}` )
  
  while(i < allBrands.length){
  console.log(allBrands[i])
  i++
  
  }
  