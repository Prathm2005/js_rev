
let cnt=0;
let timer=setInterval(()=>{
    cnt++;
    console.log("hello , my name is Rohit Sharma!!");
    
    if(cnt==5){
        clearInterval(timer);
        console.log("Exected!!..");
        
    }
    
},2000)