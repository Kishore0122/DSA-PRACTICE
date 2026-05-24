let prices=[7,1,5,3,6,4]
let min=prices[0]
let ans=0
for(let i=0;i<prices.length;i++){
    if(prices[i]<min){
        min=prices[i]
    }
    console.log(min,prices[i])
    let p=prices[i]-min
    if(p>ans){
        ans=p
    }
}
console.log(ans)