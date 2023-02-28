//verilmis ededler siyahisinda reqemleri sayi 2den boyuk olan ededlerin cemi
let a=[32,181,145,16,48,107];
let count=0;
let sum=0;
for (let index = 0; index < a.length; index++) {
    if (a[index]>100) {
        sum+=a[index];
        
    }
    
}
console.log(sum);