let arr=[1,2]

let max=0
let min
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        // console.log(j-i*arr[j])
        // if(arr[i]-arr[j]>=0){
        console.log("(",arr[i]-arr[j] ,")" ,"(",j,i,")","(",j-i,")",(j-i)*arr[j])
        min=Math.min(arr[i],arr[j])
        if((j-i)*min>max) max=(j-i)*min
    }
}
// }
console.log(max)