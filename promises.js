// let mypromise= new Promise((resolve,reject)=>{
//     let success=true;

//     if(success==true){
//         resolve("Its right")
//     }
//     else{
//         reject("Its wrong")
//     }
// })

// mypromise
// .then((message)=>{
//     console.log(message)
// })
// .catch((error)=>{
//     console.log(error);
    
// })

let mypromise = new Promise((resolve, reject) => {
    let success = true;

    if (success == true) {
        resolve("Its right");
    } else {
        reject("Its wrong");
    }
});

async function checkPromise() {
    try {
        let message = await mypromise;   
        console.log(message);          
    } catch (error) {
        console.log(error);          
    }
}

checkPromise();
