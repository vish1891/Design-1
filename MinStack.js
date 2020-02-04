// Time Complexity : O(1)
// Space Complexity : n (size of the stack)
// Did this code successfully run on Leetcode : yes
// Any problem you faced while coding this : yes, i was not aware that peek does not exist in javascript


// Your code here along with comments explaining your approach

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.minStack = [];
    this.minStack.push(Number.MAX_VALUE);
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if(this.minStack.length > 0){
    //    var temp = this.minStack[this.minStack.length-1];
        this.minStack.push(Math.min(x,this.minStack[this.minStack.length-1]));    
    }
    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.stack.length>0){
        this.stack.pop();
        this.minStack.pop();
    }
        
    else
        return;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length-1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
