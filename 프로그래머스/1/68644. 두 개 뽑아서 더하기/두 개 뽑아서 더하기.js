function solution(numbers) {
    let arr = [];
    let N = numbers.length;
    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            arr.push(numbers[i] + numbers[j]);
        }
    }
    
    return [...new Set(arr)].sort((a,b) => a - b);
}