let nums=[-2,1,-3,4,-1,2,1,-5,4]

let cs=nums[0]  
//if cs or max = 0 means it will fail for
//  [-1] this test csae ans=-1 but we will get 0
let max=nums[0]

for(let i=1;i<nums.length;i++){
    cs=Math.max(nums[i],cs+nums[i])
    max=Math.max(cs,max)
}
console.log(max)