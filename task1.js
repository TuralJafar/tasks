let a=[6,8,12,15,20];
let sum=0;
let count=0
for (let index = 0; index < a.length; index++) {
    if (a[index]%3==0) {
        sum+=a[index];
        count++;
        
    }
    
}
console.log(sum/count);