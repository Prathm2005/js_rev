console.time("Slow");

for(let i=0;i<1000000;i++){
    const obj={
        a:1,
        b:2,
        c:3,
    }
}

console.timeEnd("Slow");

console.time("Fast");

for(let i=0;i<1000000;i++){
    const obj={};

    obj.a=1,
    obj.b=2;
    obj.c=3;
}

console.timeEnd("Fast");