var arr = new Array;
arr[0] = "John";
arr[1] = "Joe";
arr[2] = "Yaakov";
arr[3] = "Hockings";
arr[4] = "David";
arr[5] = "Stephen";
arr[6] = "Martha";
arr[7] = "Julie";
arr[8] = "jen";
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