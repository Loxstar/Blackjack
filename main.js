/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/


function handValue (hand) {
let sum=0;  
for(let i=0; i< hand.length;i++){

if (hand[i] >=2 && hand[i] <= 9){
     sum = sum + parseInt(hand[i]);
    
}else if(hand[i] === 10 || hand[i] === "J" || hand[i] === "Q" || hand[i] === "K"){
   sum = (sum + 10);
}
else {
  if (sum  <= 10){ 
 sum = sum + 11;   
  }
  else{
    sum = sum + 1;
  }
}

}
return sum;
}
handValue(["8", "A", "J"]);


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/