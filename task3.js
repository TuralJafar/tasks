//maximum ve minumumun ededi ortasi
let a=[4,9,16,24];
let max=a[0];
let min=a[0];
let avarage=0;
for (let index = 0; index< a.length; index++) {
    if (a[index]>max) {
        max=a[index];
        
    }
   if(a[index]<min){
        min=a[index];
        
} 
  
}
avarage=(max+min)/2;
console.log(avarage);