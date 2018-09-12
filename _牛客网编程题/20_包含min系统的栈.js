function push(node)
{
    // write code here
    dataStore.push(node);
    if (assistStack.length === 0) {
    	assistStack.push(node)
    }
    else if(node < assistStack[assistStack.length-1]) {
    	assistStack.push(node);
    }
    else{
    	assistStack.push(assistStack[assistStack.length-1]);
    }

}
function pop()
{
    // write code here
    dataStore.pop();
    assistStack.pop();
}
function top()
{
    // write code here
    return dataStore[dataStore.length-1];

}
function min()
{
    // write code here
    return assistStack[assistStack.length-1];
}

var dataStore = [];
var assistStack = [];
var pointer = 0;

