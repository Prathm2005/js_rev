setTimeout(()=>{
    try{
        console.log("Starting the console....");
        throw new Error("Something went wrong!!")
        
    }
    catch(error){
        console.log(error.message);
        
    }
},2000)