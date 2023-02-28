let number= 28;
let sum=0;
if (number==1) {
    console.log("1 ne sadedir ne murekkeb");
        
}
else
    for (let i = 2; i <number/2; i++)
        if(number%i==0)
            sum++;
        {
        }
    if (sum>0){
        console.log("eded murekkebdir, prime");

    }
    else{
        console.log("eded sadedir, composite");
    }
        