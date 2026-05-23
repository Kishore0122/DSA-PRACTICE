let grid =[[9,1,7],[8,9,2],[3,4,6]]

let obj = {}
let max=0
let co=0
let sum=0
let ans
for (let e of grid) {
    for (let c of e) {
        if (obj[c]) {
            obj[c] += 1
        }
        else {
            obj[c] = 1
            sum+=c
        }
        co++
        if(obj[c]>max){
            max=obj[c]
            ans=c
        }
    }
}
let miss=((co*(co+1))/2)-sum
console.log(ans)
console.log(miss)