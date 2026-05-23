 let nums1 = [1,2,3,0,0,0] 
 let m = 3 
 let nums2 = [2,5,6]
 let n = 3

let arr=[]
for(let i=0;i<m;i++){
    arr.push(nums1[i])
}
for(let i=0;i<n;i++){
    arr.push(nums2[i])
}
arr.sort((a,b)=>a-b)
for(let i = 0; i < arr.length; i++) {
        nums1[i] = arr[i]
    }
console.log(nums1)