var num=2163;
        var result=0;
        var ilk_mertebe=num%10;
        var next_mertebe=0;
        while(num>0){
            next_mertebe=(num%10)%10;
                if(next_mertebe>=ilk_mertebe){
                    result= next_mertebe;          
        }
        num=num/10;
    }
    
console.log(result);