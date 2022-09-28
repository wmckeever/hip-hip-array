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
  
  