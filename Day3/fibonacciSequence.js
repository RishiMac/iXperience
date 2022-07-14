function fibonacciSequence(count){
    let counter = 0;
    let n1 = 0;
    let n2 = 1;
    let nextNum;
    
    console.log(n1); // print 0
    console.log(n2); // print 1
    nextTerm = n1 + n2;

  while (counter < count) {
      console.log(nextTerm);
      n1 = n2;
      n2 = nextTerm;
      nextTerm = n1 + n2;
      counter++;
  }
}

fibonacciSequence(10);