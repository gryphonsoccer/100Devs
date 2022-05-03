function digitize(n) {
    let bob = String(n).split('').reverse().map(element=>Number(element))
    console.log(bob)
    
  }

  digitize(54321)