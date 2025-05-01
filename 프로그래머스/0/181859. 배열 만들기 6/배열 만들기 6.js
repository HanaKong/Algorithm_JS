function solution(arr, answer = [arr[0]]) {
    for (const v of arr.slice(1)) {
        if(v === answer.at(-1)) answer.pop();
        else answer.push(v);
    }
    return answer.length ? answer : [-1]; 
}