function fibonacci(n) {
    //nick's code
    if(n <= 0){
      return 0;
    } else if(n == 1){
      return 1
    } else {
      return fibonacci(n-1) + fibonacci(n-2)
    }
  }
  
  // console.log(fibonacci(6))
  //2
  //indices   0 1 2 3 4 5 6
  //fibonacci 0 1 1 2 3 5 8
  //0 < n < 30