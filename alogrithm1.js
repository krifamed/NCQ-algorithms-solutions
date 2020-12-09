function solution(N, A){
// intialize the result array [0,0,0,0 ...]
    let res = Array(N).fill(0);

    let max_value = 0;
    for(let i=0;i<A.length;i++){
        if(A[i]<=N){
            res[A[i]-1]++;
            max_value = Math.max(max_value, res[A[i]-1]);
        }
        if(A[i]===N+1){
            res = Array(N).fill(max_value);
        }
    }
    return res;
}
// example to test the algorithm
// let res = solution(5,[3,4,4,6,1,4,4]);
// console.log(res);