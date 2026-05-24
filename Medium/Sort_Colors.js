let nums = [2,0,2,1,1,0]

let ans=[]
let las=[]
for(let i=0;i<nums.length;i++){
    if(nums[i]===0) ans.unshift(nums[i])
    else if(nums[i]===1) ans.push(nums[i])
    else las.push(nums[i])
}
console.log([...ans,...las])