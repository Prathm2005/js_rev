function add(a,b) {
    console.log(a+b);
    
}


function highorder(a,b,add) {
    add(a,b);
}

highorder(3,4,add);
