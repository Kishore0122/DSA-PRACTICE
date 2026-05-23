   let nums = [4,1,2,1,2]
   
   let obj={}
    for(let e of nums){
        if(obj[e]){
            obj[e]+=1
        }
        else{
            obj[e]=1
        }
    }
    for(let e in obj){

        if(obj[e]===1) console.log(e)
    }
  