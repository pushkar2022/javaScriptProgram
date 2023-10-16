//1 add tow number
a=10
b=20
console.log("sum to number",a+b)
//2 Area of a reactangle
let l=10
let c=20

console.log(l*c)
//3 Chack if a number is even and odd
let e=11

if(e%2==0){
    console.log("even")
}else{
    console.log("odd")
}
//4 find the maximum number
let m=30
let n=20

if(m>n){
    console.log("big number",m)
}else{
   console.log("big number",n) 
}

//Generate table:
let t=21

for(i=1;i<11;i++){
    console.log("table",i*t)
}

// Array

let a=[21,32,43,54,55,66,77,88,99,170]
 //a[10]=11
 
 console.log("a 1 and a2 values add ",a[0]+a[1])

// console.log(a)
let sum=0;
for(i=0;i<10;i++){
    
    sum=sum+a[i]
    console.log(sum)
    
}
console.log("sum all Array values",sum)


let name=["Deepak","Saurab","Pushkar","kumar","rahul"]

console.log(name.length)


console.log(name[0],name[3])

for(i=0;i<name.length;i++){
    
    console.log(name[i],i)
}



// Function

function Add(a,b,c=0){
   
    
    console.log(a+b+c)
}


function min(a,b){
    console.log(a-b)
}

Add(20,30)

Add(20,30,40)














