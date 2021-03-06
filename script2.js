//DATA STRUCTURE
/*
STACK
Abstract data type
LIFO - Last in, first out
Collection of elements with push and pop operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.
DO NOT use an array and the native push/pop method in your implementation. That's too easy, yeah? =P
Use an object as the underlying data structure.
*** Operations:
myStack.push(value)
=> count of stack
add value to collection
myStack.pop()
=> most recent element added collection
Remove item so that it is no longer in collection
myStack.peek()
=> most recent element added collection
Similiar to pop, but do not remove element from collection
myStack.count()
=> number of elements in stack
*** Exercises:
Modify your stack to take a max capacity and return a string if you try to add an element when there's no more room:
myStack.push(value)
=> "Max capacity already reached. Remove element before adding a new one."
Create a contains method to check if a value is in the stack:
myStack.contains('findme')
=> true/false
What's the time complexity?
Create an until method to get the number of pops until you get to a certain value:
stack values - (first)2-5-7-3-6-9(last)
myStack.until(7)
=> 4
What's the time complexity?
Implement a MinStack that has a min method which will return the minimum value in the stack in constant time.
*/

function Stack(capacity) {
    this._capacity = capacity || Infinity;
    this._storage = {};
    this._count = 0;
}

// O(1)
Stack.prototype.push = function(value) {
    if (this._count < this._capacity) {
        this._storage[this._count++] = value;
        return this._count;
    }
    return "Max capacity already reached. Remove element before adding a new one.";
};

// O(1)
Stack.prototype.pop = function() {
    if (this._count === 0) {
        return "No element inside the stack. Add element before poping.";
    }

    let value = this._storage[--this._count];
    delete this._storage[this._count];
    if (this._count < 0) {
        this._count = 0;
    }
    return value;
};

// O(1)
Stack.prototype.peek = function() {
    return this._storage[this._count - 1];
};

// O(1)
Stack.prototype.count = function() {
    return this._count;
};

//____________________________________________
// Implement a min stack
function MinStack(capacity) {
    this._capacity = capacity;
    this._storage = {};
    this._count = 0;
    this._min = new Stack();
}

// O(1)
MinStack.prototype.push = function(value) {
    if (this._count < this._capacity) {
        if (this._min.peek() < value) {
            this._min.push(this._min.peek());
        } else {
            this._min.push(value);
        }
        this._storage[this._count++] = value;
        return this._count;
    }
    return "Max capacity already reached. Remove element before adding a new one.";
};

// O(1)
MinStack.prototype.pop = function() {
    this._min.pop();
    let value = this._storage[--this._count];
    delete this._storage[this._count];
    if (this._count < 0) {
        this._count = 0;
    }
    return value;
};

// O(1)
MinStack.prototype.peek = function() {
    return this._storage[this._count - 1];
};

// O(1)
MinStack.prototype.count = function() {
    return this._count;
};

// O(1)
MinStack.prototype.min = function() {
    return this._min.peek();
};