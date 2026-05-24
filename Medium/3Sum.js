let nums = [-1, 0, 1, 2, -1, -4]
// Brute force .................................................
// let arr = []
// for (let i = 0; i < 2 ** nums.length; i++) {
//     let temp = []
//     for (let j = 0; j < nums.length; j++) {
//         if (i & (2 ** j)) {
//             temp.push(nums[j])
//         }
//     }
//     if (temp.length === 3) arr.push(temp)
// }
// let ans=[]
// for (let e of arr) {
//     let sum=0
//     for(let c of e){
//         sum+=c
//     }
//     if(sum===0){
//         let sort=e.sort((a,b)=>a-b)
//             ans.push(JSON.stringify(sort))
//         }
// }
// let set=[...new Set(ans)]
// let result = set.map(a => JSON.parse(a))
// console.log(result)
//Optimal approch.............................................
nums.sort((a,b)=>a-b)
let ans=[]
for(let i=0;i<nums.length;i++){
let j=i+1
let k=nums.length-1
    if(i>0 && nums[i]==nums[i-1]) continue;
    while(j<k){
        let sum=nums[i]+nums[j]+nums[k]
        if(sum<0)j++
        else if(sum>0) k--
        else {
            ans.push([nums[i],nums[j],nums[k]])
            j++
            k--
    }
    while(j<k && nums[j]==nums[j-1]) j++
    while(j < k && nums[k] == nums[k + 1]) {
    k--
}
    }
}
console.log(ans)