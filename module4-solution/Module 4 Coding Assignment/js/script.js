var arr = new Array;
arr[0] = "Yaakov";
arr[1] = "Jhon";
arr[2] = "Jen";
arr[3] = "jason";
arr[4] = "paul";
arr[5] = "frank";
arr[6] = "larry";
arr[7] = "paula";
arr[8] = "laura";
arr[9] = "jim";

var store;
for(var i = 0; i < arr.length; i++){
    store = arr[i];
    // console.log(store[0])
    if(store[0] === "J" || store[0] === "j"){
        console.log("Goodbye " + store);
    }
    else{
        console.log("Hello " + store);
    };
};