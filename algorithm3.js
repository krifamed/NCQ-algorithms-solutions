function solution(A){
   let ans = 0;
   // sort the array in descending order with the abs of the values
   // example : [-11,12,1] => [1,11,12] 
    A.sort((x,y)=>Math.abs(y)-Math.abs(x));
    for(i=0;i<A.length;i++){
        ans=Math.min(Math.abs(ans+A[i]), Math.abs(ans-A[i]))
    }
    return ans;
}

// example : 
// let res = solution([1,5,2,-2])
// let res = solution([-3,-5,1,8])
// console.log(res);