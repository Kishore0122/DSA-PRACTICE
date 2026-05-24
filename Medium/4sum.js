let nums=[1,0,-1,0,-2,2]
let target = 0
let n=nums.length
nums.sort((a,b)=>a-b)
let arr=[]
for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){
    if(nums[i]===nums[i-1]) continue
    if(nums[j]===nums[j-1]) continue
    // let j=i+1
    let p=j+1
    let q=n-1
    while(p<q){
    let sum=nums[i]+nums[j]+nums[p]+nums[q]
    if(sum>target){
        q--
    }else if(sum<target){
        p++
    }
    else{
        arr.push([nums[i],nums[j],nums[p],nums[q]])
        q--
        p++
        while(p<q && nums[p]===nums[p-1]){
            p++
        }
        while(p<q && nums[q]===nums[q+1]) q--
    }
    }
}
}
console.log(arr)