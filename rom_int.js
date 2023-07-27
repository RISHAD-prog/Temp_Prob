function rom_to_int (arr){
    
        let integer=[1,5,10,50,100,500,1000];
        let sum=0;
        for (let i=0;i<arr.length;i++)
        {
         if(arr[i]=='I')
         {
             if(arr[i+1]=='V')
             {
                 sum=sum+integer[1]-integer[0];
                 i +=1;
             }
             else if(arr[i+1]=='X')
             {
                 sum=sum+integer[2]-integer[0];
                 i +=1;
             }
             else
             {
                 sum=sum+integer[0];
             }
         }
         else if(arr[i]=='V')
         {
             sum=sum+integer[1];
         }
         else if(arr[i]=='X')
         {
             if(arr[i+1]=='L')
             {
                 sum=sum+integer[3]-integer[2];
                 i +=1;
             }
             else if(arr[i+1]=='C')
             {
                 sum=sum+integer[4]-integer[2];
                 i +=1;
             }
             else
             {
                 sum=sum+integer[2];
             }
         }
         else if(arr[i]=='L')
         {
             sum=sum+integer[3];
         }
         else if(arr[i]=='C')
         {
             if(arr[i+1]=='D')
             {
                 sum=sum+integer[5]-integer[4];
                 i +=1;
             }
             else if(arr[i+1]=='M')
             {
                 sum=sum+integer[6]-integer[4];
                 i +=1;
             }
             else
             {
                 sum=sum+integer[4];
             }
 
         }
         else if(arr[i]=='D')
         {
             sum=sum+integer[5];
         }
         else if(arr[i]=='M')
         {
             sum=sum+integer[6];
         }
         else
         {
             sum=0;
         }
 
        }
            return sum;

}

const romanNum = "Vi";
const result = rom_to_int (romanNum.toLocaleUpperCase());

console.log (result);