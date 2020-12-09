let memo = Array(50000).fill(-1);

const combination = (n, p) =>{
    if(p > n-p) p = n-p;
    let ans = 1;
    for(let i =1; i<=p; i++){
        ans *= n-p+i;
        ans /= i;
    }
    return ans;
}
// console.log(combination(50000,25))

const solve_each = (x, MOD) => {
   
    // the idea is to remove tow '1' and insert one '2' then add all the possible combination 
    /* example : 
        x = 4
        * first step : 1 1 1 1 | ans = 1
        * 1 1 2 | ans + = C(3,1) 
        * 2 2 |ans+= C(2,2)
    */
    let res = [];
    let ans = 1;
         // x/2|0 <==> Math.floor 
    for(let i=1;i<=x/2|0;i++){
        ans+=combination(x-i,i);
    }
    // memoize the value of A[i] 
    memo[x] = ans;
    return ans%Math.pow(2,MOD);
}


function solution (A, B){
    let result = [];
    let x;
    for(let i=0;i<A.length;i++){
        // solve each element in the array
        // we used memoization(dynamic programming) here to reduce the call of solve_each 
        // if we already calculate A[i] before , then we use this result , no need to recalculate again
        if(memo[A[i]]!==-1) x = memo[A[i]]%Math.pow(2,B[i]);
        else x= solve_each(A[i],B[i]);
        result.push(x);
    }
    return result;
}
// example :

// const res = solution([4,4,5,5,1],[3,2,4,3,1])
// console.log(res);