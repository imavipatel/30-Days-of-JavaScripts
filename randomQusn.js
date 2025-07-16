//Random qurated question

//Qusn 1: 

let x = 10;

const check = ()=>{
    console.log(x);
    if(true){
        var x = 20
    }
}

check()

//Qusn 2:

console.log(1+'1');
console.log('11'-1)


//Qusn 3:

const arr = [1, , 3]

console.log(arr.length)
console.log(arr[1])
console.log(1 in arr)
console.log(2 in arr)

//Qusn 4:

let first = 'Ankit'
let second = '❤️'

console.log(first.length)
console.log(second.length) //js use UTF-16 under the hood. js counts units not actual visible char

//Qusn 5:

var sample1 = [5,3,6,1];
var sample2=['jhon', 'ruby', 'michel'];
var sample3=["sales","accounts","admin"];
var array=[];
array.push.apply(sample1,sample2,sample3);
console.log(sample1);

//Qusn 6:
console.log("110101101110110011".split(0,5));