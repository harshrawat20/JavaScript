const arr=[1,2,3,4,5];
// const ans=arr.filter((currVal,index)=>{
//     return currVal<3;
// })

Array.prototype.myFilter= function(callback){
const arr=this;
const ans=[];

for(let i=0;i<arr.length;i++)
{
    if(callback(arr[i],i))
    ans.push(arr[i]);
}
return ans;
}

const ans2=arr.myFilter((currVal,index)=>{
    console.log(index)
return currVal<3;
})
console.log(ans2)