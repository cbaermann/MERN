//          Takes about 50 seconds to complete
// Number.prototype.isPrime = function() {
//         for( let i=2; i<this; i++ ) {
//             if( this % i === 0 ) {
//                 return false;
//             }
//         }
//         return true;
//     }

//      Took less than one second for e4 and e5, for e6 took just one second
// Number.prototype.isPrime = () => {
//         for(let i = 2, s = Math.sqrt(this); i <= s; i++)
//         if(this % i === 0) return false; 
//     return num > 1;
//     }

const { performance } = require('perf_hooks');
const start = performance.now();
// let primeCount = 0;
// let num = 2; // for math reasons, 1 is considered prime
// while( primeCount < 1e6) {
//     if( num.isPrime() ) {
//         primeCount++;
//     }
//     num++;
// }
// console.log(`The 10,000th prime number is ${num-1}`);
// console.log(`This took ${performance.now() - start} milliseconds to run`);

// recursive
// function rFib( n ) {
//         if ( n < 2 ) {
//             return n;
//         }
//         return rFib( n-1 ) + rFib( n-2 );
//     }
//     rFib(20);
    // iterative
//     function iFib( n ) {
//         const vals = [ 0, 1 ];
//         while(vals.length-1 < n) {
//             let len = vals.length;
//             vals.push( vals[len-1] + vals[len-2] );
//         }
//         return vals[n];
//     }
//     iFib(20);
// console.log(`Fib took ${performance.now() - start} miliseconds to run`)
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
// const reversed1 = story.split("").reverse().join("");
const reversed = () => {
    const newStory = "";
    for(var i = story.length; i >= 0; i--){
        newStory.push(i);
    }
    return newStory;
}
console.log(`Story took ${performance.now() - start} miliseconds to run`)
