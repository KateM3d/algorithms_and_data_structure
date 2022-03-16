//Complexity of an algorithm:
// 1. Space compexity (how much memory is used)
// 2. Time Complexity (How many primitive operations are exected?)

// ...with respect ti input ResizeObserverSize
// ...and asuming the worst case scenario

//case1: given the list of the hotels, return the price range of hotels in given search result

//approach 1: compare all numbers to one another. Nested loops. quadratiq time.
// the amount of work increases at the rate.
//# of operations: as the input grows how much work do we need to do?

//approach 2: 2 loops: to check min and max
//in this technique we are looking at each item 2 times.
//# of operations: we consider this 2n because as the data grows, the amount of work increases by 2

//approach 3: sorted list
//find first, find last
//# of operations: 2

//Big-O notation:
//k^n- expotential - the slowest - k- nested loops
//n^2 - quadratic time O(n^2) - double nested loops
//2n linear O(n) -looping through the values of an array
//log n - logarifmic O(logn) -loop that cuts the problem in a half every iteration
//2 constant O(1) -the fastest - running a statement(return) value look-up on an array, object, variable

//NATIVE METHODS & JS EXPRESSIONS
// for loop (linear)
// pop (constant)
// arr[0] (constant)
//>= <= (constant)
// 1+2 (constant)

// O(logn)

//SPACE COMPLEXITY
//space that it takes in memory. How much more space are we taking up?
//are you making a new data structure? how often you do it?

// exercise 1: what is TC?

let countChars = function(str) {
    let count = 0; //tc=1

    for (let i = 0; i < str.length; i++) {
        count++; //tc=str.length
    }
    return count; //tc=1
};

countChars("dance");
countChars("walk");

//linear

//exercise 2:

/*let countCharsTwo = function(str) {
    return str.length; // ihow does the length work. the length is just a property look-up. constant time.Always.
    //if the length of the string will be 1 mil chars - TC still will be constant.
};

countCharsTwo("dance");
countCharsTwo("walkfast");

//exercise 3:

let myList = ["hello", "hola"];
myList.push("bonjour"); //constant
myList.shift(); //linear
console.log(myList);

//TC-?
*/
//OPTIMIZATION WITH CACHING

//1)breadcrumps method when we keep the track of the things that we already seen. Also called caching, once we see something we save it, and then we do a property look-up (TC=constant)
//in this case we do 1 loop through the array. if we haven't seen it we save the object and we set it to truth.

let isUnique = (arr) => {
    const breadcrumps = {};
    let result = true;

    for (let i = 0; i < arr.length; i++) {
        console.log(`loop - i === ${i}`);
        if (breadcrumps[arr[i]]) {
            result = false;
        } else {
            breadcrumps[arr[i]] = true;
        }
        return result;
    }
};

//unique sort exercise:

const uniqueSort = (arr) => {
    const breadcrumps = {}; //create a breadcrumps object.we will keep here all values that we've seen before. if we've seen that before and we came across it again we know we do not need to push this value to our result
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        //the loop starts at 1, because we are asuming that the very first item is not a duplicate
        if (!breadcrumps[arr[i]]) {
            result.push(arr[i]);
            console.log(result);
            breadcrumps[arr[i]] = true;
            console.log(breadcrumps);
        }
    }
    console.log(result.sort((a, b) => a - b));
};

uniqueSort([4, 2, 2, 3, 2, 2, 2]);