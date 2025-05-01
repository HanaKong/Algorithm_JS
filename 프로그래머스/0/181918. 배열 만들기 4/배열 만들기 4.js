function solution(arr) {
    let stk = [];
    for (const v of arr) {
        while (stk.at(-1) >= v) stk.pop();
        stk.push(v);
    }
    return stk;
}