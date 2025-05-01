function solution(arr) {
    let stk = [];
    let i = 0;
    while (i < arr.length) {
        if(stk.length === 0) {
            stk.push(arr[i]);
            i += 1;
        }
        // else if (stk[stk.length-1] < arr[i]) { 구형 브라우저 지원이 필요할 경우
        else if (stk.at(-1) < arr[i]) { // 신형 브라우저 
            stk.push(arr[i]);
            i += 1;
        }
        else {
            stk.pop();
        }
        
    }
    return stk;
}