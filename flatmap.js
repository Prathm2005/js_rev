let arr=[1,2,3,4,5,6,7,8,9];

let result=arr.flatMap((ele)=>{
    return ele % 2==0?ele * ele: "";
});

console.log(result);
