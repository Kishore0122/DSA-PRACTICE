// brut force--------------------------------------------------

// var majorityElement = function(nums) {
//     let max=0
//     for(let i=0;i<nums.length;i++){
//         let c=0
//         for(let j=0;j<nums.length;j++){
//             if(nums[i]===nums[j]){
//                 c++
//             }
//         }
//         if(c>max){
//             max=c
//         }
//     }
//     return max
// };
// console.log(majorityElement(nums))



// optimal--------------------------------------------------------
let nums=[3,2,3,1,5,1,4]

let c={}  //empty object
for(let e of nums){
    if(c[e]) c[e]+=1 //creates an key c[e] and value 
    else c[e]=1
}
let max=Math.max(...Object.values(c))
for(let e in c){
    if(c[e]==max) console.log(e)
}
// let a=[]
// for(let e in c){
// a.push(Number(e))
// }
// console.log(a)
// console.log((Object.keys(c)))